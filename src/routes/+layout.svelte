<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import AppHeader from '$lib/components/shell/AppHeader.svelte';
	import SearchPalette from '$lib/components/shell/SearchPalette.svelte';
	import Toaster from '$lib/components/shell/Toaster.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { textSize } from '$lib/stores/textSize.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import { prefs, LINE_HEIGHT, LINE_WIDTH_REM } from '$lib/stores/prefs.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Touch the stores once so persistence, theme and text-size listeners are live app-wide.
	$effect(() => {
		void userStorage.isLoaded;
		void theme.resolved;
		void textSize.size;
	});

	// Reading preferences become CSS variables the reader and study guides use.
	$effect(() => {
		const root = document.documentElement.style;
		root.setProperty('--measure', `${LINE_WIDTH_REM[prefs.value.lineWidth]}rem`);
		root.setProperty('--leading', String(LINE_HEIGHT[prefs.value.lineSpacing]));
	});

	/** ⌘K / Ctrl+K anywhere, or "/" when not typing, opens search. */
	function onKey(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			if (ui.searchOpen) ui.searchOpen = false;
			else ui.openSearch('', page.params.slug ? 'subject' : '');
			return;
		}
		if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey || ui.searchOpen) return;
		const t = e.target as HTMLElement | null;
		if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return;
		if (document.querySelector('[role="dialog"]')) return;
		e.preventDefault();
		ui.openSearch('', page.params.part ? 'part' : page.params.slug ? 'subject' : '');
	}

	const study = $derived(/^\/module\/[^/]+\/(read|practice|essays)/.test(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Subpoena Colada — Philippine Law Study Guide</title>
</svelte:head>

<svelte:window onkeydown={onKey} />

<a href="#main" class="sr-only z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2">Skip to content</a>
<AppHeader />
<main id="main" class="@container/main w-full min-w-0">
	{@render children()}
</main>
{#if !study}
	<footer class="no-print mx-auto max-w-[75rem] px-4 pt-6 pb-10 text-center text-xs text-muted-foreground sm:px-8">
		Study aid only — not a substitute for the full codal text. Your answers, drafts, notes and highlights stay in this browser.
		<a href="/legacy/index.html" class="underline underline-offset-2 hover:text-foreground">Previous version</a>
	</footer>
{/if}
<SearchPalette />
<Toaster />

{#if userStorage.persistError}
	<p role="alert" class="no-print fixed inset-x-0 bottom-0 z-50 bg-destructive px-4 py-2 text-center text-sm text-white">
		This browser is blocking saves (private mode or full storage). Progress will be lost when you close the tab — export a backup from Settings.
	</p>
{/if}
