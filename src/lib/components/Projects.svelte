<!-- Projects.svelte -->
<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fadeUp, fadeLeft, fadeRight } from '$lib/animations';

	interface Project {
		slug: string;
		meta: {
			title: string;
			description: string;
			image: string;
			technologies: string[];
			githubUrl: string;
			liveUrl: string;
			category: string;
			featured?: boolean;
			completedAt: string;
		};
	}

	let projects: Project[] = $state([]);
	let showAll = $state(false);
	let selectedCategory = $state('all');

	// Get unique categories
	let categories = $derived(['all', ...Array.from(new Set(projects.map((p) => p.meta.category)))]);

	// Filter projects
	let filteredProjects = $derived(
		selectedCategory === 'all'
			? projects
			: projects.filter((p) => p.meta.category === selectedCategory)
	);

	let displayedProjects = $derived(showAll ? filteredProjects : filteredProjects.slice(0, 6));

	onMount(async () => {
		try {
			// Get all markdown files in the projects directory
			const modules = import.meta.glob('/src/content/projects/*.md');
			const projectsList = [];

			for (const path in modules) {
				const mod = await modules[path]();
				const slug = path.split('/').pop()?.replace('.md', '') || '';

				if (mod && typeof mod === 'object' && 'metadata' in mod) {
					projectsList.push({
						slug,
						meta: (mod as any).metadata
					});
				}
			}

			// Sort projects by completedAt date (newest first)
			projectsList.sort((a, b) => {
				if (a.meta.completedAt && b.meta.completedAt) {
					return new Date(b.meta.completedAt).getTime() - new Date(a.meta.completedAt).getTime();
				}
				return 0;
			});

			projects = projectsList;
		} catch (error) {
			console.error('Error loading projects:', error);
		}
	});
</script>

<section id="projects" class="relative overflow-hidden py-20">
	<!-- Background decorations -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
	></div>
	<div
		class="absolute top-0 right-0 h-80 w-80 rounded-full bg-gradient-to-r from-purple-400/5 to-pink-400/5 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gradient-to-r from-emerald-400/5 to-teal-400/5 blur-3xl"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center" use:fadeUp>
			<h2 class="mb-6 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 200 }}>
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Projects</span
				>
			</h2>
			<p
				class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300"
				use:fadeUp={{ delay: 400 }}
			>
				Here are some of my recent projects that showcase my skills and expertise
			</p>
		</div>

		<!-- Enhanced Category Filter -->
		<div class="mb-12" use:fadeUp={{ delay: 600 }}>
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<button
						onclick={() => (selectedCategory = category)}
						class="group relative rounded-full border px-6 py-3 text-sm font-medium capitalize backdrop-blur-sm transition-all duration-300 {selectedCategory ===
						category
							? 'border-yellow-400/50 bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/25'
							: 'border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white'}"
					>
						{category === 'all' ? 'All Projects' : category}
						{#if selectedCategory === category}
							<div
								class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-50"
							></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each displayedProjects as project, index}
				{#key project.slug}
					<div
						class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-400/10"
						use:fadeUp={{ delay: 800 + index * 100 }}
					>
						<!-- Project Image with enhanced overlay -->
						<div class="relative h-52 overflow-hidden">
							{#if project.meta.image}
								<img
									src={project.meta.image}
									alt={project.meta.title}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<!-- Gradient overlay -->
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
							{:else}
								<div
									class="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-purple-400/20"
								>
									<span class="text-lg font-semibold text-gray-200">{project.meta.title}</span>
								</div>
							{/if}

							{#if project.meta.featured}
								<div class="absolute top-4 left-4">
									<span
										class="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-xs font-semibold text-black shadow-lg"
									>
										✨ Featured
									</span>
								</div>
							{/if}

							<!-- Floating action buttons on hover -->
							<div
								class="absolute top-4 right-4 space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<a
									href={project.meta.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="block rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
								>
									<Github class="h-4 w-4" />
								</a>
								<a
									href={project.meta.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="block rounded-full border border-white/20 bg-black/50 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
								>
									<ExternalLink class="h-4 w-4" />
								</a>
							</div>
						</div>

						<!-- Enhanced Project Content -->
						<div class="p-8">
							<h3
								class="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent transition-all duration-300 group-hover:from-yellow-400 group-hover:to-orange-400"
							>
								{project.meta.title}
							</h3>
							<p class="mb-6 text-sm leading-relaxed text-gray-300">
								{project.meta.description}
							</p>

							<!-- Enhanced Technologies -->
							<div class="mb-6 flex flex-wrap gap-2">
								{#each project.meta.technologies as tech}
									<span
										class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
									>
										{tech}
									</span>
								{/each}
							</div>

							<!-- Enhanced Project Links -->
							<div class="flex space-x-4">
								<a
									href={project.meta.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
								>
									<Github class="mr-2 h-4 w-4" />
									<span class="text-sm font-medium">Code</span>
								</a>
								<a
									href={project.meta.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center text-gray-400 transition-all duration-300 hover:scale-105 hover:text-blue-400"
								>
									<ExternalLink class="mr-2 h-4 w-4" />
									<span class="text-sm font-medium">Live Demo</span>
								</a>
							</div>
						</div>

						<!-- Decorative elements -->
						<div
							class="absolute right-4 bottom-4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/30"
						></div>
						<div
							class="absolute top-1/2 left-0 h-8 w-px bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
						></div>
					</div>
				{/key}
			{/each}
		</div>

		<!-- Loading State -->
		{#if projects.length === 0}
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(6) as _}
					<div class="animate-pulse">
						<div class="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
							<div class="h-48 bg-gray-700"></div>
							<div class="p-6">
								<div class="mb-3 h-6 w-3/4 rounded bg-gray-700"></div>
								<div class="mb-4 space-y-2">
									<div class="h-4 w-full rounded bg-gray-700"></div>
									<div class="h-4 w-5/6 rounded bg-gray-700"></div>
								</div>
								<div class="mb-6 flex gap-2">
									<div class="h-6 w-16 rounded bg-gray-700"></div>
									<div class="h-6 w-20 rounded bg-gray-700"></div>
									<div class="h-6 w-14 rounded bg-gray-700"></div>
								</div>
								<div class="flex gap-4">
									<div class="h-5 w-12 rounded bg-gray-700"></div>
									<div class="h-5 w-16 rounded bg-gray-700"></div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- Show More Button -->
		{#if !showAll && projects.length > 4}
			<div class="mt-12 text-center">
				<button
					onclick={() => (showAll = true)}
					class="mr-4 rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					Show More
				</button>
				<a
					href="/projects"
					class="inline-block rounded-lg border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black"
				>
					View All Projects
				</a>
			</div>
		{:else if showAll}
			<div class="mt-12 text-center">
				<a
					href="/projects"
					class="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					View All Projects
				</a>
			</div>
		{/if}
	</div>
</section>
