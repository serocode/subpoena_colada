<script lang="ts">
	import { Bookmark, Highlighter, Link2, NotebookPen, Pencil, Plus, Search, Target, Trash2, TriangleAlert } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import Segmented from '$lib/components/common/Segmented.svelte';
	import HighlightEditor from '$lib/components/HighlightEditor.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { CATEGORY_ACCENT, getModule, modules, subjectForItem } from '$lib/data/modules';
	import { partForScope, readHref, type Part } from '$lib/content';
	import { userStorage, type UserNote } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn } from '$lib/utils';
	import type { Subject, UserHighlight } from '$lib/types';

	type Tab = 'highlights' | 'notes' | 'bookmarks';
	const tab = $derived((['notes', 'bookmarks'].includes(page.url.searchParams.get('tab') ?? '') ? page.url.searchParams.get('tab') : 'highlights') as Tab);
	const noteParam = $derived(page.url.searchParams.get('note') ?? '');
	let filter = $state('');
	const f = $derived(filter.trim().toLowerCase());

	function setTab(t: Tab) {
		const url = new URL(page.url.href);
		url.searchParams.set('tab', t);
		url.searchParams.delete('note');
		goto(url, { replace: true, reset: false });
	}

	// ---- highlights: by subject, then part; ones whose text is gone go to their own list ----
	const partText = new Map<string, string>();
	function textOfPart(subject: Subject, part: Part) {
		const k = `${subject.id}/${part.id}`;
		let t = partText.get(k);
		if (t === undefined) {
			// The same text the reader's highlighter sees: parsed like the DOM, whitespace collapsed.
			t =
				part.kind === 'guide'
					? (new DOMParser().parseFromString(part.chunks.map((c) => c.html).join(''), 'text/html').body.textContent ?? '')
					: part.caseGroups.flatMap((g) => g.cases.map((c) => `${c.title} ${c.citation} ${c.keyRule} ${c.summary}`)).join(' ');
			t = t.replace(/[\s\u00a0]+/g, ' ');
			partText.set(k, t);
		}
		return t;
	}

	const highlightGroups = $derived.by(() => {
		const found = new Map<string, { subject: Subject; part: Part; items: UserHighlight[] }>();
		const lost: { subject?: Subject; h: UserHighlight }[] = [];
		for (const h of Object.values(userStorage.highlights)) {
			if (f && !`${h.quote} ${h.note ?? ''} ${userStorage.highlightLabel(h.color)}`.toLowerCase().includes(f)) continue;
			const subject = getModule(h.moduleId);
			const part = subject && partForScope(subject, h.scope);
			if (!subject || !part || !textOfPart(subject, part).includes(h.quote)) {
				lost.push({ subject, h });
				continue;
			}
			const k = `${subject.id}/${part.id}`;
			const g = found.get(k) ?? { subject, part, items: [] };
			g.items.push(h);
			found.set(k, g);
		}
		const order = (s: Subject) => modules.indexOf(s);
		const groups = [...found.values()].sort((a, b) => order(a.subject) - order(b.subject) || a.part.index - b.part.index);
		for (const g of groups) g.items.sort((a, b) => a.start - b.start);
		return { groups, lost };
	});
	const highlightTotal = $derived(Object.keys(userStorage.highlights).length);
	let editing = $state<string | null>(null);

	// ---- notes ----
	const notes = $derived(userStorage.reading.notes.filter((n) => !f || `${n.title} ${n.body} ${n.link?.title ?? ''}`.toLowerCase().includes(f)));
	const openNote = $derived(userStorage.reading.notes.find((n) => n.id === noteParam));
	let confirmDelete = $state<UserNote | null>(null);
	let savedTick = $state(0);

	function newNote() {
		const id = userStorage.addNote();
		goto(`/saved?tab=notes&note=${encodeURIComponent(id)}`, { replace: true, reset: false });
	}
	function edit(id: string, patch: Partial<Pick<UserNote, 'title' | 'body'>>) {
		userStorage.updateNote(id, patch);
		savedTick = Date.now();
	}
	function deleteNote(n: UserNote) {
		userStorage.removeNote(n.id);
		confirmDelete = null;
		if (noteParam === n.id) goto('/saved?tab=notes', { replace: true, reset: false });
		ui.toast('Note deleted');
	}

	// ---- bookmarks: guide places and MCQs ----
	const guideBookmarks = $derived(userStorage.reading.bookmarks.filter((b) => !f || b.title.toLowerCase().includes(f)));
	const mcqBookmarks = $derived(
		userStorage.bookmarks
			.map((id) => {
				const s = subjectForItem(id);
				const q = s?.mcqs.find((x) => x.id === id);
				return s && q ? { id, s, q } : null;
			})
			.filter((x): x is NonNullable<typeof x> => !!x && (!f || x.q.question.toLowerCase().includes(f)))
	);

	const accentOf = (s?: Subject) => (s ? CATEGORY_ACCENT[s.subjectCategory] : 'border');
	const date = (t: number) => new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
