<script lang="ts">
	import { CircleAlert, CircleCheck, X } from '@lucide/svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn } from '$lib/utils';
</script>

<div class="no-print pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex flex-col items-center gap-2 px-4" aria-live="polite" role="status">
	{#each ui.toasts as t (t.id)}
		<div
			class={cn(
				'pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-xl px-4 py-3 text-sm shadow-lg',
				t.tone === 'error' ? 'border border-destructive/40 bg-popover text-destructive' : 'bg-primary text-primary-foreground'
			)}
		>
			{#if t.tone === 'error'}<CircleAlert class="size-4 shrink-0" />{:else}<CircleCheck class="size-4 shrink-0" />{/if}
			<span class="flex-1">{t.message}</span>
			{#if t.action}
				<button type="button" class="font-semibold underline underline-offset-2" onclick={() => (t.action?.run(), ui.dismiss(t.id))}>{t.action.label}</button>
			{/if}
			<button type="button" class="grid size-6 place-items-center rounded opacity-70 hover:opacity-100" aria-label="Dismiss" onclick={() => ui.dismiss(t.id)}><X class="size-3.5" /></button>
		</div>
	{/each}
</div>
