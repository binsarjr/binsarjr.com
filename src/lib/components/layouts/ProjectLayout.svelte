<!-- ProjectLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-svelte';
	import { fadeUp, fadeRight, fadeLeft } from '$lib/animations';

	export let title: string;
	export let description: string = '';
	export let image: string = '';
	export let technologies: string[] = [];
	export let githubUrl: string = '';
	export let liveUrl: string = '';
	export let category: string = '';
	export const featured: boolean = false;
	export let completedAt: string = '';
</script>

<svelte:head>
	<title>{title} - Project by Binsar Jr</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 pt-20 text-white"
>
	<!-- Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<div
			class="absolute top-20 right-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl"
		></div>
		<div
			class="absolute top-1/3 left-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/5 to-orange-400/5 blur-3xl delay-1000"
		></div>
		<div
			class="absolute right-1/3 bottom-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/3 to-teal-400/3 blur-3xl delay-2000"
		></div>
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 60px 60px;"
		></div>
	</div>

	<!-- Enhanced Header -->
	<header class="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
		<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="group mb-6 inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
				use:fadeRight
			>
				<ArrowLeft
					class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				/>
				Back to Projects
			</button>

			<div class="grid gap-12 lg:grid-cols-2">
				<!-- Enhanced Project Info -->
				<div use:fadeRight={{ delay: 200 }}>
					<!-- Enhanced Category Badge -->
					{#if category}
						<div class="mb-6" use:fadeUp={{ delay: 400 }}>
							<span
								class="inline-flex items-center rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm"
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</span>
						</div>
					{/if}

					<!-- Enhanced Title -->
					<h1 class="mb-6 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 600 }}>
						<span
							class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
							>{title}</span
						>
					</h1>

					<!-- Enhanced Description -->
					{#if description}
						<p class="mb-8 text-lg leading-relaxed text-gray-300" use:fadeUp={{ delay: 800 }}>
							{description}
						</p>
					{/if}

					<!-- Enhanced Action Buttons -->
					<div class="mb-8 flex flex-wrap gap-4" use:fadeUp={{ delay: 1000 }}>
						{#if liveUrl}
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
							>
								<ExternalLink
									class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
								/>
								View Live
								<div
									class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
							</a>
						{/if}
						{#if githubUrl}
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group relative inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
							>
								<Github
									class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
								/>
								View Code
							</a>
						{/if}
					</div>

					<!-- Enhanced Technologies -->
					{#if technologies.length > 0}
						<div class="mb-6" use:fadeUp={{ delay: 1200 }}>
							<h3
								class="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-sm font-semibold text-transparent"
							>
								Technologies Used
							</h3>
							<div class="flex flex-wrap gap-3">
								{#each technologies as tech}
									<span
										class="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
									>
										<Tag class="mr-2 h-3 w-3" />
										{tech}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Enhanced Completion Date -->
					{#if completedAt}
						<div
							class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm"
						>
							<Calendar class="mr-2 h-4 w-4 text-green-400" />
							<span class="text-gray-200"
								>Completed: {new Date(completedAt).toLocaleDateString()}</span
							>
						</div>
					{/if}
				</div>

				<!-- Enhanced Project Image -->
				{#if image}
					<div class="flex items-center justify-center" use:fadeLeft={{ delay: 200 }}>
						<div class="group relative">
							<img
								src={image}
								alt={title}
								class="max-w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-105"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</header>

	<!-- Enhanced Content -->
	<main class="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<article class="prose-enhanced" use:fadeUp={{ delay: 1400 }}>
			<slot />
		</article>
	</main>
</div>
