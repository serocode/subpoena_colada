<script lang="ts">
	import { BookOpen, ChevronDown, FileText, PenLine, Search, SearchX, Target, X } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Segmented from '$lib/components/common/Segmented.svelte';
	import { CATEGORY_ACCENT, getModule, modules } from '$lib/data/modules';
	import { buildIndex, facets, search, suggest, KIND_LABEL, type DocKind, type SearchHit } from '$lib/search';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn } from '$lib/utils';

	const KINDS: DocKind[] = ['guide', 'case', 'mcq', 'essay'];
	const ICON = { guide: BookOpen, case: FileText, mcq: Target, essay: PenLine } as const;
	const PLURAL: Record<DocKind, string> = { guide: 'Study guides', case: 'Case digests', mcq: 'MCQs', essay: 'ALAC essays' };

	// Everything lives in the URL, so Back from a result returns to the same query and filters.
	const q = $derived(page.url.searchParams.get('q') ?? '');
	const subjectsParam = $derived((page.url.searchParams.get('s') ?? '').split(',').filter((s) => getModule(s)));
	const kindsParam = $derived((page.url.searchParams.get('type') ?? '').split(',').filter((k): k is DocKind => (KINDS as string[]).includes(k)));
	const exact = $derived(page.url.searchParams.get('exact') === '1');
	const partParam = $derived(page.url.searchParams.get('part') ?? '');
	const oneSubject = $derived(subjectsParam.length === 1 ? getModule(subjectsParam[0]) : undefined);

	let input = $state('');
	let ready = $state(false);
	let expanded = $state<Record<string, boolean>>({});

	$effect(() => {
		input = q;
	});

	onMount(() => {
		setTimeout(() => {
			buildIndex();
			ready = true;
		}, 0);
	});

	const opts = $derived({ subjects: subjectsParam.length ? subjectsParam : undefined, kinds: kindsParam.length ? kindsParam : undefined, exact, part: partParam || undefined });
	const hits = $derived(ready && q.trim().length >= 2 ? search(q, opts) : []);
	const counts = $derived(ready && q.trim().length >= 2 ? facets(q, opts) : { bySubject: new Map<string, number>(), byKind: new Map<DocKind, number>() });
	const best = $derived(hits.filter((h) => h.headingMatch && h.doc.kind !== 'mcq').slice(0, 3));
	const rest = $derived(hits.filter((h) => !best.includes(h)));
	const bySubject = $derived.by(() => {
		const out = new Map<string, SearchHit[]>();
		for (const h of rest) out.set(h.doc.subjectId, [...(out.get(h.doc.subjectId) ?? []), h]);
		return [...out.entries()].sort((a, b) => (b[1][0]?.score ?? 0) - (a[1][0]?.score ?? 0));
	});
	const subjectCount = $derived(new Set(hits.map((h) => h.doc.subjectId)).size);
	const suggestion = $derived(ready && q.trim().length >= 3 && !hits.length ? suggest(q) : null);
	const partOptions = $derived(oneSubject ? [...new Map(search(q, { ...opts, part: undefined }).filter((h) => h.doc.kind === 'guide' || h.doc.kind === 'case').map((h) => [h.doc.partId, h.doc.path[0] ?? h.doc.partId])).entries()] : []);

	$effect(() => {
		if (q.trim().length >= 2 && prefs.value.keepRecentSearches) userStorage.addRecentSearch(q);
	});

	function setParams(patch: Record<string, string | null>) {
		const url = new URL(page.url.href);
		for (const [k, v] of Object.entries(patch)) {
			if (v) url.searchParams.set(k, v);
			else url.searchParams.delete(k);
		}
		goto(url, { replace: true, reset: false });
	}

	function submit(e: SubmitEvent) {
		e.preventDefault();
		const url = new URL(page.url.href);
		url.searchParams.set('q', input.trim());
		goto(url);
	}

	function toggleList(key: string, list: string[], value: string) {
		const next = list.includes(value) ? list.filter((x) => x !== value) : [...list, value];
		setParams({ [key]: next.join(',') || null, ...(key === 's' ? { part: null } : {}) });
	}

	function hrefFor(h: SearchHit) {
		if (h.doc.kind !== 'guide' && h.doc.kind !== 'case') return h.doc.href;
		const [path, hash] = h.doc.href.split('#');
		return `${path}?q=${encodeURIComponent(q.trim())}${hash ? `#${hash}` : ''}`;
	}

	const lastOpened = $derived(userStorage.reading.last);
	const isLastOpened = (h: SearchHit) => !!lastOpened && h.doc.subjectId === lastOpened.subjectId && h.doc.partId === lastOpened.partId && h.doc.href.endsWith(`#${lastOpened.anchor}`);
</script>

<svelte:head><title>{q ? `“${q}” — ` : ''}Search — Subpoena Colada</title></svelte:head>

