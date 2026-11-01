<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { getModule } from '$lib/data/modules';

	let { children } = $props();

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug));

	// Old slugs of merged subjects (/module/statcon2, /module/pfr_cases) move to the subject they are part of.
	$effect(() => {
		if (subject && subject.id !== slug) {
			const url = new URL(page.url.href);
			url.pathname = url.pathname.replace(`/module/${slug}`, `/module/${subject.id}`);
			goto(url, { replace: true });
		}
	});
</script>

{#if !subject}
	<svelte:head><title>Subject not found — Subpoena Colada</title></svelte:head>
	<div class="mx-auto max-w-md space-y-4 px-4 py-20 text-center">
		<h1 class="font-heading text-2xl font-semibold">Subject not found</h1>
		<p class="text-muted-foreground">There's no subject called “{slug}”.</p>
		<Button href="/"><ArrowLeft /> Back home</Button>
	</div>
{:else if subject.id === slug}
	{@render children()}
{/if}
