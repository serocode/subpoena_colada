<script lang="ts">
	import { pct } from '$lib/utils';
	import { cn } from '$lib/utils';

	/** Reading progress: studied (solid), visited only (pale), not started (empty). Visited never counts as studied. */
	let { studied, visited = 0, total, label, class: className = '' }: { studied: number; visited?: number; total: number; label: string; class?: string } = $props();
</script>

<div
	role="img"
	aria-label="{label}: {studied} of {total} studied{visited ? `, ${visited} visited` : ''}"
	class={cn('flex h-1.5 overflow-hidden rounded-full bg-muted', className)}
>
	<span class="bg-green" style="width:{pct(studied, total)}%"></span>
	<span class="bg-green/30" style="width:{pct(visited, total)}%"></span>
</div>
