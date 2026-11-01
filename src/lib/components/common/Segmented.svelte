<script lang="ts" generics="T extends string">
	import { cn } from '$lib/utils';

	let {
		options,
		value,
		onchange,
		label,
		size = 'default',
		disabled = false,
		class: className = ''
	}: {
		options: { value: T; label: string; count?: number }[];
		value: T;
		onchange: (v: T) => void;
		label: string;
		size?: 'default' | 'sm';
		disabled?: boolean;
		class?: string;
	} = $props();
</script>

<div role="group" aria-label={label} class={cn('inline-flex max-w-full rounded-[0.625rem] border bg-muted p-[3px]', className)}>
	{#each options as o (o.value)}
		<button
			type="button"
			aria-pressed={value === o.value}
			{disabled}
			onclick={() => onchange(o.value)}
			class={cn(
				'inline-flex min-w-0 items-center justify-center gap-1.5 rounded-[0.45rem] px-3 font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50',
				size === 'sm' ? 'h-8 text-[0.8125rem]' : 'h-9 text-sm',
				value === o.value && 'bg-popover font-semibold text-foreground shadow-sm'
			)}
		>
			{o.label}
			{#if o.count !== undefined}<span class="text-xs font-medium text-muted-foreground tabular-nums">{o.count}</span>{/if}
		</button>
	{/each}
</div>
