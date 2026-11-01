<script lang="ts">
	import { ArrowRight, BookOpen, Bookmark, PenLine, Target } from '@lucide/svelte';
	import StudyBar from '$lib/components/common/StudyBar.svelte';
	import { CATEGORY_ACCENT, CATEGORY_FILTERS, getModule, matchesCategory, modules, subjectForItem, totals, type CategoryFilter } from '$lib/data/modules';
	import { getParts, readHref, subjectUnits } from '$lib/content';
	import { draftHasContent } from '$lib/alac';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn, pct } from '$lib/utils';

	let category = $state<CategoryFilter>('All');

	const stats = $derived(userStorage.stats());
	const shown = $derived(modules.filter((m) => matchesCategory(m.subjectCategory, category)));
	const last = $derived(userStorage.reading.last);
	const lastSubject = $derived(last ? getModule(last.subjectId) : undefined);
	const recent = $derived(userStorage.reading.recent.filter((r) => !(last && r.subjectId === last.subjectId && r.partId === last.partId)).slice(0, 4));
	const bookmarks = $derived(userStorage.reading.bookmarks.slice(0, 4));

	/** Where practice left off: the topic of the most recent answer. */
	const lastPractice = $derived.by(() => {
		let best: { id: string; at: number } | null = null;
		for (const a of Object.values(userStorage.mcqAttempts)) if (!best || a.timestamp > best.at) best = { id: a.questionId, at: a.timestamp };
		if (!best) return null;
		const subject = subjectForItem(best.id);
		const q = subject?.mcqs.find((x) => x.id === best.id);
		if (!subject || !q) return null;
		const inTopic = subject.mcqs.filter((x) => x.topicId === q.topicId);
		const answered = inTopic.filter((x) => userStorage.mcqAttempts[x.id]).length;
		return { subject, topicId: q.topicId ?? 'all', topic: subject.topics?.find((t) => t.id === q.topicId)?.name ?? q.topic, answered, total: inTopic.length };
	});

	/** The draft touched most recently that isn't mastered yet. */
	const lastDraft = $derived.by(() => {
		const d = Object.values(userStorage.essayDrafts)
			.filter((x) => !x.isMastered && draftHasContent(x))
			.sort((a, b) => b.updatedAt - a.updatedAt)[0];
		if (!d) return null;
		const subject = subjectForItem(d.essayId);
		const e = subject?.essays.find((x) => x.id === d.essayId);
		return subject && e ? { subject, essay: e, at: d.updatedAt } : null;
	});

	const when = (t: number) => {
		const days = Math.floor((Date.now() - t) / 86_400_000);
		return days <= 0 ? 'today' : days === 1 ? 'yesterday' : `${days} days ago`;
	};
	const firstPart = (id: string) => getParts(getModule(id)!)[0]?.id ?? '';
</script>

<svelte:head><title>Subpoena Colada — Philippine Law Study Guide</title></svelte:head>

