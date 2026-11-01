<script lang="ts">
	import { ArrowRight, BookOpen, Bookmark, Flag, PenLine, Search, Target } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import StudyBar from '$lib/components/common/StudyBar.svelte';
	import { CATEGORY_ACCENT, getModule } from '$lib/data/modules';
	import { getParts, groupedParts, partForAnchor, readHref, subjectUnits, unitKey } from '$lib/content';
	import { essayStatus } from '$lib/alac';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn, pct } from '$lib/utils';

	const subject = $derived(getModule(page.params.slug ?? '')!);
	const accent = $derived(CATEGORY_ACCENT[subject.subjectCategory]);
	const parts = $derived(getParts(subject));
	const groups = $derived(groupedParts(subject));

	// Old links: /module/x?tab=mcq, ?tab=alac, and /module/x#some-anchor from the single-page guide.
	$effect(() => {
		const tab = page.url.searchParams.get('tab');
		if (tab === 'mcq' && subject.mcqs.length) goto(`/module/${subject.id}/practice`, { replace: true });
		else if (tab === 'alac' && subject.essays.length) goto(`/module/${subject.id}/essays`, { replace: true });
		else if (page.url.hash.length > 1) {
			const anchor = decodeURIComponent(page.url.hash.slice(1));
			const part = partForAnchor(subject, anchor);
			if (part) goto(readHref(subject.id, part.id, anchor === part.id ? undefined : anchor), { replace: true });
		}
	});

	const units = $derived(subjectUnits(subject));
	const reading = $derived(userStorage.readingProgress(units));
	const stats = $derived(userStorage.stats(subject.legacyIds));
	const last = $derived(userStorage.reading.lastBySubject[subject.id]);
	const recent = $derived(userStorage.reading.recent.filter((r) => r.subjectId === subject.id).slice(0, 4));
	const bookmarks = $derived(userStorage.reading.bookmarks.filter((b) => b.subjectId === subject.id).slice(0, 5));

	// Practice topics answered wrong most recently, and essays flagged for review.
	const needsReview = $derived.by(() => {
		const wrong = new Map<string, { name: string; topicId: string; n: number }>();
		for (const q of subject.mcqs) {
			const a = userStorage.mcqAttempts[q.id];
			if (!a || a.isCorrect) continue;
			const id = q.topicId ?? 'all';
			const row = wrong.get(id) ?? { name: subject.topics?.find((t) => t.id === id)?.name ?? q.topic, topicId: id, n: 0 };
			row.n++;
			wrong.set(id, row);
		}
		const flagged = subject.essays.filter((e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review');
		return { topics: [...wrong.values()].sort((a, b) => b.n - a.n).slice(0, 4), essays: flagged.slice(0, 4) };
	});

	const mcqCount = (topicId: string) => subject.mcqs.filter((q) => q.topicId === topicId).length;
	const essayCount = (title: string) => subject.essays.filter((e) => e.topic === title).length;
	const essaysMastered = $derived(stats.mastered);
</script>

<svelte:head><title>{subject.title} — Subpoena Colada</title></svelte:head>

<div class="mx-auto flex max-w-[75rem] flex-col gap-9 px-4 pt-7 pb-16 sm:px-8">
	<div class="flex flex-col gap-4">
		<Breadcrumbs items={[{ label: 'Subjects', href: '/#subjects' }, { label: subject.title }]} />
		<div class="flex flex-wrap items-end gap-x-8 gap-y-5">
			<div class="flex min-w-0 flex-[1_1_34rem] flex-col gap-3">
				<p class="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase" style="color:var(--{accent})">
					<span class="h-1 w-5 rounded-full" style="background:var(--{accent})"></span>{subject.subjectCategory.replace(' — Supplement', '')}
				</p>
				<h1 class="font-brand text-[2.25rem] leading-[1.1] font-semibold sm:text-[2.75rem]">{subject.title}</h1>
				<p class="text-sm text-muted-foreground">{subject.legalScope}</p>
				<p class="max-w-3xl font-serif text-lg leading-relaxed text-muted-foreground">{subject.description}</p>
			</div>
			<div class="flex flex-wrap gap-2">
				{#if last}
					<a href={readHref(subject.id, last.partId, last.anchor)} class="inline-flex h-11 items-center gap-2.5 rounded-lg bg-primary px-5 font-semibold text-primary-foreground no-underline hover:bg-primary/85">
						Continue · {last.title.length > 34 ? last.title.slice(0, 32) + '…' : last.title} <ArrowRight class="size-4" />
					</a>
				{:else if parts[0]}
					<a href={readHref(subject.id, parts[0].id)} class="inline-flex h-11 items-center gap-2.5 rounded-lg bg-primary px-5 font-semibold text-primary-foreground no-underline hover:bg-primary/85">
						Start reading <ArrowRight class="size-4" />
					</a>
				{/if}
				<button type="button" onclick={() => ui.openSearch('', 'subject')} class="inline-flex h-11 items-center gap-2 rounded-lg border border-input bg-popover px-4 font-medium hover:bg-muted">
					<Search class="size-4" /> Search {subject.title.split(' (')[0]}
				</button>
			</div>
		</div>
	</div>

	<div class="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
		<a href={last ? readHref(subject.id, last.partId, last.anchor) : readHref(subject.id, parts[0]?.id ?? '')} class="flex flex-col gap-3 rounded-xl border bg-card p-5 text-foreground no-underline hover:border-input">
			<span class="flex items-center gap-2 text-sm font-semibold"><BookOpen class="size-4" /> Study guide</span>
			<StudyBar studied={reading.studied} visited={reading.visited} total={reading.total} label="Study guide" />
			<span class="text-[0.8125rem] text-muted-foreground">{reading.studied} of {reading.total} topics studied{reading.visited ? ` · ${reading.visited} visited` : ''}</span>
		</a>
		{#if subject.mcqs.length}
			<a href="/module/{subject.id}/practice" class="flex flex-col gap-3 rounded-xl border bg-card p-5 text-foreground no-underline hover:border-input">
				<span class="flex items-center gap-2 text-sm font-semibold"><Target class="size-4" /> MCQs and timed exams</span>
				<div class="flex h-1.5 overflow-hidden rounded-full bg-muted"><span class="bg-blue" style="width:{pct(stats.attempted, subject.mcqs.length)}%"></span></div>
				<span class="text-[0.8125rem] text-muted-foreground">{stats.attempted} of {subject.mcqs.length} answered{stats.attempted ? ` · ${stats.accuracy}% correct` : ''}</span>
			</a>
		{/if}
		{#if subject.essays.length}
			<a href="/module/{subject.id}/essays" class="flex flex-col gap-3 rounded-xl border bg-card p-5 text-foreground no-underline hover:border-input">
				<span class="flex items-center gap-2 text-sm font-semibold"><PenLine class="size-4" /> ALAC essays</span>
				<div class="flex h-1.5 overflow-hidden rounded-full bg-muted"><span class="bg-green" style="width:{pct(essaysMastered, subject.essays.length)}%"></span></div>
				<span class="text-[0.8125rem] text-muted-foreground">{essaysMastered} of {subject.essays.length} mastered{stats.needsReview ? ` · ${stats.needsReview} to review` : ''}</span>
			</a>
		{/if}
	</div>

	<div class="flex flex-wrap items-start gap-8">
		<section aria-labelledby="contents" class="flex min-w-0 flex-[999_1_36rem] flex-col gap-4">
			<h2 id="contents" class="font-heading text-2xl font-semibold">Contents</h2>
			{#if subject.studyGuideIntro}<p class="text-[0.9375rem] leading-relaxed text-muted-foreground">{subject.studyGuideIntro}</p>{/if}
			<div class="overflow-hidden rounded-xl border bg-card">
				{#each groups as g, gi (g.title)}
					{#if groups.length > 1}<p class={cn('label-caps bg-popover px-5 py-3 text-[0.7rem]', gi > 0 && 'border-t')}>{g.title}</p>{/if}
					{#each g.parts as p (p.id)}
						{@const prog = userStorage.readingProgress(p.units.map((u) => unitKey(subject.id, p.id, u)))}
						{@const mcqs = mcqCount(p.id)}
						{@const essays = essayCount(p.title)}
						<a href={readHref(subject.id, p.id)} class="grid grid-cols-[minmax(0,1fr)_5.5rem] items-center gap-4 border-t px-5 py-3 text-foreground no-underline first:border-t-0 hover:bg-popover sm:grid-cols-[minmax(0,1fr)_auto_6rem]">
							<span class="font-serif text-base leading-snug">
								{#if p.label}<strong class="font-semibold">{p.label}</strong> — {p.name}{:else}{p.title}{/if}
							</span>
							<span class="text-[0.8125rem] whitespace-nowrap text-muted-foreground tabular-nums max-sm:hidden">
								{p.kind === 'cases' ? `${p.caseGroups.reduce((n, cg) => n + cg.cases.length, 0)} digests` : p.topics.length ? `${p.topics.length} topics` : 'Single section'}{mcqs ? ` · ${mcqs} MCQs` : ''}{essays ? ` · ${essays} essays` : ''}
							</span>
							<span class="flex flex-col gap-1">
								<StudyBar studied={prog.studied} visited={prog.visited} total={prog.total} label={p.title} />
								<span class="text-right text-xs text-muted-foreground tabular-nums">{prog.studied === prog.total ? 'Studied' : `${prog.studied}/${prog.total}`}</span>
							</span>
						</a>
					{/each}
				{/each}
			</div>
		</section>

		<aside class="flex min-w-0 flex-[1_1_18rem] flex-col gap-5">
			<section aria-labelledby="recent" class="overflow-hidden rounded-xl border bg-card">
				<h2 id="recent" class="label-caps px-4 py-3 text-[0.7rem]">Recently read</h2>
				{#each recent as r (r.partId)}
					<a href={readHref(subject.id, r.partId, r.anchor)} class="flex flex-col gap-0.5 border-t px-4 py-3 text-foreground no-underline hover:bg-popover">
						<span class="text-sm font-medium">{r.title}</span>
						<span class="text-xs text-muted-foreground">{new Date(r.at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
					</a>
				{:else}
					<p class="border-t px-4 py-3 text-sm text-muted-foreground">Nothing yet. Your place is remembered as you read.</p>
				{/each}
			</section>

			{#if needsReview.topics.length || needsReview.essays.length}
				<section aria-labelledby="review" class="overflow-hidden rounded-xl border bg-card">
					<h2 id="review" class="label-caps px-4 py-3 text-[0.7rem]">Needs review</h2>
					{#each needsReview.topics as t (t.topicId)}
						<a href="/module/{subject.id}/practice?topic={t.topicId}&filter=incorrect" class="flex items-start gap-3 border-t px-4 py-3 text-foreground no-underline hover:bg-popover">
							<span class="mt-0.5 shrink-0 rounded-md bg-red/12 px-1.5 py-0.5 text-xs font-semibold text-red">{t.n} wrong</span>
							<span class="text-sm font-medium">{t.name}</span>
						</a>
					{/each}
					{#each needsReview.essays as e (e.id)}
						<a href="/module/{subject.id}/essays?essay={encodeURIComponent(e.id)}" class="flex items-start gap-3 border-t px-4 py-3 text-foreground no-underline hover:bg-popover">
							<Flag class="mt-0.5 size-4 shrink-0 text-orange" />
							<span class="flex flex-col gap-0.5"><span class="text-sm font-medium">{e.title}</span><span class="text-xs text-muted-foreground">ALAC · {e.topic}</span></span>
						</a>
					{/each}
				</section>
			{/if}

			<section aria-labelledby="bm" class="overflow-hidden rounded-xl border bg-card">
				<h2 id="bm" class="label-caps px-4 py-3 text-[0.7rem]">Bookmarked</h2>
				{#each bookmarks as b (b.id)}
					<a href={readHref(subject.id, b.partId, b.anchor)} class="flex items-start gap-3 border-t px-4 py-3 text-foreground no-underline hover:bg-popover">
						<Bookmark class="mt-0.5 size-4 shrink-0 fill-current text-muted-foreground" />
						<span class="text-sm font-medium">{b.title}</span>
					</a>
				{:else}
					<p class="border-t px-4 py-3 text-sm text-muted-foreground">Bookmark a part or topic from the reader to keep it here.</p>
				{/each}
			</section>

			{#if subject.sources.some((s) => s.legend?.length)}
				<section aria-labelledby="legend" class="flex flex-col gap-3 rounded-xl border bg-card p-4">
					<h2 id="legend" class="label-caps text-[0.7rem]">Color legend</h2>
					{#each subject.sources.filter((s) => s.legend?.length) as src (src.id)}
						{#if subject.sources.length > 1}<p class="text-xs font-medium text-foreground">{src.eyebrow ?? src.title}</p>{/if}
						<ul class="flex flex-col gap-1.5 text-[0.8125rem] text-muted-foreground">
							{#each src.legend ?? [] as item (item.label)}
								<li class="flex items-center gap-2.5"><span class="size-3 shrink-0 rounded" style="background:color-mix(in oklab, var(--{item.color}) 20%, transparent); border:1px solid var(--{item.color})"></span>{item.label}</li>
							{/each}
						</ul>
					{/each}
				</section>
			{/if}
		</aside>
	</div>
</div>
