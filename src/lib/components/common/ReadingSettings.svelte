<script lang="ts">
	import Segmented from './Segmented.svelte';
	import TextSizeControl from '$lib/components/TextSizeControl.svelte';
	import { prefs, type LineSpacing, type LineWidth } from '$lib/stores/prefs.svelte';
	import { theme, type ThemeMode } from '$lib/stores/theme.svelte';

	/** The reading controls, shared by the reader's "Aa" popover and the Settings page. */
	let { compact = false }: { compact?: boolean } = $props();
	const size = $derived(compact ? 'sm' : 'default') as 'sm' | 'default';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<span class="label-caps text-[0.7rem]">Text size</span>
		<TextSizeControl class="self-start" />
	</div>
	<div class="flex flex-col gap-2">
		<span class="label-caps text-[0.7rem]">Line width</span>
		<Segmented
			label="Line width"
			{size}
			value={prefs.value.lineWidth}
			onchange={(v: LineWidth) => prefs.set('lineWidth', v)}
			options={[
				{ value: 'narrow', label: 'Narrow' },
				{ value: 'normal', label: 'Normal' },
				{ value: 'wide', label: 'Wide' }
			]}
		/>
	</div>
	<div class="flex flex-col gap-2">
		<span class="label-caps text-[0.7rem]">Line spacing</span>
		<Segmented
			label="Line spacing"
			{size}
			value={prefs.value.lineSpacing}
			onchange={(v: LineSpacing) => prefs.set('lineSpacing', v)}
			options={[
				{ value: 'compact', label: 'Compact' },
				{ value: 'normal', label: 'Normal' },
				{ value: 'relaxed', label: 'Relaxed' }
			]}
		/>
	</div>
	<div class="flex flex-col gap-2">
		<span class="label-caps text-[0.7rem]">Theme</span>
		<Segmented
			label="Theme"
			{size}
			value={theme.mode}
			onchange={(v: ThemeMode) => theme.set(v)}
			options={[
				{ value: 'light', label: 'Light' },
				{ value: 'dark', label: 'Dark' },
				{ value: 'system', label: 'System' }
			]}
		/>
	</div>
</div>
