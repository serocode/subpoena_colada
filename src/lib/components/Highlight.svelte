<script lang="ts">
	import { markText } from '$lib/search';

	/** Plain text with the search's words marked; `text` is escaped by markText. */
	let { text, query = '' }: { text: string; query?: string } = $props();

	const html = $derived(query.trim().length >= 2 ? markText(text, query) : '');
</script>

{#if html}<span class="hit-text">{@html html}</span>{:else}{text}{/if}
