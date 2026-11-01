<script lang="ts">
	import { Download, TriangleAlert, Upload } from '@lucide/svelte';
	import Segmented from '$lib/components/common/Segmented.svelte';
	import TextSizeControl from '$lib/components/TextSizeControl.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Switch } from '$lib/components/ui/switch';
	import * as Dialog from '$lib/components/ui/dialog';
	import { totals } from '$lib/data/modules';
	import { COLOR_NAMES, HIGHLIGHT_COLORS } from '$lib/highlights.svelte';
	import { prefs, type LineSpacing, type LineWidth, type SectionsOpen } from '$lib/stores/prefs.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { theme, type ThemeMode } from '$lib/stores/theme.svelte';
	import { ui } from '$lib/stores/ui.svelte';

	const stats = $derived(userStorage.stats());

	function exportProgress() {
		try {
			const blob = new Blob([userStorage.exportJson()], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `subpoena-colada-backup-${new Date().toISOString().slice(0, 10)}.json`;
			a.click();
			URL.revokeObjectURL(url);
			ui.toast('Backup downloaded');
		} catch {
			ui.toast('Could not create the backup file.', { tone: 'error' });
		}
	}

	let fileInput: HTMLInputElement | undefined = $state();
	let pending = $state<{ name: string; text: string; info: ReturnType<typeof userStorage.inspectImport> } | null>(null);
	let importError = $state('');

	async function onPick(e: Event) {
		const input = e.currentTarget as HTMLInputElement;
		const file = input.files?.[0];
		input.value = '';
		importError = '';
		if (!file) return;
		try {
			const text = await file.text();
			pending = { name: file.name, text, info: userStorage.inspectImport(text) };
		} catch (err) {
			importError = err instanceof Error ? err.message : 'Could not read that file.';
		}
	}

	function applyImport() {
		if (!pending) return;
		try {
			userStorage.importJson(pending.text);
			ui.toast('Backup restored');
		} catch (err) {
			importError = err instanceof Error ? err.message : 'Could not restore that backup.';
		}
		pending = null;
	}

	let confirmReset = $state(false);
	function doReset() {
		userStorage.resetAllProgress();
		confirmReset = false;
		ui.toast('All progress in this browser was reset');
	}

	const row = 'flex flex-wrap items-center gap-x-6 gap-y-3 border-t px-5 py-4 first-of-type:border-t-0';
	const what = 'flex min-w-0 flex-[1_1_16rem] flex-col gap-0.5';
	const nav = [
		{ id: 'appearance', label: 'Appearance' },
		{ id: 'reading', label: 'Reading' },
		{ id: 'labels', label: 'Highlight labels' },
		{ id: 'search', label: 'Search' },
		{ id: 'data', label: 'Your data' }
	];
</script>

<svelte:head><title>Settings — Subpoena Colada</title></svelte:head>

<div class="mx-auto flex max-w-[62.5rem] flex-wrap items-start gap-8 px-4 pt-8 pb-16 sm:px-8">
	<nav aria-label="Settings sections" class="sticky top-[calc(var(--header-h)+1.5rem)] flex w-48 shrink-0 flex-col gap-0.5 pt-16 max-md:hidden">
		{#each nav as n (n.id)}
			<a href="#{n.id}" class="flex h-9 items-center rounded-lg px-3 text-sm text-muted-foreground no-underline hover:bg-muted hover:text-foreground">{n.label}</a>
		{/each}
	</nav>

	<div class="flex min-w-0 flex-[999_1_32rem] flex-col gap-5">
		<h1 class="font-heading pb-1 text-[2rem] font-semibold">Settings</h1>

		<section id="appearance" aria-labelledby="h-appearance" class="scroll-mt-20 overflow-hidden rounded-xl border bg-card">
			<h2 id="h-appearance" class="border-b px-5 py-4 text-[1.0625rem] font-semibold">Appearance</h2>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Theme</span><span class="text-[0.8125rem] text-muted-foreground">System follows your device's setting.</span></div>
				<Segmented label="Theme" value={theme.mode} onchange={(v: ThemeMode) => theme.set(v)} options={[{ value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }, { value: 'system', label: 'System' }]} />
			</div>
		</section>

		<section id="reading" aria-labelledby="h-reading" class="scroll-mt-20 overflow-hidden rounded-xl border bg-card">
			<h2 id="h-reading" class="border-b px-5 py-4 text-[1.0625rem] font-semibold">Reading</h2>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Text size</span><span class="text-[0.8125rem] text-muted-foreground">Scales every page; the layout adapts.</span></div>
				<TextSizeControl />
			</div>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Line width</span><span class="text-[0.8125rem] text-muted-foreground">How wide a column of guide text gets on large screens.</span></div>
				<Segmented label="Line width" value={prefs.value.lineWidth} onchange={(v: LineWidth) => prefs.set('lineWidth', v)} options={[{ value: 'narrow', label: 'Narrow' }, { value: 'normal', label: 'Normal' }, { value: 'wide', label: 'Wide' }]} />
			</div>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Line spacing</span></div>
				<Segmented label="Line spacing" value={prefs.value.lineSpacing} onchange={(v: LineSpacing) => prefs.set('lineSpacing', v)} options={[{ value: 'compact', label: 'Compact' }, { value: 'normal', label: 'Normal' }, { value: 'relaxed', label: 'Relaxed' }]} />
			</div>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Topics open by default</span><span class="text-[0.8125rem] text-muted-foreground">Long parts (Rule 110's twelve topics, say) can start collapsed.</span></div>
				<Segmented label="Topics open by default" value={prefs.value.sectionsOpen} onchange={(v: SectionsOpen) => prefs.set('sectionsOpen', v)} options={[{ value: 'all', label: 'All' }, { value: 'first', label: 'First only' }, { value: 'none', label: 'None' }]} />
			</div>
			<div class={row}>
				<label for="remember" class={what}><span class="text-[0.9375rem] font-medium">Remember where I stopped</span><span class="text-[0.8125rem] text-muted-foreground">Powers “Continue reading” on Home and on each subject.</span></label>
				<Switch id="remember" checked={prefs.value.rememberPosition} onCheckedChange={(v) => prefs.set('rememberPosition', v)} />
			</div>
		</section>

		<section id="labels" aria-labelledby="h-labels" class="scroll-mt-20 overflow-hidden rounded-xl border bg-card">
			<h2 id="h-labels" class="border-b px-5 py-4 text-[1.0625rem] font-semibold">Highlight labels</h2>
			<div class="flex flex-col gap-3 px-5 py-4">
				<p class="text-[0.8125rem] text-muted-foreground">Name what each color means to you. Labels apply in every subject and stay when you reset progress.</p>
				<div class="grid gap-3 sm:grid-cols-2">
					{#each HIGHLIGHT_COLORS as color (color)}
						<label class="flex items-center gap-3">
							<span class="size-6 shrink-0 rounded-md ring-1 ring-foreground/15" style="background:var(--hl-{color})" aria-hidden="true"></span>
							<span class="sr-only">Label for {COLOR_NAMES[color].toLowerCase()}</span>
							<Input value={userStorage.highlightLabels[color]} oninput={(e) => userStorage.setHighlightLabel(color, e.currentTarget.value)} placeholder={COLOR_NAMES[color]} maxlength={24} />
						</label>
					{/each}
				</div>
			</div>
		</section>

		<section id="search" aria-labelledby="h-search" class="scroll-mt-20 overflow-hidden rounded-xl border bg-card">
			<h2 id="h-search" class="border-b px-5 py-4 text-[1.0625rem] font-semibold">Search</h2>
			<div class={row}>
				<label for="recent" class={what}><span class="text-[0.9375rem] font-medium">Keep recent searches</span><span class="text-[0.8125rem] text-muted-foreground">Shown when you open search with Ctrl K, ⌘K or /.</span></label>
				<Switch id="recent" checked={prefs.value.keepRecentSearches} onCheckedChange={(v) => prefs.set('keepRecentSearches', v)} />
			</div>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Clear recent searches</span><span class="text-[0.8125rem] text-muted-foreground">{userStorage.reading.recentSearches.length} saved</span></div>
				<Button variant="outline" disabled={!userStorage.reading.recentSearches.length} onclick={() => (userStorage.clearRecentSearches(), ui.toast('Recent searches cleared'))}>Clear</Button>
			</div>
		</section>

		<section id="data" aria-labelledby="h-data" class="scroll-mt-20 overflow-hidden rounded-xl border bg-card">
			<h2 id="h-data" class="border-b px-5 py-4 text-[1.0625rem] font-semibold">Your data</h2>
			<div class="flex flex-col gap-3 px-5 py-4">
				<p class="text-[0.8125rem] leading-relaxed text-muted-foreground">Everything is stored only in this browser: there's no account or server. Download a backup before clearing site data or switching devices.</p>
				<dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
					<div class="rounded-lg border bg-popover p-3"><dt class="text-xs text-muted-foreground">MCQs answered</dt><dd class="m-0 text-lg font-semibold tabular-nums">{stats.attempted}<span class="text-sm font-normal text-muted-foreground"> / {totals.mcqs}</span></dd></div>
					<div class="rounded-lg border bg-popover p-3"><dt class="text-xs text-muted-foreground">Essays drafted</dt><dd class="m-0 text-lg font-semibold tabular-nums">{stats.essaysStarted}<span class="text-sm font-normal text-muted-foreground"> / {totals.essays}</span></dd></div>
					<div class="rounded-lg border bg-popover p-3"><dt class="text-xs text-muted-foreground">Highlights</dt><dd class="m-0 text-lg font-semibold tabular-nums">{Object.keys(userStorage.highlights).length}</dd></div>
					<div class="rounded-lg border bg-popover p-3"><dt class="text-xs text-muted-foreground">Notes</dt><dd class="m-0 text-lg font-semibold tabular-nums">{userStorage.reading.notes.length}</dd></div>
				</dl>
			</div>
			{#if userStorage.persistError}
				<p class="mx-5 mb-4 flex items-start gap-2 rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive" role="alert">
					<TriangleAlert class="mt-0.5 size-4 shrink-0" /> This browser is blocking saves (private mode or full storage). Progress will be lost when you close the tab — download a backup.
				</p>
			{/if}
			<div class={row + ' border-t'}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Download a backup</span><span class="text-[0.8125rem] text-muted-foreground">Answers, essay drafts, bookmarks, highlights and labels, plus notes and reading progress, as a JSON file.</span></div>
				<Button variant="outline" onclick={exportProgress}><Download /> Export</Button>
			</div>
			<div class={row}>
				<div class={what}><span class="text-[0.9375rem] font-medium">Restore from a backup</span><span class="text-[0.8125rem] text-muted-foreground">Replaces your progress in this browser with the file's. You'll see what's in it first. Older backups still import.</span></div>
				<Button variant="outline" onclick={() => fileInput?.click()}><Upload /> Import</Button>
				<input bind:this={fileInput} type="file" accept="application/json,.json" class="hidden" onchange={onPick} aria-label="Choose a backup file" />
			</div>
			{#if pending}
				<div role="dialog" aria-labelledby="restore-t" class="mx-5 mb-4 flex flex-col gap-3 rounded-lg border border-input bg-popover p-4">
					<p id="restore-t" class="text-sm font-semibold">Restore {pending.name}?</p>
					<p class="text-[0.8125rem] leading-relaxed text-muted-foreground">
						It has {pending.info.answers} answers, {pending.info.drafts} essay drafts, {pending.info.bookmarks} bookmarks and {pending.info.highlights} highlights{pending.info.hasReading ? `, ${pending.info.notes} notes and reading progress` : ''}{pending.info.exportedAt ? `, saved ${new Date(pending.info.exportedAt).toLocaleDateString()}` : ''}. Your current progress in this browser will be replaced{pending.info.hasReading ? '' : ' (your notes and reading progress stay, since this older backup has none)'}.
					</p>
					<div class="flex flex-wrap gap-2">
						<Button onclick={applyImport}>Replace</Button>
						<Button variant="outline" onclick={exportProgress}>Export current first</Button>
						<Button variant="ghost" onclick={() => (pending = null)}>Cancel</Button>
					</div>
				</div>
			{/if}
			{#if importError}<p class="mx-5 mb-4 text-sm text-destructive" role="alert">{importError}</p>{/if}
			<div class={row + ' border-t'}>
				<div class={what}><span class="text-[0.9375rem] font-medium text-destructive">Reset all progress</span><span class="text-[0.8125rem] text-muted-foreground">Deletes answers, drafts, bookmarks, highlights, notes and reading progress in this browser. Theme, text size and labels stay.</span></div>
				<Button variant="destructive" onclick={() => (confirmReset = true)}>Reset…</Button>
			</div>
		</section>
	</div>
</div>

<Dialog.Root bind:open={confirmReset}>
	<Dialog.Content class="sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Erase all progress?</Dialog.Title>
			<Dialog.Description>Answers, essay drafts, bookmarks, highlights, notes and reading progress in this browser will be deleted. Download a backup first if you might want them back.</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (confirmReset = false)}>Cancel</Button>
			<Button variant="destructive" onclick={doReset}>Erase everything</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
