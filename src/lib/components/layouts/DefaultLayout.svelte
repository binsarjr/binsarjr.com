<!-- DefaultLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft } from 'lucide-svelte';

	export let title: string = '';
	export let description: string = '';
</script>

<svelte:head>
	{#if title}
		<title>{title} - Binsar Jr</title>
	{/if}
	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	{#if title}
		<meta property="og:title" content={title} />
	{/if}
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 text-white">
	<!-- Header -->
	<header class="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
		<div class="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="mb-4 inline-flex items-center text-sm text-gray-400 transition-colors hover:text-yellow-400"
			>
				<ArrowLeft class="mr-2 h-4 w-4" />
				Back
			</button>

			{#if title}
				<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
					{title}
				</h1>
			{/if}

			{#if description}
				<p class="text-lg text-gray-300">
					{description}
				</p>
			{/if}
		</div>
	</header>

	<!-- Content -->
	<main class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		<article class="prose-enhanced">
			<slot />
		</article>
	</main>
</div>
