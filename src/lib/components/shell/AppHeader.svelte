<script lang="ts">
	import { ChevronDown, Menu, Moon, Scale, Search, SlidersHorizontal, Sun, X } from '@lucide/svelte';
	import { Popover, Dialog as DialogPrimitive } from 'bits-ui';
	import { page } from '$app/state';
	import { modules } from '$lib/data/modules';
	import { theme } from '$lib/stores/theme.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn } from '$lib/utils';

	const path = $derived(page.url.pathname);
	const inSubject = $derived(path.startsWith('/module/'));
	const currentSubject = $derived(inSubject ? page.params.slug : undefined);

	let subjectsOpen = $state(false);
	let menuOpen = $state(false);

	const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

	function toggleTheme() {
		theme.set(theme.resolved === 'dark' ? 'light' : 'dark');
	}

	const navLink = (active: boolean) =>
		cn('inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium transition-colors', active ? 'bg-muted font-semibold text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground');
</script>

<header class="no-print sticky top-0 z-40 h-(--header-h) border-b bg-background">
	<div class="flex h-full items-center gap-2 px-3 sm:gap-4 sm:px-5">
		<a href="/" aria-label="Subpoena Colada, home" class="flex shrink-0 items-center gap-2.5 rounded-lg text-foreground no-underline">
			<span class="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Scale class="size-4.5" /></span>
			<span class="font-brand text-[0.95rem] font-semibold max-md:hidden">Subpoena Colada</span>
		</a>

		<nav aria-label="Primary" class="flex items-center gap-0.5 max-md:hidden">
			<a href="/" class={navLink(path === '/')} aria-current={path === '/' ? 'page' : undefined}>Home</a>
			<Popover.Root bind:open={subjectsOpen}>
				<Popover.Trigger class={navLink(inSubject)} aria-current={inSubject ? 'page' : undefined}>
					Subjects <ChevronDown class="size-3.5" />
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content sideOffset={6} align="start" class="z-50 w-80 rounded-xl border bg-popover p-1.5 shadow-lg outline-none">
						<ul class="flex flex-col">
							{#each modules as m (m.id)}
								<li>
									<a
										href="/module/{m.id}"
										onclick={() => (subjectsOpen = false)}
										aria-current={currentSubject === m.id ? 'page' : undefined}
										class={cn('flex flex-col gap-0.5 rounded-lg px-3 py-2 no-underline hover:bg-muted', currentSubject === m.id && 'bg-muted')}
									>
										<span class="text-sm font-medium text-foreground">{m.title}</span>
										<span class="text-xs text-muted-foreground">{m.subjectCategory.replace(' — Supplement', '')}</span>
									</a>
								</li>
							{/each}
						</ul>
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
			<a href="/saved" class={navLink(path.startsWith('/saved'))} aria-current={path.startsWith('/saved') ? 'page' : undefined}>Saved</a>
		</nav>

		<button
			type="button"
			onclick={() => ui.openSearch()}
			class="mx-auto flex h-9 min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-input bg-popover px-3 text-sm text-muted-foreground transition-colors hover:border-ring/60 max-sm:hidden md:max-w-[32rem]"
			aria-label="Search all subjects"
			aria-keyshortcuts="Control+K Meta+K /"
		>
			<Search class="size-4 shrink-0" />
			<span class="flex-1 truncate text-left">Search all subjects</span>
			<kbd class="rounded-md border px-1.5 text-xs font-medium max-lg:hidden">{isMac ? '⌘' : 'Ctrl'} K</kbd>
		</button>

		<div class="ml-auto flex shrink-0 items-center gap-0.5 sm:ml-0">
			<button type="button" onclick={() => ui.openSearch()} aria-label="Search" class="grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground sm:hidden">
				<Search class="size-5" />
			</button>
			<button
				type="button"
				onclick={toggleTheme}
				aria-label={theme.resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
				title={theme.resolved === 'dark' ? 'Light theme' : 'Dark theme'}
				class="grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
			>
				{#if theme.resolved === 'dark'}<Sun class="size-[1.15rem]" />{:else}<Moon class="size-[1.15rem]" />{/if}
			</button>
			<a
				href="/settings"
				aria-label="Settings"
				title="Settings"
				aria-current={path.startsWith('/settings') ? 'page' : undefined}
				class={cn('grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground max-md:hidden', path.startsWith('/settings') && 'bg-muted text-foreground')}
			>
				<SlidersHorizontal class="size-[1.15rem]" />
			</a>
			<button type="button" onclick={() => (menuOpen = true)} aria-label="Menu" class="grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground md:hidden">
				<Menu class="size-5" />
			</button>
		</div>
	</div>
</header>

<!-- Phones: the primary navigation as a sheet. -->
<DialogPrimitive.Root bind:open={menuOpen}>
	<DialogPrimitive.Portal>
		<DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/40" />
		<DialogPrimitive.Content class="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,88vw)] flex-col gap-1 overflow-y-auto border-l bg-background p-3 shadow-xl outline-none">
			<div class="mb-2 flex items-center justify-between">
				<DialogPrimitive.Title class="px-2 text-sm font-semibold">Menu</DialogPrimitive.Title>
				<DialogPrimitive.Close class="grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted" aria-label="Close menu"><X class="size-5" /></DialogPrimitive.Close>
			</div>
			<a href="/" onclick={() => (menuOpen = false)} class={cn(navLink(path === '/'), 'h-11')}>Home</a>
			<a href="/saved" onclick={() => (menuOpen = false)} class={cn(navLink(path.startsWith('/saved')), 'h-11')}>Saved</a>
			<a href="/settings" onclick={() => (menuOpen = false)} class={cn(navLink(path.startsWith('/settings')), 'h-11')}>Settings</a>
			<p class="label-caps mt-4 px-3 pb-1">Subjects</p>
			{#each modules as m (m.id)}
				<a href="/module/{m.id}" onclick={() => (menuOpen = false)} class={cn(navLink(currentSubject === m.id), 'h-11')}>{m.title}</a>
			{/each}
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
</DialogPrimitive.Root>