<div class="mx-auto flex max-w-[75rem] flex-col gap-10 px-4 pt-8 pb-12 sm:px-8 sm:pt-10">
	<h1 class="sr-only">Subpoena Colada</h1>

	<section aria-label="Pick up where you left off" class="flex flex-wrap gap-5">
		{#if last && lastSubject}
			<a href={readHref(last.subjectId, last.partId, last.anchor)} class="flex min-w-0 flex-[2_1_30rem] flex-col gap-3 rounded-xl border border-input bg-popover p-6 text-foreground no-underline hover:border-ring/50 sm:p-7">
				<p class="label-caps text-[0.7rem]">Continue reading</p>
				<p class="flex items-center gap-2 text-sm text-muted-foreground"><span class="h-4 w-1 rounded-full" style="background:var(--{CATEGORY_ACCENT[lastSubject.subjectCategory]})"></span>{lastSubject.title}</p>
				<h2 class="font-heading text-[1.75rem] leading-tight font-semibold sm:text-3xl">{last.title}</h2>
				<div class="mt-2 flex flex-wrap items-center gap-4">
					<span class="inline-flex h-11 items-center gap-2.5 rounded-lg bg-primary px-5 font-semibold text-primary-foreground">Continue <ArrowRight class="size-4" /></span>
					<span class="text-[0.8125rem] text-muted-foreground">Read {when(last.at)}</span>
				</div>
			</a>
		{:else}
			<div class="flex min-w-0 flex-[2_1_30rem] flex-col gap-3 rounded-xl border border-input bg-popover p-6 sm:p-7">
				<p class="label-caps text-[0.7rem]">Philippine law, 1L</p>
				<h2 class="font-brand text-[2rem] leading-tight font-semibold">Subpoena Colada</h2>
				<p class="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground">
					Color-coded study guides, situational MCQs and ALAC essays for {totals.modules} subjects. Pick a subject below to start; your place is remembered.
				</p>
			</div>
		{/if}
		{#if lastPractice || lastDraft}
			<div class="flex min-w-0 flex-[1_1_18rem] flex-col gap-5">
				{#if lastPractice}
					<a href="/module/{lastPractice.subject.id}/practice?topic={lastPractice.topicId}" class="flex flex-col gap-2.5 rounded-xl border bg-card p-5 text-foreground no-underline hover:border-input">
						<p class="label-caps text-[0.7rem]">Continue practice</p>
						<span class="font-semibold">{lastPractice.topic}</span>
						<div class="flex h-1.5 overflow-hidden rounded-full bg-muted"><span class="bg-blue" style="width:{pct(lastPractice.answered, lastPractice.total)}%"></span></div>
						<span class="text-[0.8125rem] text-muted-foreground">{lastPractice.subject.title} · {lastPractice.answered} of {lastPractice.total} answered</span>
					</a>
				{/if}
				{#if lastDraft}
					<a href="/module/{lastDraft.subject.id}/essays?essay={encodeURIComponent(lastDraft.essay.id)}" class="flex flex-col gap-2 rounded-xl border bg-card p-5 text-foreground no-underline hover:border-input">
						<p class="label-caps text-[0.7rem]">Draft in progress</p>
						<span class="font-semibold">{lastDraft.essay.title}</span>
						<span class="text-[0.8125rem] text-muted-foreground">ALAC · {lastDraft.subject.title} · saved {when(lastDraft.at)}</span>
					</a>
				{/if}
			</div>
		{/if}
	</section>

	{#if recent.length || bookmarks.length}
		<section aria-label="Recently viewed and bookmarks" class="flex flex-wrap gap-8">
			{#if recent.length}
				<div class="flex min-w-0 flex-[2_1_30rem] flex-col gap-3">
					<h2 class="font-heading text-xl font-semibold">Recently viewed</h2>
					<div class="grid gap-3 sm:grid-cols-2">
						{#each recent as r (r.subjectId + r.partId)}
							{@const s = getModule(r.subjectId)}
							<a href={readHref(r.subjectId, r.partId, r.anchor)} class="flex flex-col gap-1 rounded-xl border bg-card px-4 py-3 text-foreground no-underline hover:border-input">
								<span class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="h-3 w-[3px] rounded-full" style="background:var(--{s ? CATEGORY_ACCENT[s.subjectCategory] : 'border'})"></span>{s?.title}</span>
								<span class="text-[0.9375rem] font-medium">{r.title}</span>
							</a>
						{/each}
					</div>
				</div>
			{/if}
			{#if bookmarks.length}
				<div class="flex min-w-0 flex-[1_1_18rem] flex-col gap-3">
					<div class="flex items-baseline justify-between"><h2 class="font-heading text-xl font-semibold">Bookmarks</h2><a href="/saved?tab=bookmarks" class="text-sm font-medium no-underline hover:underline">All saved</a></div>
					<ul class="flex flex-col overflow-hidden rounded-xl border bg-card">
						{#each bookmarks as b (b.id)}
							<li class="border-t first:border-t-0">
								<a href={readHref(b.subjectId, b.partId, b.anchor)} class="flex items-start gap-3 px-4 py-3 text-foreground no-underline hover:bg-popover">
									<Bookmark class="mt-0.5 size-4 shrink-0 fill-current text-muted-foreground" />
									<span class="flex flex-col gap-0.5"><span class="text-sm font-medium">{b.title}</span><span class="text-xs text-muted-foreground">{getModule(b.subjectId)?.title}</span></span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</section>
	{/if}

	<section id="subjects" aria-labelledby="subjects-h" class="flex scroll-mt-20 flex-col gap-4">
		<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
			<h2 id="subjects-h" class="font-heading text-xl font-semibold">Subjects</h2>
			<p class="text-[0.8125rem] text-muted-foreground tabular-nums">
				{stats.attempted} of {totals.mcqs} MCQs answered{stats.attempted ? ` · ${stats.accuracy}% correct` : ''} · {stats.mastered} of {totals.essays} essays mastered
			</p>
		</div>
		<div role="group" aria-label="Filter subjects by category" class="flex flex-wrap gap-1.5">
			{#each CATEGORY_FILTERS as c (c)}
				<button
					type="button"
					aria-pressed={category === c}
					onclick={() => (category = c)}
					class={cn('h-8 rounded-md border px-3 text-[0.8125rem] font-medium transition-colors', category === c ? 'border-primary bg-primary text-primary-foreground' : 'border-input bg-popover hover:bg-muted')}
				>
					{c}
				</button>
			{/each}
		</div>
		<div class="grid gap-4 sm:grid-cols-[repeat(auto-fill,minmax(21rem,1fr))]">
			{#each shown as m (m.id)}
				{@const accent = CATEGORY_ACCENT[m.subjectCategory]}
				{@const s = userStorage.stats(m.legacyIds)}
				{@const r = userStorage.readingProgress(subjectUnits(m))}
				{@const cont = userStorage.reading.lastBySubject[m.id]}
				<article class="flex flex-col rounded-xl border bg-card">
					<div class="flex flex-1 flex-col gap-4 p-5">
						<p class="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase" style="color:var(--{accent})"><span class="h-1 w-3.5 rounded-full" style="background:var(--{accent})"></span>{m.subjectCategory.replace(' — Supplement', '')}</p>
						<div class="flex flex-col gap-1">
							<h3 class="font-heading text-[1.3125rem] leading-snug font-semibold"><a href="/module/{m.id}" class="text-foreground no-underline hover:underline">{m.title}</a></h3>
							<p class="text-[0.8125rem] text-muted-foreground">{m.legalScope.length > 110 ? m.legalScope.slice(0, 108) + '…' : m.legalScope}</p>
						</div>
						<dl class="mt-auto grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 text-[0.8125rem]">
							<dt class="flex items-center gap-1.5 text-muted-foreground"><BookOpen class="size-3.5" />Read</dt>
							<dd class="m-0"><StudyBar studied={r.studied} visited={r.visited} total={r.total} label="{m.title} reading" /></dd>
							<dd class="m-0 text-xs text-muted-foreground tabular-nums">{r.studied}/{r.total}</dd>
							{#if m.mcqs.length}
								<dt class="flex items-center gap-1.5 text-muted-foreground"><Target class="size-3.5" />MCQs</dt>
								<dd class="m-0"><div class="flex h-1.5 overflow-hidden rounded-full bg-muted"><span class="bg-blue" style="width:{pct(s.attempted, m.mcqs.length)}%"></span></div></dd>
								<dd class="m-0 text-xs text-muted-foreground tabular-nums">{s.attempted}/{m.mcqs.length}</dd>
							{/if}
							{#if m.essays.length}
								<dt class="flex items-center gap-1.5 text-muted-foreground"><PenLine class="size-3.5" />Essays</dt>
								<dd class="m-0"><div class="flex h-1.5 overflow-hidden rounded-full bg-muted"><span class="bg-green" style="width:{pct(s.mastered, m.essays.length)}%"></span></div></dd>
								<dd class="m-0 text-xs text-muted-foreground tabular-nums">{s.mastered}/{m.essays.length}</dd>
							{/if}
						</dl>
					</div>
					<div class="flex flex-wrap gap-2 border-t px-5 py-3">
						{#if cont}
							<a href={readHref(m.id, cont.partId, cont.anchor)} class="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/85">Continue <ArrowRight class="size-3.5" /></a>
						{:else}
							<a href={readHref(m.id, firstPart(m.id))} class="inline-flex h-9 items-center rounded-lg border border-input bg-popover px-3 text-sm font-medium text-foreground no-underline hover:bg-muted">Start reading</a>
						{/if}
						<a href="/module/{m.id}" class="inline-flex h-9 items-center rounded-lg border border-input bg-popover px-3 text-sm font-medium text-foreground no-underline hover:bg-muted">Overview</a>
						{#if m.mcqs.length}<a href="/module/{m.id}/practice" class="inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground no-underline hover:bg-muted hover:text-foreground">Practice</a>{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>
</div>
