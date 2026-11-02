<script lang="ts">
	import {
		ArrowLeft,
		ArrowRight,
		Bookmark,
		BookmarkCheck,
		Check,
		ChevronDown,
		ChevronRight,
		ChevronUp,
		Highlighter,
		ListTree,
		NotebookPen,
		Search,
		TriangleAlert,
		X
	} from '@lucide/svelte';
	import { Popover, Dialog as DialogPrimitive } from 'bits-ui';
	import { tick, untrack } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import ReadingSettings from '$lib/components/common/ReadingSettings.svelte';
	import StudyBar from '$lib/components/common/StudyBar.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
	import HighlightMenu from '$lib/components/HighlightMenu.svelte';
	import HighlightsPanel from '$lib/components/HighlightsPanel.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { getModule } from '$lib/data/modules';
	import { caseAnchor, getPart, getParts, introFor, legendFor, partForScope, readHref, subjectScopes, unitKey, type Part } from '$lib/content';
	import { GuideHighlighter, paintKey } from '$lib/highlights.svelte';
	import { markRegex } from '$lib/search';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn } from '$lib/utils';
	import type { CaseDigest } from '$lib/types';

	const subject = $derived(getModule(page.params.slug ?? '')!);
	const partId = $derived(decodeURIComponent(page.params.part ?? ''));
	const part = $derived(getPart(subject, partId));
	const parts = $derived(getParts(subject));
	const prev = $derived(part ? parts[part.index - 1] : undefined);
	const next = $derived(part ? parts[part.index + 1] : undefined);
	const query = $derived(page.url.searchParams.get('q') ?? '');
	const legend = $derived(legendFor(subject, part));
	const firstOfSource = $derived(!!part && parts.find((p) => p.sourceId === part.sourceId) === part);
	const intro = $derived(firstOfSource ? introFor(subject, part) : undefined);
	const key = (unit: string) => unitKey(subject.id, part?.id ?? partId, unit);

	// A renamed part (old link or bookmark): move to its current URL.
	$effect(() => {
		if (part && part.id !== partId) goto(`${readHref(subject.id, part.id)}${page.url.search}${page.url.hash}`, { replace: true });
	});

	// ---- collapsing topics (preference decides the starting state; targets of a link always open) ----
	let collapsed = $state<Record<string, boolean>>({});
	function resetCollapsed(p: Part) {
		const mode = prefs.value.sectionsOpen;
		collapsed = Object.fromEntries(p.topics.map((t, i) => [t.id, mode === 'none' || (mode === 'first' && i > 0)]));
	}
	const allOpen = $derived(!Object.values(collapsed).some(Boolean));

	let guideEl: HTMLElement | undefined = $state();
	let articleEl: HTMLElement | undefined = $state();

	/** Opens whatever hides an element: its collapsed topic and any closed <details>. */
	function reveal(el: Element) {
		const topic = el.closest<HTMLElement>('.sg-topic[data-topic]')?.dataset.topic;
		if (topic && collapsed[topic]) collapsed[topic] = false;
		for (let d = el.closest('details'); d; d = d.parentElement?.closest('details') ?? null) d.open = true;
	}

	// ---- search matches in this part (?q=) ----
	let hits = $state<HTMLElement[]>([]);
	let activeHit = $state(0);

	function clearMarks(root: HTMLElement) {
		root.querySelectorAll('mark.sg-hit').forEach((m) => m.replaceWith(document.createTextNode(m.textContent ?? '')));
		root.normalize();
	}

	function applyMarks(root: HTMLElement, q: string) {
		const re = markRegex(q);
		if (!re) return;
		for (const area of root.querySelectorAll<HTMLElement>('.sg-html')) {
			const walker = document.createTreeWalker(area, NodeFilter.SHOW_TEXT);
			const nodes: Text[] = [];
			for (let n = walker.nextNode(); n; n = walker.nextNode()) {
				re.lastIndex = 0;
				if (n.nodeValue && re.test(n.nodeValue)) nodes.push(n as Text);
			}
			for (const node of nodes) {
				const frag = document.createDocumentFragment();
				node.nodeValue!.split(re).forEach((piece, i) => {
					if (!piece) return;
					if (i % 2) {
						const m = document.createElement('mark');
						m.className = 'sg-hit';
						m.textContent = piece;
						frag.append(m);
					} else frag.append(piece);
				});
				node.replaceWith(frag);
			}
		}
	}

	function paintActive(scroll: boolean) {
		hits.forEach((h, i) => h.setAttribute('data-active', String(i === activeHit)));
		const h = hits[activeHit];
		if (h && scroll) {
			reveal(h);
			tick().then(() => h.scrollIntoView({ block: 'center', behavior: 'smooth' }));
		}
	}

	function stepHit(d: number) {
		if (!hits.length) return;
		activeHit = (activeHit + d + hits.length) % hits.length;
		paintActive(true);
	}

	function clearQuery() {
		const url = new URL(page.url.href);
		url.searchParams.delete('q');
		goto(url, { replace: true, reset: false });
	}

	// ---- highlights ----
	const scopes = $derived(subjectScopes(subject));
	const scopeIds = $derived(new Set(scopes.map((s) => s.id)));
	const subjectHighlights = $derived(userStorage.highlightsFor(subject.id));
	const highlighter = new GuideHighlighter(
		() => subjectHighlights,
		() => scopeIds
	);
	const highlightsKey = $derived(paintKey(subjectHighlights));
	let highlightMenu: ReturnType<typeof HighlightMenu> | undefined = $state();
	$effect(() => {
		const el = guideEl;
		if (el) return highlighter.attach(el);
	});
	$effect(() => {
		void highlightsKey;
		highlighter.schedule();
	});

	async function jumpToHighlight(id: string, flash = true) {
		const h = userStorage.highlights[id];
		if (!h) return;
		const target = partForScope(subject, h.scope);
		if (target && target.id !== part?.id) {
			goto(`${readHref(subject.id, target.id)}?hl=${encodeURIComponent(id)}`);
			return;
		}
		railView = 'contents';
		sheetOpen = false;
		const scopeEl = guideEl?.querySelector(`[data-hl-scope="${CSS.escape(h.scope)}"]`);
		if (scopeEl) reveal(scopeEl);
		await tick();
		let range = highlighter.locate(h);
		if (!range) return;
		reveal(range.startContainer.parentElement ?? scopeEl ?? document.body);
		await tick();
		range = highlighter.locate(h);
		if (!range) return;
		const r = range.getBoundingClientRect();
		scrollTo({ top: scrollY + r.top - innerHeight * 0.4, behavior: 'smooth' });
		if (flash) highlighter.flash(range);
	}

	async function adjustHighlight(id: string) {
		if (!highlighter.missing.has(id)) await jumpToHighlight(id, false);
		highlightMenu?.adjust(id);
	}

	// ---- scroll spy, visited, reading position ----
	let activeTopic = $state('');
	const activeTopicTitle = $derived(part?.topics.find((t) => t.id === activeTopic)?.title ?? '');

	$effect(() => {
		void part?.id;
		const el = guideEl;
		if (!el || !part) return;
		let raf = 0;
		const update = () => {
			raf = 0;
			let current = '';
			for (const s of el.querySelectorAll<HTMLElement>('[data-topic]')) {
				if (s.getBoundingClientRect().top <= 180) current = s.dataset.topic ?? '';
				else break;
			}
			if (!current && part.topics.length && scrollY < 40) current = '';
			activeTopic = current;
		};
		const onScroll = () => (raf ||= requestAnimationFrame(update));
		update();
		addEventListener('scroll', onScroll, { passive: true });
		return () => {
			removeEventListener('scroll', onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	});

	$effect(() => {
		if (!part) return;
		const unit = activeTopic || (part.topics.length ? '' : part.id);
		if (unit) untrack(() => userStorage.markVisited(key(unit)));
		const title = [part.label || part.title, activeTopicTitle].filter(Boolean).join(' · ');
		const t = setTimeout(() => {
			if (prefs.value.rememberPosition) userStorage.setLocation({ subjectId: subject.id, partId: part.id, anchor: activeTopic || undefined, title });
		}, 700);
		return () => clearTimeout(t);
	});

	// ---- arriving on a part: reset state, then go to the hash, the first match, or a highlight ----
	$effect(() => {
		const p = part;
		const q = query;
		if (!p) return;
		untrack(() => {
			resetCollapsed(p);
			hits = [];
			activeHit = 0;
		});
		tick().then(async () => {
			const root = guideEl;
			if (!root) return;
			clearMarks(root);
			const hash = decodeURIComponent(location.hash.slice(1));
			const target = hash ? document.getElementById(hash) : null;
			if (target) reveal(target);
			if (q.trim().length >= 2) {
				applyMarks(root, q);
				const found = [...root.querySelectorAll<HTMLElement>('mark.sg-hit, mark')].filter((m) => root.contains(m) && (m.classList.contains('sg-hit') || m.closest('.hit-text')));
				hits = found;
				// Start at the first match at or after the anchor the result pointed to.
				const start = target ? found.findIndex((m) => target === m || target.contains(m) || !!(target.compareDocumentPosition(m) & Node.DOCUMENT_POSITION_FOLLOWING)) : 0;
				activeHit = Math.max(0, start);
				paintActive(true);
				return;
			}
			const hl = page.url.searchParams.get('hl');
			if (hl) {
				await jumpToHighlight(hl);
				return;
			}
			await tick();
			if (target) target.scrollIntoView({ block: 'start' });
			else scrollTo({ top: 0 });
		});
	});

	// Same-part links (a topic in the navigator, "On this page") only change the hash: open what hides the target.
	$effect(() => {
		const h = page.url.hash;
		untrack(() => {
			if (!h || query) return;
			const el = document.getElementById(decodeURIComponent(h.slice(1)));
			if (!el) return;
			reveal(el);
			tick().then(() => el.scrollIntoView({ block: 'start' }));
		});
	});

	// ---- studied, bookmarks, notes ----
	const partKeys = $derived(part ? part.units.map((u) => key(u)) : []);
	const progress = $derived(userStorage.readingProgress(partKeys));
	const partStudied = $derived(progress.total > 0 && progress.studied === progress.total);

	function toggleUnit(unit: string) {
		userStorage.setStudied([key(unit)], !userStorage.isStudied(key(unit)));
	}

	function bookmarkTitle(topicTitle?: string) {
		return [part?.label || part?.title, topicTitle].filter(Boolean).join(' · ');
	}

	function toggleBookmark(anchor?: string, topicTitle?: string) {
		if (!part) return;
		const added = userStorage.toggleGuideBookmark({ subjectId: subject.id, partId: part.id, anchor, title: bookmarkTitle(topicTitle) });
		ui.toast(added ? 'Bookmarked' : 'Bookmark removed', { action: { label: 'View', run: () => goto('/saved?tab=bookmarks') } });
	}

	function addNote() {
		if (!part) return;
		const id = userStorage.addNote({ link: { subjectId: subject.id, partId: part.id, anchor: activeTopic || undefined, title: bookmarkTitle(activeTopicTitle) } });
		goto(`/saved?tab=notes&note=${encodeURIComponent(id)}`);
	}

	let railView = $state<'contents' | 'highlights'>('contents');
	let sheetOpen = $state(false);
	let settingsOpen = $state(false);
	const rest = (c: CaseDigest) => (c.summary.startsWith(c.keyRule) ? c.summary.slice(c.keyRule.length).trim() : c.summary);
	const backToResults = $derived(`/search?q=${encodeURIComponent(query)}`);
	const breadcrumbs = $derived([
		{ label: subject.title, href: `/module/${subject.id}` },
		...(part ? [{ label: part.label ? `${part.label} — ${part.name}` : part.title, href: readHref(subject.id, part.id) }] : []),
		...(activeTopicTitle ? [{ label: activeTopicTitle }] : [])
	]);
</script>

<svelte:head>
	<title>{part ? `${part.label || part.title} — ${subject.title}` : subject.title} — Subpoena Colada</title>
</svelte:head>

<svelte:window onbeforeprint={() => (collapsed = {})} />

{#snippet onThisPage()}
	{#if part}
		<div class="flex flex-col gap-2">
			<p class="label-caps text-[0.7rem]">On this page</p>
			{#if part.topics.length}
				<ol class="flex flex-col gap-px text-[0.8125rem]">
					{#each part.topics as t (t.id)}
						{@const k = key(t.id)}
						<li class="flex items-center gap-1">
							<button
								type="button"
								onclick={() => toggleUnit(t.id)}
								aria-pressed={!!userStorage.reading.studied[k]}
								aria-label="{userStorage.reading.studied[k] ? 'Unmark' : 'Mark'} “{t.title}” as studied"
								title={userStorage.reading.studied[k] ? 'Studied' : 'Mark as studied'}
								class="grid size-7 shrink-0 place-items-center rounded-md hover:bg-muted"
							>
								<span class={cn('grid size-3.5 place-items-center rounded-full border-[1.5px] border-input', userStorage.reading.studied[k] && 'border-green bg-green text-background', !userStorage.reading.studied[k] && userStorage.reading.visited[k] && 'border-green')}>
									{#if userStorage.reading.studied[k]}<Check class="size-2.5" strokeWidth={3.5} />{/if}
								</span>
							</button>
							<a
								href="#{t.id}"
								onclick={(e) => {
									e.preventDefault();
									const el = document.getElementById(t.id);
									if (el) {
										reveal(el);
										tick().then(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
										history.replaceState(history.state, '', `#${t.id}`);
									}
									sheetOpen = false;
								}}
								aria-current={activeTopic === t.id ? 'location' : undefined}
								class={cn('min-w-0 flex-1 truncate rounded-md px-2 py-1.5 no-underline', activeTopic === t.id ? 'bg-muted font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground')}
								title={t.title}>{t.title}</a
							>
						</li>
					{/each}
				</ol>
			{:else}
				<p class="text-sm text-muted-foreground">This part is a single section.</p>
			{/if}
		</div>
		<div class="flex flex-col gap-2.5 rounded-xl border bg-card p-4">
			<p class="label-caps text-[0.7rem]">{part.label || 'This part'} progress</p>
			<StudyBar studied={progress.studied} visited={progress.visited} total={progress.total} label="{part.title} progress" />
			<p class="text-[0.8125rem] text-muted-foreground">
				{progress.studied} of {progress.total} {progress.total === 1 ? 'section' : 'topics'} studied{progress.visited ? ` · ${progress.visited} visited` : ''}
			</p>
		</div>
		<button type="button" onclick={addNote} class="inline-flex items-center gap-2 self-start text-[0.8125rem] text-muted-foreground hover:text-foreground">
			<NotebookPen class="size-4" /> Add a note to this part
		</button>
	{/if}
{/snippet}

{#if !part}
	<div class="mx-auto max-w-md space-y-4 px-4 py-20 text-center">
		<h1 class="font-heading text-2xl font-semibold">Part not found</h1>
		<p class="text-muted-foreground">{subject.title} has no part called “{partId}”.</p>
		<a href="/module/{subject.id}" class="font-medium">Back to {subject.title}</a>
	</div>
{:else}
	<div class="flex justify-center gap-12 px-4 pt-6 pb-24 sm:px-8 lg:pt-8">
		<article bind:this={articleEl} class="reader w-full min-w-0 max-w-(--measure)">
			{#if query}
				<div role="status" class="no-print sticky top-[calc(var(--header-h)+0.5rem)] z-20 mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-input bg-popover py-1.5 pr-1.5 pl-3.5 text-sm shadow-sm max-lg:top-[calc(var(--header-h)+3.5rem)]">
					<Search class="size-4 shrink-0 text-ring" />
					<span class="min-w-0 flex-1 truncate">
						<strong>“{query}”</strong>
						<span class="text-muted-foreground">· {hits.length ? `match ${activeHit + 1} of ${hits.length} in this part` : 'no matches in this part'}</span>
					</span>
					<span class="flex">
						<button type="button" onclick={() => stepHit(-1)} disabled={!hits.length} aria-label="Previous match" class="grid size-9 place-items-center rounded-md hover:bg-muted disabled:opacity-40"><ChevronUp class="size-4" /></button>
						<button type="button" onclick={() => stepHit(1)} disabled={!hits.length} aria-label="Next match" class="grid size-9 place-items-center rounded-md hover:bg-muted disabled:opacity-40"><ChevronDown class="size-4" /></button>
					</span>
					<a href={backToResults} class="font-medium no-underline hover:underline">All results</a>
					<button type="button" onclick={clearQuery} aria-label="Clear search highlighting" class="grid size-9 place-items-center rounded-md text-muted-foreground hover:bg-muted"><X class="size-4" /></button>
				</div>
			{/if}

			<header class="mb-6 flex flex-col gap-3">
				<Breadcrumbs items={breadcrumbs} />
				<div class="flex flex-col gap-2">
					<p class="label-caps">{part.group ? `${part.group} · ` : ''}Part {part.index + 1} of {parts.length}</p>
					<h1 class="font-heading text-[1.875rem] leading-tight font-semibold text-balance sm:text-[2.125rem]">
						{#if part.label}<span class="text-muted-foreground">{part.label} — </span>{/if}{part.name}
					</h1>
				</div>
				<div class="no-print flex flex-wrap items-center gap-2">
					{#if part.units.length > 1 || part.kind === 'guide'}
						<button
							type="button"
							onclick={() => userStorage.setStudied(partKeys, !partStudied)}
							aria-pressed={partStudied}
							class={cn('inline-flex h-10 items-center gap-2 rounded-lg border px-3 text-sm font-medium', partStudied ? 'border-green/50 bg-green/10 text-green' : 'border-input bg-popover hover:bg-muted')}
						>
							<Check class="size-4" />
							{partStudied ? 'Studied' : part.units.length > 1 ? 'Mark all studied' : 'Mark as studied'}
						</button>
					{/if}
					<button
						type="button"
						onclick={() => toggleBookmark()}
						aria-pressed={!!userStorage.guideBookmark(subject.id, part.id)}
						class="inline-flex h-10 items-center gap-2 rounded-lg border border-input bg-popover px-3 text-sm font-medium hover:bg-muted"
					>
						{#if userStorage.guideBookmark(subject.id, part.id)}<BookmarkCheck class="size-4 text-yellow" /> Bookmarked{:else}<Bookmark class="size-4" /> Bookmark{/if}
					</button>
					<button type="button" onclick={() => ui.openSearch('', 'part')} class="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
						<Search class="size-4" /> Search {part.label || 'this part'}
					</button>
					<Popover.Root bind:open={settingsOpen}>
						<Popover.Trigger class="inline-flex h-10 items-center rounded-lg px-3 font-serif text-[0.9375rem] font-semibold text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Reading settings">Aa</Popover.Trigger>
						<Popover.Portal>
							<Popover.Content sideOffset={6} align="start" class="z-50 w-80 rounded-xl border bg-popover p-4 shadow-lg outline-none">
								<ReadingSettings compact />
							</Popover.Content>
						</Popover.Portal>
					</Popover.Root>
					<button type="button" onclick={() => (sheetOpen = true)} class="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground xl:hidden">
						<ListTree class="size-4" /> On this page
					</button>
					{#if part.topics.length > 1}
						<button type="button" onclick={() => (collapsed = Object.fromEntries(part.topics.map((t) => [t.id, allOpen])))} class="inline-flex h-10 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
							{allOpen ? 'Collapse all' : 'Expand all'}
						</button>
					{/if}
				</div>
			</header>

			{#if intro || legend.length}
				<div class="mb-8 flex flex-col gap-3">
					{#if intro}<p class="text-[0.9375rem] leading-relaxed text-muted-foreground">{intro}</p>{/if}
					{#if legend.length}
						<ul class="flex flex-wrap gap-x-4 gap-y-1.5 rounded-lg border bg-card px-3.5 py-2.5 text-xs" aria-label="Color legend">
							{#each legend as item (item.label)}
								<li class="flex items-center gap-1.5"><span class="size-2.5 rounded-full" style="background:var(--{item.color})" aria-hidden="true"></span>{item.label}</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/if}

			<div bind:this={guideEl} class="study-guide prose prose-slate max-w-none dark:prose-invert">
				{#if part.kind === 'guide'}
					<div data-hl-scope="guide:{part.id}" class={part.wrapClass || undefined}>
						{#each part.chunks as chunk, i (chunk.topic?.id ?? `lead-${i}`)}
							{#if chunk.topic}
								{@const t = chunk.topic}
								{@const k = key(t.id)}
								<section class="sg-topic" data-topic={t.id} data-collapsed={collapsed[t.id] ? 'true' : 'false'}>
									<div class={cn('sg-topic-tools no-print not-prose absolute right-0 flex gap-0.5', i === 0 ? 'top-1' : 'top-7')}>
										<button type="button" onclick={() => toggleUnit(t.id)} aria-pressed={!!userStorage.reading.studied[k]} aria-label="{userStorage.reading.studied[k] ? 'Unmark' : 'Mark'} “{t.title}” as studied" title={userStorage.reading.studied[k] ? 'Studied' : 'Mark as studied'} class={cn('grid size-9 place-items-center rounded-lg hover:bg-muted', userStorage.reading.studied[k] ? 'text-green' : 'text-muted-foreground')}>
											<Check class="size-[1.1rem]" />
										</button>
										<button type="button" onclick={() => toggleBookmark(t.id, t.title)} aria-pressed={!!userStorage.guideBookmark(subject.id, part.id, t.id)} aria-label="Bookmark “{t.title}”" title="Bookmark" class="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-muted">
											{#if userStorage.guideBookmark(subject.id, part.id, t.id)}<BookmarkCheck class="size-[1.1rem] text-yellow" />{:else}<Bookmark class="size-[1.1rem]" />{/if}
										</button>
										<button type="button" onclick={() => (collapsed[t.id] = !collapsed[t.id])} aria-expanded={!collapsed[t.id]} aria-label="{collapsed[t.id] ? 'Expand' : 'Collapse'} “{t.title}”" class="grid size-9 place-items-center rounded-lg text-muted-foreground hover:bg-muted">
											{#if collapsed[t.id]}<ChevronRight class="size-[1.1rem]" />{:else}<ChevronDown class="size-[1.1rem]" />{/if}
										</button>
									</div>
									<div class="sg-topic-body sg-html">{@html chunk.html}</div>
								</section>
							{:else}
								<div class="sg-lead sg-html">{@html chunk.html}</div>
							{/if}
						{/each}
					</div>
				{:else}
					{#each part.caseGroups as g (g.id)}
						{@const k = key(g.id)}
						<section class="sg-topic not-prose" data-topic={g.id}>
							<div class="mb-3 flex items-start justify-between gap-3">
								<h2 id={g.id} class="font-heading text-xl font-semibold">{g.title}</h2>
								<button type="button" onclick={() => toggleUnit(g.id)} aria-pressed={!!userStorage.reading.studied[k]} aria-label="{userStorage.reading.studied[k] ? 'Unmark' : 'Mark'} “{g.title}” as studied" title={userStorage.reading.studied[k] ? 'Studied' : 'Mark as studied'} class={cn('no-print grid size-9 shrink-0 place-items-center rounded-lg hover:bg-muted', userStorage.reading.studied[k] ? 'text-green' : 'text-muted-foreground')}>
									<Check class="size-[1.1rem]" />
								</button>
							</div>
							<ul class="flex flex-col gap-3">
								{#each g.cases as c (c.id)}
									<li id={caseAnchor(c.id)} data-hl-scope="case:{c.id}" class={cn('scroll-mt-28 rounded-xl border bg-card p-4', c.unverified && 'border-orange/50')}>
										<div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
											<h3 class="font-sans text-base font-semibold"><Highlight text={c.title} {query} /></h3>
											<div class="flex items-center gap-1.5">
												{#if c.unverified}<Badge variant="outline" class="gap-1 border-orange/50 text-orange"><TriangleAlert /> Unverified</Badge>{/if}
												<Badge variant="secondary" class="font-mono text-[0.7rem]"><Highlight text={c.citation} {query} /></Badge>
											</div>
										</div>
										<p class="mt-2 font-serif text-[1.0625rem] leading-relaxed font-medium"><Highlight text={c.keyRule} {query} /></p>
										{#if rest(c)}<p class="mt-2 font-serif text-[0.9375rem] leading-relaxed text-muted-foreground"><Highlight text={rest(c)} {query} /></p>{/if}
									</li>
								{/each}
							</ul>
						</section>
					{/each}
				{/if}
			</div>

			<nav aria-label="Previous and next part" class="no-print mt-12 grid gap-3 sm:grid-cols-2">
				{#if prev}
					<a href={readHref(subject.id, prev.id)} class="flex flex-col gap-1 rounded-xl border border-input p-4 text-foreground no-underline hover:bg-card">
						<span class="flex items-center gap-1.5 text-[0.8125rem] text-muted-foreground"><ArrowLeft class="size-3.5" /> Previous</span>
						<span class="font-heading text-[1.0625rem] font-semibold">{prev.label ? `${prev.label} — ${prev.name}` : prev.title}</span>
					</a>
				{:else}<span></span>{/if}
				{#if next}
					<a href={readHref(subject.id, next.id)} class="flex flex-col gap-1 rounded-xl border border-input p-4 text-right text-foreground no-underline hover:bg-card">
						<span class="flex items-center justify-end gap-1.5 text-[0.8125rem] text-muted-foreground">Next <ArrowRight class="size-3.5" /></span>
						<span class="font-heading text-[1.0625rem] font-semibold">{next.label ? `${next.label} — ${next.name}` : next.title}</span>
					</a>
				{/if}
			</nav>
		</article>

		<aside aria-label="On this page" class="no-print sticky top-[calc(var(--header-h)+1.5rem)] flex max-h-[calc(100dvh-var(--header-h)-3rem)] w-(--rail-w) shrink-0 flex-col gap-5 self-start overflow-y-auto pb-4 max-xl:hidden">
			<div role="group" aria-label="Side panel" class="flex gap-1 rounded-[0.625rem] bg-muted p-[3px] text-[0.8125rem]">
				<button type="button" aria-pressed={railView === 'contents'} onclick={() => (railView = 'contents')} class={cn('h-8 flex-1 rounded-[0.45rem] font-medium', railView === 'contents' ? 'bg-popover font-semibold shadow-sm' : 'text-muted-foreground')}>Contents</button>
				<button type="button" aria-pressed={railView === 'highlights'} onclick={() => (railView = 'highlights')} class={cn('inline-flex h-8 flex-1 items-center justify-center gap-1 rounded-[0.45rem] font-medium', railView === 'highlights' ? 'bg-popover font-semibold shadow-sm' : 'text-muted-foreground')}>
					<Highlighter class="size-3.5" /> {subjectHighlights.length}
				</button>
			</div>
			{#if railView === 'contents'}
				{@render onThisPage()}
			{:else}
				<HighlightsPanel moduleId={subject.id} {scopes} missing={highlighter.missing} onjump={jumpToHighlight} onadjust={adjustHighlight} />
			{/if}
		</aside>
	</div>

	<!-- Below 1280px the side panel opens as a sheet. -->
	<DialogPrimitive.Root bind:open={sheetOpen}>
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/40" />
			<DialogPrimitive.Content class="fixed inset-x-0 bottom-0 z-50 flex max-h-[80dvh] flex-col gap-4 overflow-y-auto rounded-t-2xl border-t bg-background p-4 pb-8 shadow-2xl outline-none sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-96 sm:rounded-2xl sm:border">
				<div class="flex items-center justify-between">
					<DialogPrimitive.Title class="text-sm font-semibold">{railView === 'contents' ? 'On this page' : 'Highlights'}</DialogPrimitive.Title>
					<DialogPrimitive.Close class="grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted" aria-label="Close"><X class="size-5" /></DialogPrimitive.Close>
				</div>
				<div role="group" aria-label="Panel" class="flex gap-1 rounded-[0.625rem] bg-muted p-[3px] text-sm">
					<button type="button" aria-pressed={railView === 'contents'} onclick={() => (railView = 'contents')} class={cn('h-9 flex-1 rounded-[0.45rem] font-medium', railView === 'contents' ? 'bg-popover font-semibold shadow-sm' : 'text-muted-foreground')}>Contents</button>
					<button type="button" aria-pressed={railView === 'highlights'} onclick={() => (railView = 'highlights')} class={cn('h-9 flex-1 rounded-[0.45rem] font-medium', railView === 'highlights' ? 'bg-popover font-semibold shadow-sm' : 'text-muted-foreground')}>Highlights {subjectHighlights.length}</button>
				</div>
				{#if railView === 'contents'}
					{@render onThisPage()}
				{:else}
					<HighlightsPanel moduleId={subject.id} {scopes} missing={highlighter.missing} onjump={jumpToHighlight} onadjust={adjustHighlight} />
				{/if}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	</DialogPrimitive.Root>

	<HighlightMenu bind:this={highlightMenu} container={guideEl} {highlighter} moduleId={subject.id} />
{/if}
