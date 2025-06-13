<script lang="ts">
	import { Calendar, ArrowRight, ExternalLink, Github } from 'lucide-svelte';
	import { format } from 'date-fns';
	import type { PageData } from './$types';
	import { fadeUp } from '$lib/animations';

	const { data }: { data: PageData } = $props();

	let selectedTech = $state('All');
	let projects = $derived(data.projects || []);
	let allTechs = $derived([
		'All',
		...Array.from(new Set(projects.flatMap((project) => project.meta.technologies || [])))
	]);
	let filteredProjects = $derived(
		selectedTech === 'All'
			? projects
			: projects.filter((project) => project.meta.technologies?.includes(selectedTech))
	);
</script>

<svelte:head>
	<title>Projects - Binsar Jr</title>
	<meta
		name="description"
		content="Explore my portfolio of web development projects, applications, and open source contributions."
	/>
</svelte:head>

<main class="relative min-h-screen overflow-hidden pt-20">
	<!-- Background decorations -->
	<div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
	<div
		class="absolute top-1/3 right-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-400/5 blur-3xl"
	></div>
	<div
		class="absolute bottom-1/3 left-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/5 to-teal-400/5 blur-3xl delay-1000"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Enhanced Header -->
		<div class="mb-20 text-center" use:fadeUp>
			<h1 class="mb-6 text-5xl font-bold md:text-6xl" use:fadeUp={{ delay: 200 }}>
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Projects</span
				>
			</h1>
			<p
				class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
				use:fadeUp={{ delay: 400 }}
			>
				A showcase of web applications, tools, and open source contributions I've built
			</p>
		</div>

		<!-- Enhanced Technology Filter -->
		<div class="mb-16" use:fadeUp={{ delay: 600 }}>
			<div class="flex flex-wrap justify-center gap-3">
				{#each allTechs as tech}
					<button
						onclick={() => (selectedTech = tech)}
						class="group relative rounded-full border px-6 py-3 text-sm font-medium backdrop-blur-sm transition-all duration-300 {selectedTech ===
						tech
							? 'border-yellow-400/50 bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/25'
							: 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white'}"
					>
						{tech}
						{#if selectedTech === tech}
							<div
								class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
							></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<!-- Enhanced Projects Grid -->
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project, index}
				{#key project.slug}
					<article
						class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-400/10"
						use:fadeUp={{ delay: 800 + index * 100 }}
					>
						<!-- Enhanced Project Image -->
						{#if project.meta.image}
							<div class="aspect-video overflow-hidden">
								<img
									src={project.meta.image}
									alt={project.meta.title}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									loading="lazy"
								/>
							</div>
						{:else}
							<div
								class="flex aspect-video items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900"
							>
								<div class="text-6xl opacity-30">🚀</div>
							</div>
						{/if}

						<!-- Enhanced Featured Badge -->
						{#if project.meta.featured}
							<div class="absolute top-4 left-4 z-10">
								<span
									class="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-xs font-semibold text-black shadow-lg"
								>
									⭐ Featured
								</span>
							</div>
						{/if}

						<!-- Enhanced Project Content -->
						<div class="p-8">
							<!-- Enhanced Project Meta -->
							{#if project.meta.completedAt}
								<div class="mb-6 flex items-center">
									<div
										class="flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-400 backdrop-blur-sm"
									>
										<Calendar class="mr-2 h-4 w-4 text-blue-400" />
										{format(new Date(project.meta.completedAt), 'MMM yyyy')}
									</div>
								</div>
							{/if}

							<!-- Enhanced Project Title -->
							<h2
								class="mb-4 line-clamp-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-yellow-400 group-hover:to-orange-400"
							>
								{project.meta.title}
							</h2>

							<!-- Enhanced Project Description -->
							<p class="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-300">
								{project.meta.description || project.meta.excerpt || 'No description available'}
							</p>

							<!-- Enhanced Technologies -->
							<div class="mb-8 flex flex-wrap gap-2">
								{#each project.meta.technologies || [] as tech}
									<span
										class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
									>
										{tech}
									</span>
								{/each}
							</div>

							<!-- Enhanced Project Links -->
							<div class="flex items-center gap-6">
								<a
									href="/projects/{project.slug}"
									class="group/link inline-flex items-center font-medium text-yellow-400 transition-all duration-300 hover:scale-105 hover:text-yellow-300"
								>
									View Details
									<ArrowRight
										class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
									/>
								</a>

								<div class="flex items-center gap-3">
									{#if project.meta.liveUrl}
										<a
											href={project.meta.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="group/icon flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
											title="Live Demo"
										>
											<ExternalLink
												class="h-4 w-4 transition-transform duration-300 group-hover/icon:rotate-12"
											/>
										</a>
									{/if}

									{#if project.meta.githubUrl}
										<a
											href={project.meta.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="group/icon flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-gray-400/50 hover:bg-gray-400/10 hover:text-white"
											title="Source Code"
										>
											<Github
												class="h-4 w-4 transition-transform duration-300 group-hover/icon:rotate-12"
											/>
										</a>
									{/if}
								</div>
							</div>
						</div>

						<!-- Decorative elements -->
						<div
							class="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-cyan-400/30"
						></div>
						<div
							class="absolute bottom-4 left-4 h-1 w-1 animate-pulse rounded-full bg-emerald-400/30 delay-500"
						></div>
					</article>
				{/key}
			{/each}
		</div>

		<!-- Enhanced No projects message -->
		{#if filteredProjects.length === 0}
			<div class="py-20 text-center">
				<div
					class="relative inline-block rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
				>
					<div class="mb-4 text-6xl">🔍</div>
					<p class="mb-2 text-xl text-gray-300">No projects found for the selected technology.</p>
					<p class="text-gray-400">Try selecting a different filter or check back later.</p>
				</div>
			</div>
		{/if}

		<!-- Enhanced Contact Section -->
		<div class="mt-24">
			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm"
			>
				<!-- Background decoration -->
				<div
					class="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl"
				></div>
				<div
					class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-r from-emerald-400/10 to-teal-400/10 blur-3xl"
				></div>

				<div class="relative z-10">
					<h3
						class="mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-3xl font-bold text-transparent"
					>
						Want to Work Together?
					</h3>
					<p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
						I'm always open to discussing new projects and opportunities. Let's build something
						amazing together.
					</p>
					<a
						href="/contact"
						class="group relative inline-block rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-10 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
					>
						<span class="relative z-10">Get In Touch</span>
						<div
							class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</main>
