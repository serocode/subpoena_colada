<script lang="ts">
	import {
		Bookmark,
		BookmarkCheck,
		ChevronLeft,
		ChevronRight,
		CircleCheck,
		CircleX,
		Clock,
		Lightbulb,
		RotateCcw,
		Play,
		Send,
		TriangleAlert,
		Trophy,
		Eye,
		Inbox,
		Flag,
		BookOpen
	} from '@lucide/svelte';
	import { onDestroy } from 'svelte';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import Segmented from '$lib/components/common/Segmented.svelte';
	import { getPart, readHref } from '$lib/content';
	import { ui } from '$lib/stores/ui.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn, formatClock, pct, seededOrder } from '$lib/utils';
	import type { McqQuestion, McqTag, Subject } from '$lib/types';

	type Mode = 'practice' | 'exam';
	type Filter = 'all' | 'unanswered' | 'incorrect' | 'bookmarked';

	let {
		lawModule,
		topicId = 'all',
		initialMode = 'practice',
		initialFilter = 'all',
		initialQuestion = '',
		onchange
	}: {
		lawModule: Subject;
		/** Set by the navigator (?topic=); the page re-mounts the engine when it changes. */
		topicId?: string;
		initialMode?: Mode;
		initialFilter?: Filter;
		/** Open at this question (?question=), e.g. from search. */
		initialQuestion?: string;
		/** Mode and filter go back into the URL, so a refresh or a shared link keeps them. */
		onchange?: (s: { mode: Mode; filter: Filter; question?: string }) => void;
	} = $props();

	type Phase = 'setup' | 'running' | 'submitted';

	const FILTERS: { id: Filter; label: string }[] = [
		{ id: 'all', label: 'All' },
		{ id: 'unanswered', label: 'Unanswered' },
		{ id: 'incorrect', label: 'Incorrect' },
		{ id: 'bookmarked', label: 'Bookmarked' }
	];

	const TAGS: Record<McqTag, { label: string; cls: string }> = {
		memorization: { label: 'Memorization', cls: 'border-yellow/40 bg-yellow/12 text-yellow' },
		requisites: { label: 'Requisites', cls: 'border-green/40 bg-green/12 text-green' },
		exceptions: { label: 'Exceptions', cls: 'border-blue/40 bg-blue/12 text-blue' },
		effects: { label: 'Effects', cls: 'border-purple/40 bg-purple/12 text-purple' },
		jurisprudence: { label: 'Jurisprudence', cls: 'border-red/40 bg-red/12 text-red' }
	};

	const byId = $derived(new Map(lawModule.mcqs.map((q) => [q.id, q])));
	const topics = $derived(lawModule.topics ?? []);

	// svelte-ignore state_referenced_locally — the page re-mounts the engine per topic
	let mode = $state<Mode>(initialMode);
	// svelte-ignore state_referenced_locally
	let filter = $state<Filter>(initialFilter);
	let phase = $state<Phase>('setup');
	/** Frozen list of question ids for this session, so answering never reshuffles the list under you. */
	let sessionIds = $state<string[]>([]);
	let index = $state(0);
	let hintOpen = $state(false);

	// Exam state
	let examAnswers = $state<Record<string, number>>({});
	let examMinutes = $state(1);
	let deadline = $state(0);
	let startedAt = $state(0);
	let secondsLeft = $state(0);
	let secondsUsed = $state(0);
	let confirmSubmit = $state(false);
	/** Exam: questions marked to come back to. */
	let flagged = $state<Record<string, boolean>>({});

	let cardEl: HTMLElement | undefined = $state();
	let rootEl: HTMLElement | undefined = $state();

	// ---- derived ----
	const total = $derived(sessionIds.length);
	const current = $derived<McqQuestion | undefined>(byId.get(sessionIds[index]));
	const order = $derived(current ? seededOrder(current.options.length, current.id) : []);
	const attempt = $derived(current ? userStorage.mcqAttempts[current.id] : undefined);
	const selected = $derived.by(() => {
		if (!current) return undefined;
		return mode === 'exam' ? examAnswers[current.id] : attempt?.selectedIndex;
	});
	const revealed = $derived(mode === 'practice' ? !!attempt : phase === 'submitted' && current !== undefined);
	const examRunning = $derived(mode === 'exam' && phase === 'running');

	const answeredInSet = $derived(
		sessionIds.reduce((n, id) => n + ((mode === 'exam' ? examAnswers[id] !== undefined : !!userStorage.mcqAttempts[id]) ? 1 : 0), 0)
	);
	const progressValue = $derived(pct(answeredInSet, total));

	const filterCounts = $derived.by(() => {
		const scope = lawModule.mcqs.filter((q) => topicId === 'all' || q.topicId === topicId);
		return {
			all: scope.length,
			unanswered: scope.filter((q) => !userStorage.mcqAttempts[q.id]).length,
			incorrect: scope.filter((q) => userStorage.mcqAttempts[q.id] && !userStorage.mcqAttempts[q.id].isCorrect).length,
			bookmarked: scope.filter((q) => userStorage.isBookmarked(q.id)).length
		} satisfies Record<Filter, number>;
	});

	const watchFor = $derived(lawModule.watchFor?.[topicId === 'all' ? 'all' : topicId]);
	/** The guide part a question's topic matches (Criminal Procedure: Rule 110 questions → Rule 110). */
	const guidePart = $derived(current?.topicId ? getPart(lawModule, current.topicId) : undefined);
	const unansweredNumbers = $derived(sessionIds.map((id, i) => (examAnswers[id] === undefined ? i + 1 : 0)).filter(Boolean));
	const flaggedCount = $derived(sessionIds.filter((id) => flagged[id]).length);

	const result = $derived.by(() => {
		if (phase !== 'submitted') return null;
		const qs = sessionIds.map((id) => byId.get(id)!).filter(Boolean);
		const correct = qs.filter((q) => examAnswers[q.id] === q.correctIndex).length;
		const answered = qs.filter((q) => examAnswers[q.id] !== undefined).length;
		const byTopic = new Map<string, { name: string; correct: number; total: number }>();
		for (const q of qs) {
			const row = byTopic.get(q.topic) ?? { name: q.topic, correct: 0, total: 0 };
			row.total++;
			if (examAnswers[q.id] === q.correctIndex) row.correct++;
			byTopic.set(q.topic, row);
		}
		return { total: qs.length, correct, answered, skipped: qs.length - answered, byTopic: [...byTopic.values()] };
	});

	// ---- session building ----
	function matches(q: McqQuestion) {
		if (topicId !== 'all' && q.topicId !== topicId) return false;
		const a = userStorage.mcqAttempts[q.id];
		switch (filter) {
			case 'unanswered':
				return !a;
			case 'incorrect':
				return !!a && !a.isCorrect;
			case 'bookmarked':
				return userStorage.isBookmarked(q.id);
			default:
				return true;
		}
	}

	function rebuild() {
		sessionIds = lawModule.mcqs.filter(matches).map((q) => q.id);
		index = 0;
		hintOpen = false;
		examAnswers = {};
		flagged = {};
		phase = 'setup';
		examMinutes = Math.max(1, sessionIds.length);
		confirmSubmit = false;
	}
	rebuild();
	// Arriving at a specific question: show it, even if the filter would have hidden it.
	if (initialQuestion && byId.has(initialQuestion)) {
		if (!sessionIds.includes(initialQuestion)) {
			filter = 'all';
			rebuild();
		}
		index = Math.max(0, sessionIds.indexOf(initialQuestion));
	}

	function report() {
		onchange?.({ mode, filter });
	}
	function setMode(m: Mode) {
		if (m === mode || examRunning) return;
		mode = m;
		rebuild();
		report();
	}
	function setFilter(f: Filter) {
		if (examRunning) return;
		filter = f;
		rebuild();
		report();
	}

	$effect(() => {
		ui.focusMode = mode === 'exam' && phase === 'running';
	});
	onDestroy(() => (ui.focusMode = false));

	// ---- navigation ----
	function go(i: number) {
		if (i < 0 || i >= total || (mode === 'exam' && phase === 'setup')) return;
		index = i;
		hintOpen = false;
		if (cardEl && cardEl.getBoundingClientRect().top < 56) cardEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
	}

	// ---- answering ----
	function choose(optionIndex: number) {
		if (!current || revealed) return;
		if (mode === 'practice') {
			userStorage.recordMcqAttempt(current.id, optionIndex, optionIndex === current.correctIndex);
		} else if (examRunning) {
			examAnswers[current.id] = optionIndex;
		}
	}

	function retry() {
		if (current) userStorage.clearMcqAttempt(current.id);
		hintOpen = false;
	}

	// ---- exam ----
	function startExam() {
		if (!total) return;
		examAnswers = {};
		index = 0;
		startedAt = Date.now();
		deadline = startedAt + Math.max(1, examMinutes) * 60_000;
		secondsLeft = Math.ceil((deadline - Date.now()) / 1000);
		phase = 'running';
	}

	function submitExam() {
		if (phase !== 'running') return;
		secondsUsed = Math.round((Math.min(Date.now(), deadline) - startedAt) / 1000);
		for (const id of sessionIds) {
			const q = byId.get(id);
			const sel = examAnswers[id];
			if (q && sel !== undefined) userStorage.recordMcqAttempt(id, sel, sel === q.correctIndex);
		}
		phase = 'submitted';
		confirmSubmit = false;
		index = 0;
	}

	function requestSubmit() {
		if (answeredInSet < total) confirmSubmit = true;
		else submitExam();
	}

	$effect(() => {
		if (phase !== 'running') return;
		const id = setInterval(() => {
			secondsLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
			if (secondsLeft <= 0) submitExam();
		}, 250);
		return () => clearInterval(id);
	});

	function onBeforeUnload(e: BeforeUnloadEvent) {
		if (examRunning) e.preventDefault();
	}

	// ---- keyboard ----
	function onKey(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey || !rootEl || rootEl.closest('[hidden]')) return;
		const t = e.target as HTMLElement | null;
		if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return;
		if (document.querySelector('[role="dialog"]')) return;
		if (e.key === 'ArrowRight') go(index + 1);
		else if (e.key === 'ArrowLeft') go(index - 1);
		else if (current && !(mode === 'exam' && phase === 'setup')) {
			const n = e.key.length === 1 ? 'abcdefgh'.indexOf(e.key.toLowerCase()) : -1;
			const num = /^[1-8]$/.test(e.key) ? Number(e.key) - 1 : -1;
			const pos = n >= 0 ? n : num;
			if (pos >= 0 && pos < order.length) choose(order[pos]);
			else if (e.key.toLowerCase() === 'n' && revealed) go(index + 1);
		} else return;
		if (['ArrowRight', 'ArrowLeft'].includes(e.key)) e.preventDefault();
	}

	function mapState(id: string): 'correct' | 'incorrect' | 'answered' | 'none' {
		const q = byId.get(id);
		if (!q) return 'none';
		if (mode === 'practice') {
			const a = userStorage.mcqAttempts[id];
			return !a ? 'none' : a.isCorrect ? 'correct' : 'incorrect';
		}
		const s = examAnswers[id];
		if (s === undefined) return 'none';
		if (phase === 'submitted') return s === q.correctIndex ? 'correct' : 'incorrect';
		return 'answered';
	}

	const letter = (i: number) => String.fromCharCode(65 + i);