</script>

<svelte:head><title>Saved — Subpoena Colada</title></svelte:head>

<div class="mx-auto flex max-w-[75rem] flex-col gap-6 px-4 pt-8 pb-16 sm:px-8">
	<header class="flex flex-col gap-2">
		<h1 class="font-heading text-[2rem] font-semibold">Saved</h1>
		<p class="text-[0.9375rem] text-muted-foreground">Everything you've marked, across subjects. Each item opens where you saved it.</p>
	</header>

	<div class="flex flex-wrap items-center gap-3">
		<Segmented
			label="Saved items"
			value={tab}
			onchange={setTab}
			options={[
				{ value: 'highlights', label: 'Highlights', count: highlightTotal },
				{ value: 'notes', label: 'Notes', count: userStorage.reading.notes.length },
				{ value: 'bookmarks', label: 'Bookmarks', count: userStorage.reading.bookmarks.length + userStorage.bookmarks.length }
			]}
		/>
		<label class="flex h-10 min-w-0 flex-[1_1_16rem] items-center gap-2 rounded-lg border border-input bg-popover px-3 text-muted-foreground focus-within:border-ring sm:max-w-sm">
			<Search class="size-4 shrink-0" />
			<input bind:value={filter} type="search" placeholder="Search your {tab}" aria-label="Search your {tab}" class="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" />
		</label>
		{#if tab === 'notes'}<Button onclick={newNote} class="ml-auto"><Plus /> New note</Button>{/if}
	</div>

	{#if tab === 'highlights'}
		{#if !highlightTotal}
			<EmptyState icon={Highlighter} title="No highlights yet">Select any text in a guide or case digest and pick a color. Highlights and their notes collect here.</EmptyState>
		{:else if !highlightGroups.groups.length && !highlightGroups.lost.length}
			<EmptyState icon={Search} title="No highlights match “{filter}”" />
		{:else}
			<div class="flex flex-col gap-5">
				{#each highlightGroups.groups as g (g.subject.id + g.part.id)}
					<section class="overflow-hidden rounded-xl border bg-card">
						<div class="flex flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3">
							<span class="h-4 w-1 rounded-full" style="background:var(--{accentOf(g.subject)})"></span>
							<h2 class="min-w-0 flex-1 text-[0.9375rem] font-semibold">{g.subject.title} <span class="font-normal text-muted-foreground">· {g.part.label ? `${g.part.label} — ${g.part.name}` : g.part.title}</span></h2>
							<a href={readHref(g.subject.id, g.part.id)} class="text-[0.8125rem] font-medium no-underline hover:underline">Open</a>
						</div>
						<ul>
							{#each g.items as h (h.id)}
								<li class="border-t px-5 py-4">
									<div class="flex items-start gap-3">
										<a href="{readHref(g.subject.id, g.part.id)}?hl={encodeURIComponent(h.id)}" class="flex min-w-0 flex-1 flex-col gap-1.5 text-foreground no-underline">
											<span class="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><span class="size-3 rounded" style="background:color-mix(in oklab, var(--hl-{h.color}) 75%, transparent)"></span>{userStorage.highlightLabel(h.color)}</span>
											<span class="font-serif text-[1.0625rem] leading-relaxed">{h.quote}</span>
											{#if h.note?.trim() && editing !== h.id}<span class="font-serif text-[0.9375rem] whitespace-pre-line text-muted-foreground italic">{h.note}</span>{/if}
										</a>
										<button type="button" onclick={() => (editing = editing === h.id ? null : h.id)} aria-expanded={editing === h.id} aria-label="Edit highlight" class="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted"><Pencil class="size-4" /></button>
									</div>
									{#if editing === h.id}
										<div class="mt-3 rounded-lg border bg-popover p-3">
											<HighlightEditor highlight={h} ondone={() => (editing = null)} onremove={() => (userStorage.removeHighlight(h.id), (editing = null), ui.toast('Highlight removed'))} />
										</div>
									{/if}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
				{#if highlightGroups.lost.length}
					<section class="overflow-hidden rounded-xl border border-dashed">
						<div class="flex items-center gap-2 px-5 py-3"><TriangleAlert class="size-4 text-orange" /><h2 class="text-[0.9375rem] font-semibold">No longer in the guide <span class="font-normal text-muted-foreground">· {highlightGroups.lost.length}</span></h2></div>
						<ul>
							{#each highlightGroups.lost as { subject, h } (h.id)}
								{@const part = subject && partForScope(subject, h.scope)}
								<li class="flex flex-wrap items-start gap-3 border-t px-5 py-4">
									<div class="flex min-w-0 flex-1 flex-col gap-1.5">
										<span class="text-xs text-muted-foreground"><span class="font-semibold">{userStorage.highlightLabel(h.color)}</span> · was in {subject?.title ?? h.moduleId}{part ? ` · ${part.label || part.title}` : ''}</span>
										<span class="font-serif text-base text-muted-foreground">{h.quote}</span>
										{#if h.note?.trim()}<span class="font-serif text-[0.9375rem] whitespace-pre-line text-muted-foreground italic">{h.note}</span>{/if}
									</div>
									<div class="flex gap-1.5">
										{#if subject && part}<Button variant="outline" size="sm" href="{readHref(subject.id, part.id)}?hl={encodeURIComponent(h.id)}">Re-attach in guide</Button>{/if}
										<Button variant="ghost" size="sm" class="text-destructive" onclick={() => (userStorage.removeHighlight(h.id), ui.toast('Highlight removed'))}><Trash2 /> Remove</Button>
									</div>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			</div>
		{/if}
	{:else if tab === 'notes'}
		<div class="flex flex-wrap items-start gap-6">
			<section aria-label="Notes" class="flex min-w-0 flex-[1_1_18rem] flex-col overflow-hidden rounded-xl border bg-card md:max-w-sm">
				{#each notes as n (n.id)}
					<a href="/saved?tab=notes&note={encodeURIComponent(n.id)}" aria-current={n.id === noteParam ? 'page' : undefined} class={cn('flex flex-col gap-1 border-t px-4 py-3 text-foreground no-underline first:border-t-0 hover:bg-popover', n.id === noteParam && 'bg-popover ring-1 ring-input ring-inset')}>
						<span class="truncate text-sm font-semibold">{n.title.trim() || 'Untitled note'}</span>
						{#if n.body.trim()}<span class="line-clamp-2 text-[0.8125rem] text-muted-foreground">{n.body}</span>{/if}
						<span class="text-xs text-muted-foreground">{n.link ? `${getModule(n.link.subjectId)?.title} · ${n.link.title} · ` : ''}edited {date(n.updatedAt)}</span>
					</a>
				{:else}
					<div class="p-6"><EmptyState icon={NotebookPen} title={f ? `No notes match “${filter}”` : 'No notes yet'} class="border-0 p-0">{#if !f}Add one here, or from “Add a note to this part” in the reader, which links it to that place.{/if}</EmptyState></div>
				{/each}
			</section>
			<section aria-label="Note" class="flex min-w-0 flex-[999_1_28rem] flex-col">
				{#if openNote}
					{#key openNote.id}
						<div class="flex flex-col gap-3 rounded-xl border bg-card p-5">
							<label for="note-title" class="sr-only">Title</label>
							<input id="note-title" value={openNote.title} oninput={(e) => edit(openNote.id, { title: e.currentTarget.value })} placeholder="Untitled note" class="bg-transparent font-heading text-2xl font-semibold outline-none placeholder:text-muted-foreground" />
							{#if openNote.link}
								<a href={readHref(openNote.link.subjectId, openNote.link.partId, openNote.link.anchor)} class="inline-flex items-center gap-1.5 self-start text-[0.8125rem] font-medium no-underline hover:underline"><Link2 class="size-3.5" /> {getModule(openNote.link.subjectId)?.title} · {openNote.link.title}</a>
							{/if}
							<label for="note-body" class="sr-only">Note</label>
							<textarea id="note-body" value={openNote.body} oninput={(e) => edit(openNote.id, { body: e.currentTarget.value })} rows="14" placeholder="Write your note…" class="min-h-64 w-full resize-y rounded-lg border border-input bg-popover p-3 font-serif text-[1.0625rem] leading-relaxed outline-none focus:border-ring"></textarea>
							<div class="flex items-center justify-between gap-3 text-xs text-muted-foreground">
								<span role="status">{savedTick ? 'Saved' : 'Saves as you type'} · edited {date(openNote.updatedAt)}</span>
								<Button variant="ghost" size="sm" class="text-destructive" onclick={() => (confirmDelete = openNote ?? null)}><Trash2 /> Delete</Button>
							</div>
						</div>
					{/key}
				{:else if notes.length}
					<p class="rounded-xl border border-dashed px-6 py-10 text-center text-sm text-muted-foreground">Choose a note to read or edit it.</p>
				{/if}
			</section>
		</div>
	{:else}
		{#if !guideBookmarks.length && !mcqBookmarks.length}
			<EmptyState icon={Bookmark} title={f ? `No bookmarks match “${filter}”` : 'No bookmarks yet'}>{#if !f}Bookmark a part or topic from the reader, or a question in MCQ practice.{/if}</EmptyState>
		{:else}
			<div class="flex flex-wrap items-start gap-6">
				{#if guideBookmarks.length}
					<section aria-labelledby="bm-guide" class="flex min-w-0 flex-[1_1_22rem] flex-col overflow-hidden rounded-xl border bg-card">
						<h2 id="bm-guide" class="label-caps px-5 py-3 text-[0.7rem]">In the guides · {guideBookmarks.length}</h2>
						{#each guideBookmarks as b (b.id)}
							{@const s = getModule(b.subjectId)}
							<div class="flex items-start gap-3 border-t px-5 py-3">
								<a href={readHref(b.subjectId, b.partId, b.anchor)} class="flex min-w-0 flex-1 items-start gap-3 text-foreground no-underline">
									<Bookmark class="mt-0.5 size-4 shrink-0 fill-current text-muted-foreground" />
									<span class="flex flex-col gap-0.5"><span class="text-[0.9375rem] font-medium">{b.title}</span><span class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="h-3 w-[3px] rounded-full" style="background:var(--{accentOf(s)})"></span>{s?.title} · {date(b.at)}</span></span>
								</a>
								<button type="button" onclick={() => (userStorage.removeGuideBookmark(b.id), ui.toast('Bookmark removed'))} aria-label="Remove bookmark {b.title}" class="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-destructive"><Trash2 class="size-4" /></button>
							</div>
						{/each}
					</section>
				{/if}
				{#if mcqBookmarks.length}
					<section aria-labelledby="bm-mcq" class="flex min-w-0 flex-[1_1_22rem] flex-col overflow-hidden rounded-xl border bg-card">
						<h2 id="bm-mcq" class="label-caps px-5 py-3 text-[0.7rem]">Questions · {mcqBookmarks.length}</h2>
						{#each mcqBookmarks as { id, s, q } (id)}
							<div class="flex items-start gap-3 border-t px-5 py-3">
								<a href="/module/{s.id}/practice?topic={q.topicId ?? 'all'}&question={encodeURIComponent(id)}" class="flex min-w-0 flex-1 items-start gap-3 text-foreground no-underline">
									<Target class="mt-0.5 size-4 shrink-0 text-muted-foreground" />
									<span class="flex flex-col gap-0.5"><span class="line-clamp-2 font-serif text-[0.9375rem]">{q.question}</span><span class="text-xs text-muted-foreground">{s.title} · {q.topic}</span></span>
								</a>
								<button type="button" onclick={() => (userStorage.toggleBookmark(id), ui.toast('Bookmark removed'))} aria-label="Remove bookmark" class="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-destructive"><Trash2 class="size-4" /></button>
							</div>
						{/each}
					</section>
				{/if}
			</div>
		{/if}
	{/if}
</div>

<Dialog.Root open={!!confirmDelete} onOpenChange={(o) => !o && (confirmDelete = null)}>
	<Dialog.Content class="sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Delete this note?</Dialog.Title>
			<Dialog.Description>“{confirmDelete?.title.trim() || 'Untitled note'}” will be removed from this browser. This can't be undone.</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (confirmDelete = null)}>Keep it</Button>
			<Button variant="destructive" onclick={() => confirmDelete && deleteNote(confirmDelete)}>Delete note</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
