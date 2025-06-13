<script lang="ts">
	import { Calendar, ArrowRight, ExternalLink, Github } from 'lucide-svelte';
	import { format } from 'date-fns';
	import type { PageData } from './$types';

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

<main class="min-h-screen bg-black pt-20 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="mb-16 text-center">
			<h1 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				My <span class="text-yellow-400">Projects</span>
			</h1>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				A showcase of web applications, tools, and open source contributions I've built
			</p>
		</div>

		<!-- Technology Filter -->
		<div class="mb-12">
			<div class="flex flex-wrap justify-center gap-3">
				{#each allTechs as tech}
					<button
						onclick={() => (selectedTech = tech)}
						class="rounded-full px-4 py-2 text-sm font-medium transition-colors {selectedTech ===
						tech
							? 'bg-yellow-400 text-black'
							: 'border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'}"
					>
						{tech}
					</button>
				{/each}
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project}
				<article
					class="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-yellow-400/50"
				>
					<!-- Project Image -->
					{#if project.meta.image}
						<div class="aspect-video overflow-hidden">
							<img
								src={project.meta.image}
								alt={project.meta.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
					{/if}

					<!-- Featured Badge -->
					{#if project.meta.featured}
						<div
							class="border-b border-gray-800 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-4"
						>
							<span class="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
								Featured Project
							</span>
						</div>
					{/if}

					<!-- Project Content -->
					<div class="p-6">
						<!-- Project Meta -->
						<div class="mb-4 flex items-center space-x-4 text-sm text-gray-400">
							{#if project.meta.completedAt}
								<div class="flex items-center">
									<Calendar class="mr-1 h-4 w-4" />
									{format(new Date(project.meta.completedAt), 'MMM yyyy')}
								</div>
							{/if}
						</div>

						<!-- Project Title -->
						<h2
							class="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
						>
							{project.meta.title}
						</h2>

						<!-- Project Description -->
						<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300">
							{project.meta.description || project.meta.excerpt || 'No description available'}
						</p>

						<!-- Technologies -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each project.meta.technologies || [] as tech}
								<span
									class="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-yellow-400"
								>
									{tech}
								</span>
							{/each}
						</div>

						<!-- Project Links -->
						<div class="flex items-center gap-4">
							<a
								href="/projects/{project.slug}"
								class="inline-flex items-center font-medium text-yellow-400 transition-colors hover:text-yellow-300"
							>
								View Details
								<ArrowRight class="ml-2 h-4 w-4" />
							</a>

							{#if project.meta.liveUrl}
								<a
									href={project.meta.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center text-gray-400 transition-colors hover:text-white"
								>
									<ExternalLink class="h-4 w-4" />
								</a>
							{/if}

							{#if project.meta.githubUrl}
								<a
									href={project.meta.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center text-gray-400 transition-colors hover:text-white"
								>
									<Github class="h-4 w-4" />
								</a>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- No projects message -->
		{#if filteredProjects.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg text-gray-400">No projects found for the selected technology.</p>
			</div>
		{/if}

		<!-- Contact Section -->
		<div class="mt-16">
			<div
				class="rounded-2xl border border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-center"
			>
				<h3 class="mb-4 text-2xl font-bold text-white">Want to Work Together?</h3>
				<p class="mx-auto mb-6 max-w-2xl text-gray-300">
					I'm always open to discussing new projects and opportunities. Let's build something
					amazing together.
				</p>
				<a
					href="/contact"
					class="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					Get In Touch
				</a>
			</div>
		</div>
	</div>
</main>
