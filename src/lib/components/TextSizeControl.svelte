<script lang="ts">
	import { AArrowDown, AArrowUp } from '@lucide/svelte';
	import { textSize } from '$lib/stores/textSize.svelte';
	import { cn } from '$lib/utils';

	let { class: className = '' }: { class?: string } = $props();

	const button =
		'grid h-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-40';
</script>

<div role="group" aria-label="Text size" class={cn('inline-flex items-center rounded-lg border border-input bg-popover p-[3px]', className)}>
	<button type="button" class={cn(button, 'w-9')} aria-label="Smaller text" title="Smaller text" disabled={!textSize.canDecrease} onclick={() => textSize.decrease()}>
		<AArrowDown class="size-4" />
	</button>
	<button
		type="button"
		class={cn(button, 'min-w-14 px-1 text-sm font-medium tabular-nums disabled:opacity-100', !textSize.isDefault && 'text-foreground')}
		aria-label={`Text size ${textSize.size}%. Reset to 100%`}
		title="Reset text size"
		disabled={textSize.isDefault}
		onclick={() => textSize.reset()}
	>
		{textSize.size}%
	</button>
	<button type="button" class={cn(button, 'w-9')} aria-label="Larger text" title="Larger text" disabled={!textSize.canIncrease} onclick={() => textSize.increase()}>
		<AArrowUp class="size-4" />
	</button>
</div>
