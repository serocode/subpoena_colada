<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { getModule } from '$lib/data/modules';
	import { getParts, readHref } from '$lib/content';
	import { userStorage } from '$lib/stores/storage.svelte';

	// /module/x/read opens where the reader left off in this subject, or at the start.
	$effect(() => {
		const subject = getModule(page.params.slug ?? '');
		if (!subject || !userStorage.isLoaded) return;
		const last = userStorage.reading.lastBySubject[subject.id];
		const first = getParts(subject)[0];
		const href = last ? readHref(subject.id, last.partId, last.anchor) : first ? readHref(subject.id, first.id) : `/module/${subject.id}`;
		goto(href, { replace: true });
	});
</script>

<p class="sr-only" role="status">Opening the guide…</p>
