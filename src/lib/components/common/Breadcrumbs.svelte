<script lang="ts">
	import { cn } from '$lib/utils';

	let { items, class: className = '' }: { items: { label: string; href?: string }[]; class?: string } = $props();
</script>

<!-- On phones only the last two steps show, so the trail never wraps into a paragraph. -->
<nav aria-label="Breadcrumb" class={cn('min-w-0 text-sm text-muted-foreground', className)}>
	<ol class="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1">
		{#each items as item, i (i)}
			{@const last = i === items.length - 1}
			<li class={cn('flex min-w-0 items-center gap-1.5', i < items.length - 2 && 'max-sm:hidden')}>
				{#if item.href && !last}
					<a href={item.href} class="truncate rounded-sm text-muted-foreground no-underline hover:text-foreground hover:underline">{item.label}</a>
				{:else}
					<span aria-current={last ? 'page' : undefined} class={cn('truncate', last && 'font-medium text-foreground')}>{item.label}</span>
				{/if}
				{#if !last}<span aria-hidden="true" class="text-border">/</span>{/if}
			</li>
		{/each}
	</ol>
</nav>
