<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let component;
	export let props = {};

	const dispatch = createEventDispatcher();

	const close = () => {
		dispatch('close');
	};

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.removeProperty('overflow');
	});
</script>

<!-- 
	@component
	@component The Svelte component to display within the modal.
	@props An object containing properties to pass down to the component. (default: {})
-->

<div
	on:click|self={close}
	class="fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
	transition:fade
>
	<div class="relative max-h-full max-w-full overflow-auto rounded-md bg-white p-6 shadow-lg">
		<svelte:component this={component} on:click {...props} />
	</div>
</div>

<style>
	.fixed {
		z-index: 1000;
	}
</style>
