<!-- +error.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { Home, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Error {$page.status} - Binsar Jr</title>
</svelte:head>

<main class="flex min-h-screen items-center justify-center bg-black text-white">
	<div class="mx-auto max-w-md px-4 text-center">
		<!-- Error Code -->
		<div class="mb-8">
			<h1 class="mb-4 text-8xl font-bold text-yellow-400">{$page.status}</h1>
			<h2 class="mb-4 text-2xl font-semibold text-white">
				{#if $page.status === 404}
					Page Not Found
				{:else if $page.status === 500}
					Internal Server Error
				{:else}
					Something went wrong
				{/if}
			</h2>
		</div>

		<!-- Error Message -->
		<div class="mb-8">
			<p class="leading-relaxed text-gray-300">
				{#if $page.status === 404}
					Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or
					you entered the wrong URL.
				{:else if $page.status === 500}
					We're experiencing some technical difficulties. Please try again later.
				{:else}
					{$page.error?.message || 'An unexpected error occurred. Please try again.'}
				{/if}
			</p>
		</div>

		<!-- Action Buttons -->
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button
				onclick={() => history.back()}
				class="flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700"
			>
				<ArrowLeft class="mr-2 h-4 w-4" />
				Go Back
			</button>
			<a
				href="/"
				class="flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
			>
				<Home class="mr-2 h-4 w-4" />
				Go Home
			</a>
		</div>

		<!-- Additional Help -->
		{#if $page.status === 404}
			<div class="mt-12 rounded-xl border border-gray-800 bg-gray-900 p-6">
				<h3 class="mb-4 text-lg font-semibold text-white">Looking for something specific?</h3>
				<div class="space-y-2 text-sm">
					<a href="/" class="block text-yellow-400 transition-colors hover:text-yellow-300"
						>→ Home</a
					>
					<a href="/blog" class="block text-yellow-400 transition-colors hover:text-yellow-300"
						>→ Blog</a
					>
					<a href="/#projects" class="block text-yellow-400 transition-colors hover:text-yellow-300"
						>→ Projects</a
					>
					<a href="/#contact" class="block text-yellow-400 transition-colors hover:text-yellow-300"
						>→ Contact</a
					>
				</div>
			</div>
		{/if}
	</div>

	<!-- Background Pattern -->
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent"
		></div>
		<div
			class="absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/20"
		></div>
		<div
			class="absolute top-1/3 right-1/3 h-1 w-1 animate-pulse rounded-full bg-yellow-400/30 delay-1000"
		></div>
		<div
			class="absolute right-1/4 bottom-1/4 h-3 w-3 animate-pulse rounded-full bg-yellow-400/10 delay-2000"
		></div>
	</div>
</main>
