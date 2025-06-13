<!-- Projects.svelte -->
<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	import { projects } from '$lib/data/projects';

	let showAll = $state(false);
	let selectedCategory = $state('all');

	// Get unique categories
	const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];

	// Filter projects
	let filteredProjects = $derived(
		selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory)
	);

	let displayedProjects = $derived(showAll ? filteredProjects : filteredProjects.slice(0, 6));
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
						<div
							class="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-400/20 to-gray-800"
						>
							<span class="text-lg font-semibold text-gray-400">{project.title}</span>
						</div>
						{#if project.featured}
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
							{project.title}
						</h3>
						<p class="mb-4 text-sm leading-relaxed text-gray-300">
							{project.description}
						</p>

						<!-- Technologies -->
						<div class="mb-6 flex flex-wrap gap-2">
							{#each project.technologies as tech}
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
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center text-gray-400 transition-colors hover:text-yellow-400"
							>
								<Github class="mr-2 h-4 w-4" />
								<span class="text-sm">Code</span>
							</a>
							<a
								href={project.liveUrl}
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

		<!-- Show More Button -->
		{#if !showAll && projects.length > 4}
			<div class="mt-12 text-center">
				<button
					onclick={() => (showAll = true)}
					class="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					View All Projects
				</button>
			</div>
		{/if}
	</div>
</section>
