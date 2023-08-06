<script>
	import { toastMessage } from '$lib/stores';
	import { fade } from 'svelte/transition';

	$: {
		if ($toastMessage) {
			setTimeout(() => {
				$toastMessage = null;
			}, 2000);
		}
	}
</script>

{#if $toastMessage}
	<div
		on:click={() => {
			$toastMessage = null;
		}}
		transition:fade
		style="z-index: 1000;"
		class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border flex items-center justify-center rounded-lg bg-white shadow-xl py-8 px-8 text-center text-green-500 font-bold md:mx-auto md:max-w-sm"
	>
		{$toastMessage}
	</div>
{/if}