</script>

<svelte:window onkeydown={onKey} onbeforeunload={onBeforeUnload} />

<div bind:this={rootEl} class="flex flex-col gap-5">
	<!-- Controls -->
	{#if !examRunning}
		<div class="flex flex-wrap items-center justify-between gap-3">
			<Segmented
				label="Mode"
				value={mode}
				onchange={(m: Mode) => setMode(m)}
				options={[
					{ value: 'practice', label: 'Practice' },
					{ value: 'exam', label: 'Timed exam' }
				]}
			/>
			<div role="group" aria-label="Show questions" class="flex flex-wrap gap-1.5">
				{#each FILTERS as f (f.id)}
					<button
						type="button"
						aria-pressed={filter === f.id}
						onclick={() => setFilter(f.id)}
						class={cn('inline-flex h-8 items-center gap-1.5 rounded-md border px-3 text-[0.8125rem] font-medium transition-colors', filter === f.id ? 'border-primary bg-primary text-primary-foreground' : 'border-input bg-popover hover:bg-muted')}
					>
						{f.label} <span class="tabular-nums opacity-70">{filterCounts[f.id]}</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}

	{#if total === 0}
		<EmptyState
			icon={Inbox}
			title={filter === 'unanswered' ? "You've answered everything here." : filter === 'incorrect' ? 'No incorrect answers in this set — yet.' : filter === 'bookmarked' ? 'No bookmarked questions here.' : 'No questions match.'}
		>
			{#if filter === 'bookmarked'}Tap the bookmark on any question to save it here.{/if}
			{#snippet actions()}
				<Button variant="outline" onclick={() => setFilter('all')}>Show all questions</Button>
			{/snippet}
		</EmptyState>
	{:else if mode === 'exam' && phase === 'setup'}
		<Card.Root>
			<Card.Header>
				<Card.Title class="font-heading text-lg">Timed exam</Card.Title>
				<Card.Description>
					{total} question{total === 1 ? '' : 's'}. No feedback until you submit — answers are scored and added to your progress at the end.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<label class="flex flex-wrap items-center gap-3 text-sm">
					<span class="font-medium">Time allowed</span>
					<Input type="number" min="1" max="360" bind:value={examMinutes} class="h-9 w-24" aria-label="Minutes allowed" />
					<span class="text-muted-foreground">minutes · about {Math.max(1, Math.round((examMinutes * 60) / total))}s per question</span>
				</label>
				<Button size="lg" onclick={startExam} disabled={!examMinutes || examMinutes < 1}><Play /> Start exam</Button>
			</Card.Content>
		</Card.Root>
	{:else if current}
		{#if phase === 'submitted' && result}
			<Card.Root class="border-primary/30">
				<Card.Header>
					<Card.Title class="flex items-center gap-2 font-heading text-lg"><Trophy class="size-5 text-yellow" /> Exam results</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-5">
					<div class="flex flex-wrap items-end gap-x-6 gap-y-2">
						<p class="text-5xl font-semibold tabular-nums">{pct(result.correct, result.total)}<span class="text-2xl text-muted-foreground">%</span></p>
						<p class="pb-1 text-sm text-muted-foreground">
							<span class="font-medium text-foreground tabular-nums">{result.correct}</span> of {result.total} correct ·
							{result.skipped} unanswered · {formatClock(secondsUsed)} used
						</p>
					</div>
					{#if result.byTopic.length > 1}
						<ul class="space-y-2.5">
							{#each result.byTopic as t (t.name)}
								<li>
									<div class="mb-1 flex justify-between gap-3 text-xs">
										<span class="truncate">{t.name}</span>
										<span class="shrink-0 tabular-nums text-muted-foreground">{t.correct}/{t.total}</span>
									</div>
									<Progress value={pct(t.correct, t.total)} class="h-1.5 [&>div]:bg-green" aria-label="{t.name}: {t.correct} of {t.total} correct" />
								</li>
							{/each}
						</ul>
					{/if}
					<div class="flex flex-wrap gap-2">
						<Button onclick={rebuild}><RotateCcw /> New exam</Button>
						<p class="self-center text-sm text-muted-foreground">Review each question below — explanations are unlocked.</p>
					</div>
				</Card.Content>
			</Card.Root>
		{/if}

		{#if examRunning}
			<div class="sticky top-[calc(var(--header-h)+0.5rem)] z-30 flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-popover px-4 py-2.5 shadow-sm">
				<span role="timer" aria-live="off" class={cn('inline-flex items-center gap-2 rounded-lg border border-input px-3 py-1 text-xl font-semibold tabular-nums', secondsLeft <= 60 && 'border-destructive text-destructive')}>
					<Clock class="size-[1.1rem]" />
					{formatClock(secondsLeft)}
					<span class="sr-only">remaining</span>
				</span>
				<span class="text-sm text-muted-foreground tabular-nums">{answeredInSet} of {total} answered{flaggedCount ? ` · ${flaggedCount} flagged` : ''}</span>
				<Button onclick={requestSubmit}><Send /> Submit exam</Button>
			</div>
		{/if}

		{#if mode === 'practice' && watchFor}
			<details class="group rounded-xl border border-orange/40 bg-orange/8 px-4 py-3 text-sm">
				<summary class="flex cursor-pointer list-none items-center gap-2 font-medium text-orange">
					<TriangleAlert class="size-4" /> Watch for — common traps in {topicId === 'all' ? 'this subject' : (topics.find((t) => t.id === topicId)?.name ?? 'this topic')}
				</summary>
				<div class="rich mt-3 leading-relaxed">{@html watchFor}</div>
			</details>
		{/if}

		<div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_16rem]">
		<div class="flex min-w-0 flex-col gap-4">
		<!-- Progress + navigation -->
		<div class="space-y-2">
			<div class="flex items-center justify-between gap-3 text-sm">
				<p class="font-medium">Question <span class="tabular-nums">{index + 1}</span> of <span class="tabular-nums">{total}</span></p>
				<p class="text-muted-foreground tabular-nums">{answeredInSet} answered · {progressValue}%</p>
			</div>
			<Progress value={progressValue} class="h-2" aria-label="Questions answered in this set" />
		</div>

		<div bind:this={cardEl} class="scroll-mt-20">
			{#key current.id}
				<Card.Root>
					<Card.Header class="gap-3">
						<div class="flex items-start justify-between gap-3">
							<div class="flex flex-wrap items-center gap-1.5">
								<Badge variant="outline" class="h-auto max-w-full py-0.5 whitespace-normal">{current.topic}</Badge>
								{#if current.tag}
									<Badge variant="outline" class={cn('h-auto', TAGS[current.tag].cls)}>{TAGS[current.tag].label}</Badge>
								{/if}
							</div>
							{#if examRunning}
								<Button
									variant={flagged[current.id] ? 'outline' : 'ghost'}
									size="sm"
									class={cn('-mt-1 shrink-0', flagged[current.id] && 'border-orange/60 text-orange')}
									aria-pressed={!!flagged[current.id]}
									onclick={() => current && (flagged[current.id] = !flagged[current.id])}
								>
									<Flag /> {flagged[current.id] ? 'Flagged' : 'Flag for review'}
								</Button>
							{/if}
							<Button
								variant="ghost"
								size="icon"
								class={cn('-mt-1 -mr-2 shrink-0', userStorage.isBookmarked(current.id) && 'text-yellow')}
								aria-pressed={userStorage.isBookmarked(current.id)}
								aria-label={userStorage.isBookmarked(current.id) ? 'Remove bookmark' : 'Bookmark this question'}
								title="Bookmark"
								onclick={() => userStorage.toggleBookmark(current.id)}
							>
								{#if userStorage.isBookmarked(current.id)}<BookmarkCheck />{:else}<Bookmark />{/if}
							</Button>
						</div>
						<Card.Title class="font-serif text-[1.125rem] leading-relaxed font-medium sm:text-xl">{current.question}</Card.Title>
					</Card.Header>

					<Card.Content class="space-y-4">
						<div role="group" aria-label="Answer choices" class="space-y-2.5">
							{#each order as optIdx, pos (optIdx)}
								{@const isSel = selected === optIdx}
								{@const isRight = optIdx === current.correctIndex}
								<button
									type="button"
									aria-pressed={isSel}
									aria-disabled={revealed}
									onclick={() => choose(optIdx)}
									class={cn(
										'group flex w-full items-start gap-3 rounded-xl border bg-background p-3.5 text-left text-[0.95rem] leading-relaxed transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:p-4',
										!revealed && 'hover:border-primary/50 hover:bg-accent/60',
										!revealed && isSel && 'border-primary bg-accent',
										revealed && 'cursor-default',
										revealed && isRight && 'border-correct bg-correct/12',
										revealed && isSel && !isRight && 'border-incorrect bg-incorrect/12',
										revealed && !isRight && !isSel && 'opacity-70'
									)}
								>
									<span
										class={cn(
											'mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-xs font-semibold',
											isSel && !revealed && 'border-primary bg-primary text-primary-foreground',
											revealed && isRight && 'border-correct bg-correct text-background',
											revealed && isSel && !isRight && 'border-incorrect bg-incorrect text-background'
										)}
										aria-hidden="true"
									>
										{#if revealed && isRight}<CircleCheck class="size-4" />{:else if revealed && isSel}<CircleX class="size-4" />{:else}{letter(pos)}{/if}
									</span>
									<span class="min-w-0 flex-1">
										{current.options[optIdx]}
										{#if revealed && isRight}<span class="sr-only"> — correct answer</span>{/if}
										{#if revealed && isSel && !isRight}<span class="sr-only"> — your answer, incorrect</span>{/if}
									</span>
								</button>
							{/each}
						</div>

						{#if mode === 'practice' && !revealed && current.hint}
							<div>
								<Button variant="ghost" size="sm" onclick={() => (hintOpen = !hintOpen)} aria-expanded={hintOpen}>
									<Lightbulb /> {hintOpen ? 'Hide hint' : 'Show hint'}
								</Button>
								{#if hintOpen}
									<p class="mt-2 rounded-lg border border-yellow/40 bg-yellow/10 px-3 py-2 text-sm">{current.hint}</p>
								{/if}
							</div>
						{/if}

						{#if revealed}
							<div class="space-y-3" role="status">
								{#if selected !== undefined}
									<p class={cn('flex items-center gap-2 text-sm font-semibold', selected === current.correctIndex ? 'text-correct' : 'text-incorrect')}>
										{#if selected === current.correctIndex}
											<CircleCheck class="size-4" /> Correct
										{:else}
											<CircleX class="size-4" /> Not quite — the correct answer is {letter(order.indexOf(current.correctIndex))}.
										{/if}
									</p>
								{:else}
									<p class="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><Eye class="size-4" /> Not answered — the correct answer is {letter(order.indexOf(current.correctIndex))}.</p>
								{/if}
								<Accordion.Root type="single" value="explain" class="rounded-xl border bg-muted/40 px-4">
									<Accordion.Item value="explain" class="border-b-0">
										<Accordion.Trigger class="py-3 text-sm font-semibold">Codal basis &amp; explanation</Accordion.Trigger>
										<Accordion.Content>
											<div class="space-y-3 text-sm leading-relaxed">
												{#if current.legalBasis}
													<div>
														<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Legal basis</p>
														<p class="mt-0.5 font-medium">{current.legalBasis}</p>
													</div>
												{/if}
												<div>
													<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Explanation</p>
													<p class="mt-0.5">{current.explanation}</p>
												</div>
												{#if guidePart}
													<a href={readHref(lawModule.id, guidePart.id)} class="inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline">
														<BookOpen class="size-4" /> Read {guidePart.label || guidePart.title} in the guide
													</a>
												{/if}
											</div>
										</Accordion.Content>
									</Accordion.Item>
								</Accordion.Root>
							</div>
						{/if}
					</Card.Content>

					<Card.Footer class="flex-wrap justify-between gap-2">
						<Button variant="outline" onclick={() => go(index - 1)} disabled={index === 0}><ChevronLeft /> Previous</Button>
						<div class="flex gap-2">
							{#if mode === 'practice' && revealed}
								<Button variant="ghost" onclick={retry}><RotateCcw /> Try again</Button>
							{/if}
							<Button onclick={() => go(index + 1)} disabled={index >= total - 1}>Next <ChevronRight /></Button>
						</div>
					</Card.Footer>
				</Card.Root>
			{/key}
		</div>

		</div>
		<!-- Question map -->
		<section aria-label="Question map" class="rounded-xl border bg-card p-3 sm:p-4 xl:sticky xl:top-[calc(var(--header-h)+1.5rem)]">
			<div class="mb-3 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-sm font-semibold">Jump to question</h3>
				<ul class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
					<li class="flex items-center gap-1"><span class="size-2.5 rounded-sm border border-correct bg-correct/30"></span> Correct</li>
					<li class="flex items-center gap-1"><span class="size-2.5 rounded-sm border border-incorrect bg-incorrect/30"></span> Incorrect</li>
					{#if examRunning}
						<li class="flex items-center gap-1"><span class="size-2.5 rounded-sm border border-primary bg-primary/20"></span> Answered</li>
						<li class="flex items-center gap-1"><span class="size-2.5 rounded-sm border border-dashed border-input"></span> Unanswered</li>
						<li class="flex items-center gap-1"><span class="size-2 rounded-full bg-orange"></span> Flagged</li>
					{/if}
					<li class="flex items-center gap-1"><span class="size-1.5 rounded-full bg-yellow"></span> Bookmarked</li>
				</ul>
			</div>
			<div class="grid grid-cols-[repeat(auto-fill,minmax(2.5rem,1fr))] gap-1.5 xl:grid-cols-5">
				{#each sessionIds as id, i (id)}
					{@const st = mapState(id)}
					<button
						type="button"
						onclick={() => go(i)}
						aria-label="Question {i + 1}{st === 'correct' ? ', correct' : st === 'incorrect' ? ', incorrect' : st === 'answered' ? ', answered' : examRunning ? ', unanswered' : ''}{flagged[id] ? ', flagged' : ''}{userStorage.isBookmarked(id) ? ', bookmarked' : ''}"
						aria-current={i === index ? 'true' : undefined}
						class={cn(
							'relative h-9 rounded-md border text-xs font-medium tabular-nums transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
							st === 'correct' && 'border-correct bg-correct/20 text-foreground',
							st === 'incorrect' && 'border-2 border-incorrect bg-incorrect/20 text-foreground',
							st === 'none' && examRunning && 'border-dashed',
							st === 'answered' && 'border-primary bg-primary/15',
							i === index && 'ring-2 ring-ring ring-offset-1 ring-offset-background'
						)}
					>
						{i + 1}
						{#if userStorage.isBookmarked(id)}<span class="absolute top-0.5 right-0.5 size-1.5 rounded-full bg-yellow"></span>{/if}
						{#if flagged[id]}<span class="absolute -top-1 -left-1 size-2.5 rounded-full border-2 border-card bg-orange" aria-hidden="true"></span>{/if}
					</button>
				{/each}
			</div>
			<p class="mt-3 hidden text-xs text-muted-foreground sm:block">
				Keyboard: <kbd class="rounded border bg-muted px-1">←</kbd> <kbd class="rounded border bg-muted px-1">→</kbd> to move, <kbd class="rounded border bg-muted px-1">A</kbd>–<kbd class="rounded border bg-muted px-1">D</kbd> or
				<kbd class="rounded border bg-muted px-1">1</kbd>–<kbd class="rounded border bg-muted px-1">4</kbd> to answer.
			</p>
		</section>
		</div>
	{/if}
</div>

<Dialog.Root bind:open={confirmSubmit}>
	<Dialog.Content class="sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Submit with {total - answeredInSet} unanswered?</Dialog.Title>
			<Dialog.Description>
				Question{unansweredNumbers.length === 1 ? '' : 's'} {unansweredNumbers.length > 12 ? `${unansweredNumbers.slice(0, 12).join(', ')} and ${unansweredNumbers.length - 12} more` : unansweredNumbers.join(', ')}
				{unansweredNumbers.length === 1 ? 'has' : 'have'} no answer and will count as wrong.{flaggedCount ? ` ${flaggedCount} ${flaggedCount === 1 ? 'is' : 'are'} flagged for review.` : ''}
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (confirmSubmit = false)}>Keep working</Button>
			<Button onclick={submitExam}>Submit anyway</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
