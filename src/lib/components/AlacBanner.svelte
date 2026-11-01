<script lang="ts">
	import { ALAC_FIELDS } from '$lib/alac';
	import { cn } from '$lib/utils';

	let { compact = false, bare = false }: { compact?: boolean; bare?: boolean } = $props();

	const blurbs = [
		'Answer the question first — a direct "Yes" or "No", never "it depends".',
		'Cite the codal provision, statute, or doctrine that decides the issue.',
		'Weave the facts through each element of the rule, one element at a time.',
		'Close with the disposition: the result the examiner is waiting for.'
	];
</script>

<section aria-label="The ALAC method" class={cn(!bare && 'rounded-xl border bg-card p-4 sm:p-5')}>
	{#if !bare}
		<div class="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
			<h2 class="font-heading text-lg font-semibold">The ALAC Method</h2>
			<p class="text-sm text-muted-foreground">The four-part structure every bar essay answer should follow.</p>
		</div>
	{/if}
	<ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
		{#each ALAC_FIELDS as f, i (f.key)}
			<li class="relative flex gap-3 rounded-lg border bg-background/60 p-3">
				<span class={cn('grid size-9 shrink-0 place-items-center rounded-md border font-serif text-lg font-bold', f.badge)} aria-hidden="true">{f.letter}</span>
				<div class="min-w-0">
					<p class="text-sm font-semibold">
						<span class="sr-only">{f.letter} — </span>{f.name}
					</p>
					{#if !compact}
						<p class="mt-0.5 text-[0.8rem] leading-snug text-muted-foreground">{blurbs[i]}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</section>
