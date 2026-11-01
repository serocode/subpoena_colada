<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		icon: Icon,
		title,
		children,
		actions,
		class: className = ''
	}: { icon?: Component<{ class?: string }>; title: string; children?: Snippet; actions?: Snippet; class?: string } = $props();
</script>

<div role="status" class={cn('flex flex-col items-center gap-3 rounded-xl border border-dashed px-6 py-10 text-center', className)}>
	{#if Icon}<Icon class="size-7 text-muted-foreground" />{/if}
	<p class="text-base font-semibold text-foreground">{title}</p>
	{#if children}<div class="max-w-md text-sm leading-relaxed text-muted-foreground">{@render children()}</div>{/if}
	{#if actions}<div class="mt-1 flex flex-wrap justify-center gap-2">{@render actions()}</div>{/if}
</div>
