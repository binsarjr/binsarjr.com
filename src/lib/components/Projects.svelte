<!-- Projects.svelte -->
<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	import { onMount } from 'svelte';

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

<section id="projects" class="bg-black py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				My <span class="text-yellow-400">Projects</span>
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				Here are some of my recent projects that showcase my skills and expertise
			</p>
		</div>

		<!-- Category Filter -->
		<div class="mb-12">
			<div class="flex flex-wrap justify-center gap-3">
				{#each categories as category}
					<button
						onclick={() => (selectedCategory = category)}
						class="rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors {selectedCategory ===
						category
							? 'bg-yellow-400 text-black'
							: 'border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700'}"
					>
						{category === 'all' ? 'All Projects' : category}
					</button>
				{/each}
			</div>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each displayedProjects as project}
				<div
					class="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-yellow-400/50"
				>
					<!-- Project Image -->
					<div class="relative h-48 overflow-hidden bg-gray-800">
						{#if project.meta.image}
							<img
								src={project.meta.image}
								alt={project.meta.title}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						{:else}
							<div
								class="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-400/20 to-gray-800"
							>
								<span class="text-lg font-semibold text-gray-400">{project.meta.title}</span>
							</div>
						{/if}
						{#if project.meta.featured}
							<div class="absolute top-4 left-4">
								<span class="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
									Featured
								</span>
							</div>
						{/if}
					</div>

					<!-- Project Content -->
					<div class="p-6">
						<h3
							class="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-yellow-400"
						>
							{project.meta.title}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-300">
							{project.meta.description}
						</p>

						<!-- Technologies -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each project.meta.technologies as tech}
								<span
									class="rounded border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-yellow-400"
								>
									{tech}
								</span>
							{/each}
						</div>

						<!-- Project Links -->
						<div class="flex space-x-4">
							<a
								href={project.meta.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center text-gray-400 transition-colors hover:text-yellow-400"
							>
								<Github class="mr-2 h-4 w-4" />
								<span class="text-sm">Code</span>
							</a>
							<a
								href={project.meta.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center text-gray-400 transition-colors hover:text-yellow-400"
							>
								<ExternalLink class="mr-2 h-4 w-4" />
								<span class="text-sm">Live Demo</span>
							</a>
						</div>
					</div>
				</div>
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