{#snippet result(h: SearchHit, showSubject: boolean)}
	{@const Icon = ICON[h.doc.kind]}
	<a href={hrefFor(h)} class={cn('flex flex-col gap-1.5 border-t px-5 py-4 text-foreground no-underline hover:bg-popover', isLastOpened(h) && 'bg-popover')}>
		<span class="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.8125rem] text-muted-foreground">
			{#if showSubject}
				{@const s = getModule(h.doc.subjectId)}
				<span class="h-3 w-[3px] rounded-full" style="background:var(--{s ? CATEGORY_ACCENT[s.subjectCategory] : 'border'})"></span>{h.doc.subjectTitle}
				{#if h.doc.path.length}<span aria-hidden="true">›</span>{/if}
			{/if}
			{#each h.doc.path as p, i (i)}<span>{p}</span>{#if i < h.doc.path.length - 1}<span aria-hidden="true">›</span>{/if}{/each}
			<span class={cn('ml-1 inline-flex items-center gap-1 rounded-md px-1.5 py-px text-xs font-medium', h.doc.kind === 'case' ? 'bg-red/12 text-red' : h.doc.kind === 'mcq' ? 'bg-blue/12 text-blue' : h.doc.kind === 'essay' ? 'bg-green/12 text-green' : 'bg-muted text-muted-foreground')}>
				<Icon class="size-3" />{KIND_LABEL[h.doc.kind]}
			</span>
			{#if isLastOpened(h)}<span class="ml-auto text-xs font-medium text-green">Last opened</span>{/if}
		</span>
		{#if h.doc.kind !== 'mcq'}<span class="font-heading text-[1.125rem] leading-snug font-semibold">{@html h.titleHtml}</span>{/if}
		<span class="font-serif text-[0.9875rem] leading-relaxed text-muted-foreground">{@html h.excerpt}</span>
	</a>
{/snippet}

<div class="search-results mx-auto flex max-w-[75rem] flex-col gap-6 px-4 pt-8 pb-16 sm:px-8">
	<h1 class="sr-only">Search</h1>
	<form role="search" onsubmit={submit} class="flex h-14 items-center gap-3 rounded-xl border-[1.5px] border-muted-foreground/60 bg-popover px-4 focus-within:border-ring">
		<Search class="size-5 shrink-0 text-muted-foreground" />
		<input bind:value={input} type="search" aria-label="Search all subjects" placeholder="Search rules, doctrines, cases, questions" class="min-w-0 flex-1 bg-transparent text-lg font-medium text-foreground outline-none placeholder:font-normal placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden" />
		{#if input}<button type="button" onclick={() => ((input = ''), setParams({ q: null }))} aria-label="Clear search" class="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-muted"><X class="size-4" /></button>{/if}
		<button type="submit" class="h-10 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground">Search</button>
	</form>

	{#if q.trim().length >= 2}
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
			<span role="status">
				{#if !ready}Searching…{:else}<strong class="text-foreground">{hits.length} result{hits.length === 1 ? '' : 's'}</strong> in {subjectCount} subject{subjectCount === 1 ? '' : 's'}{/if}
			</span>
			<Segmented label="Match" size="sm" value={exact ? 'exact' : 'words'} onchange={(v: 'exact' | 'words') => setParams({ exact: v === 'exact' ? '1' : null })} options={[{ value: 'words', label: 'All words' }, { value: 'exact', label: 'Exact phrase' }]} />
			{#if subjectsParam.length || kindsParam.length || partParam}
				<button type="button" onclick={() => setParams({ s: null, type: null, part: null })} class="text-sm font-medium text-blue hover:underline">Clear filters</button>
			{/if}
		</div>
	{/if}

	<div class="flex flex-wrap items-start gap-8">
		{#if q.trim().length >= 2}
			<aside aria-label="Filters" class="flex min-w-0 flex-[1_1_15rem] flex-col gap-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:max-w-[16rem]">
				<fieldset class="flex flex-col gap-1">
					<legend class="label-caps pb-2 text-[0.7rem]">Subject</legend>
					{#each modules as m (m.id)}
						{@const n = counts.bySubject.get(m.id) ?? 0}
						<label class={cn('flex min-h-9 cursor-pointer items-center gap-2.5 text-sm', !n && !subjectsParam.includes(m.id) && 'text-muted-foreground')}>
							<input type="checkbox" class="size-4 accent-primary" checked={subjectsParam.includes(m.id)} onchange={() => toggleList('s', subjectsParam, m.id)} />
							<span class="h-3.5 w-[3px] rounded-full" style="background:var(--{CATEGORY_ACCENT[m.subjectCategory]})"></span>
							<span class="flex-1">{m.title}</span><span class="text-xs tabular-nums">{n}</span>
						</label>
					{/each}
				</fieldset>
				<div class="flex flex-col gap-2">
					<label for="part-filter" class="label-caps text-[0.7rem]">Rule, part or chapter</label>
					<select
						id="part-filter"
						disabled={!oneSubject}
						value={partParam}
						onchange={(e) => setParams({ part: e.currentTarget.value || null })}
						class="h-10 rounded-lg border border-input bg-popover px-3 text-sm disabled:opacity-60"
					>
						<option value="">Any</option>
						{#each partOptions as [id, title] (id)}<option value={id}>{title}</option>{/each}
					</select>
					{#if !oneSubject}<p class="text-xs leading-relaxed text-muted-foreground">Pick one subject to narrow by its rules, parts or chapters.</p>{/if}
				</div>
				<fieldset class="flex flex-col gap-1">
					<legend class="label-caps pb-2 text-[0.7rem]">Content</legend>
					{#each KINDS as k (k)}
						{@const n = counts.byKind.get(k) ?? 0}
						<label class={cn('flex min-h-9 cursor-pointer items-center gap-2.5 text-sm', !n && !kindsParam.includes(k) && 'text-muted-foreground')}>
							<input type="checkbox" class="size-4 accent-primary" checked={kindsParam.includes(k)} onchange={() => toggleList('type', kindsParam, k)} />
							<span class="flex-1">{PLURAL[k]}</span><span class="text-xs tabular-nums">{n}</span>
						</label>
					{/each}
				</fieldset>
			</aside>
		{/if}

		<div class="flex min-w-0 flex-[999_1_34rem] flex-col gap-6">
			{#if q.trim().length < 2}
				<div class="flex flex-col gap-4 rounded-xl border bg-card p-6">
					<p class="font-heading text-lg font-semibold">Search every subject at once</p>
					<p class="text-sm leading-relaxed text-muted-foreground">Guides, case digests, MCQs and ALAC essays. Results say exactly where each match lives and open at that spot. Tip: press <kbd class="rounded border px-1">/</kbd> or <kbd class="rounded border px-1">Ctrl K</kbd> anywhere.</p>
					{#if userStorage.reading.recentSearches.length && prefs.value.keepRecentSearches}
						<div class="flex flex-wrap gap-2">
							{#each userStorage.reading.recentSearches as r (r.q)}
								<a href="/search?q={encodeURIComponent(r.q)}" class="inline-flex h-8 items-center rounded-md border border-input bg-popover px-3 text-sm text-foreground no-underline hover:bg-muted">{r.q}</a>
							{/each}
						</div>
					{/if}
				</div>
			{:else if !ready}
				<div class="flex flex-col gap-3" aria-busy="true" aria-label="Loading results">
					{#each [0, 1, 2, 3] as i (i)}<div class="h-24 animate-pulse rounded-xl bg-muted"></div>{/each}
				</div>
			{:else if !hits.length}
				<div role="status" class="flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-12 text-center">
					<SearchX class="size-8 text-muted-foreground" />
					<p class="text-lg font-semibold">No results for “{q}”{subjectsParam.length || kindsParam.length || partParam ? ' with these filters' : ''}</p>
					{#if suggestion}<p class="text-muted-foreground">Did you mean <a href="/search?q={encodeURIComponent(suggestion)}" class="font-semibold">{suggestion}</a>?</p>{/if}
					{#if subjectsParam.length || kindsParam.length || partParam}
						<button type="button" onclick={() => setParams({ s: null, type: null, part: null })} class="h-10 rounded-lg border border-input bg-popover px-4 text-sm font-medium hover:bg-muted">Search everything instead</button>
					{:else if exact}
						<button type="button" onclick={() => setParams({ exact: null })} class="h-10 rounded-lg border border-input bg-popover px-4 text-sm font-medium hover:bg-muted">Match the words in any order</button>
					{:else}
						<p class="max-w-md text-sm text-muted-foreground">Try fewer words, the start of a word (“prescri”), an article or section number, or a case name.</p>
					{/if}
				</div>
			{:else}
				{#if best.length}
					<section aria-labelledby="best" class="overflow-hidden rounded-xl border bg-card">
						<h2 id="best" class="label-caps px-5 py-3 text-[0.7rem]">Best matches · headings</h2>
						{#each best as h (h.doc.id)}{@render result(h, true)}{/each}
					</section>
				{/if}
				{#each bySubject as [sid, list] (sid)}
					{@const s = getModule(sid)}
					{@const open = expanded[sid] ?? false}
					<section aria-labelledby="g-{sid}" class="overflow-hidden rounded-xl border bg-card">
						<div class="flex items-center gap-3 px-5 py-3">
							<span class="h-4 w-1 rounded-full" style="background:var(--{s ? CATEGORY_ACCENT[s.subjectCategory] : 'border'})"></span>
							<h2 id="g-{sid}" class="flex-1 text-[0.9375rem] font-semibold">{s?.title} <span class="font-normal text-muted-foreground">· {list.length}</span></h2>
							{#if subjectsParam.length !== 1}
								<button type="button" onclick={() => setParams({ s: sid, part: null })} class="text-[0.8125rem] font-medium text-blue hover:underline">Search only here</button>
							{/if}
						</div>
						{#each open ? list : list.slice(0, 4) as h (h.doc.id)}{@render result(h, false)}{/each}
						{#if list.length > 4}
							<button type="button" onclick={() => (expanded[sid] = !open)} aria-expanded={open} class="flex w-full items-center gap-2 border-t px-5 py-3 text-sm font-medium text-blue hover:bg-popover">
								{open ? 'Show fewer' : `Show all ${list.length} in ${s?.title}`}
								<ChevronDown class={cn('size-4 transition-transform', open && 'rotate-180')} />
							</button>
						{/if}
					</section>
				{/each}
			{/if}
		</div>
	</div>
</div>
