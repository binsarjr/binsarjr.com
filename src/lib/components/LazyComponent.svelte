<!-- LazyComponent.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { lazyLoad } from '$lib/utils';
	import Loading from './Loading.svelte';

	export let component: any;
	export let threshold = 0.1;
	export let rootMargin = '50px';

	let isVisible = false;
	let container: HTMLElement;
	let loadedComponent: any = null;

	onMount(async () => {
		if (typeof IntersectionObserver === 'undefined') {
			// Fallback for browsers without IntersectionObserver
			isVisible = true;
			loadedComponent = component;
			return;
		}

		const observer = new IntersectionObserver(
			async (entries) => {
				if (entries[0].isIntersecting) {
					isVisible = true;
					if (typeof component === 'function') {
						const module = await component();
						loadedComponent = module.default;
					} else {
						loadedComponent = component;
					}
					observer.unobserve(container);
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(container);

		return () => {
			observer.unobserve(container);
		};
	});
</script>

<div bind:this={container} class="min-h-[200px]">
	{#if isVisible && loadedComponent}
		<svelte:component this={loadedComponent} />
	{:else}
		<div class="flex items-center justify-center py-12">
			<Loading />
		</div>
	{/if}
</div>
