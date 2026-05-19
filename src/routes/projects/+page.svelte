<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowUpRight, Github, ExternalLink } from 'lucide-svelte';
	import { format } from 'date-fns';

	let { data }: { data: PageData } = $props();

	let activeCategory = $state<string>('all');

	const categories = $derived([
		'all',
		...Array.from(new Set(data.projects.map((p: any) => p.meta.category).filter(Boolean)))
	]);

	const filtered = $derived(
		activeCategory === 'all'
			? data.projects
			: data.projects.filter((p: any) => p.meta.category === activeCategory)
	);

	function fmtDate(d?: string) {
		if (!d) return '';
		try {
			return format(new Date(d), 'yyyy · MMM').toUpperCase();
		} catch {
			return d;
		}
	}
</script>

<svelte:head>
	<title>Selected Work — Binsar Dwi Jasuma</title>
	<meta
		name="description"
		content="An ongoing archive of full-stack projects, automation, and tooling built by Binsar Dwi Jasuma."
	/>
</svelte:head>

<section class="relative pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Header -->
		<div class="grid grid-cols-1 gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<span class="section-no">§ Archive</span>
				<h1
					class="font-serif mt-4 text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					Things I've <span class="italic text-[var(--ember)]">shipped</span>.
				</h1>
			</div>
			<div class="flex flex-col justify-end lg:col-span-5">
				<p class="text-lg leading-relaxed text-[var(--muted)]">
					A selection of production work and side experiments — full-stack apps, APIs,
					automation, and a handful of curiosities.
				</p>
				<p class="font-mono mt-3 text-xs text-[var(--faint)]">
					{data.projects.length} PROJECTS · INDEXED CHRONOLOGICALLY
				</p>
			</div>
		</div>

		<!-- Category filter -->
		<div class="mt-8 flex flex-wrap items-center gap-2 border-b border-[var(--border)] pb-8">
			{#each categories as cat}
				<button
					onclick={() => (activeCategory = cat as string)}
					class="tag {activeCategory === cat ? 'tag-ember' : ''}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Projects table -->
		<div class="mt-2 divide-y divide-[var(--border)] border-b border-[var(--border)]">
			<!-- Header row -->
			<div
				class="hidden grid-cols-12 gap-4 py-3 md:grid"
			>
				<span class="kicker col-span-1">No.</span>
				<span class="kicker col-span-4">Title</span>
				<span class="kicker col-span-4">Stack</span>
				<span class="kicker col-span-2">Year</span>
				<span class="kicker col-span-1 text-right">↗</span>
			</div>

			{#each filtered as project, i}
				<a
					href="/projects/{project.slug}"
					class="group grid grid-cols-12 items-baseline gap-4 py-6 transition-colors hover:bg-[rgba(255,107,53,0.025)] md:py-8"
				>
					<div class="col-span-2 md:col-span-1">
						<span class="font-mono text-xs text-[var(--faint)] group-hover:text-[var(--ember)]"
							>{String(i + 1).padStart(2, '0')}</span
						>
					</div>

					<div class="col-span-10 md:col-span-4">
						<h2
							class="font-serif text-2xl leading-tight text-[var(--text)] group-hover:text-[var(--ember)] md:text-3xl"
						>
							{project.meta.title}
							{#if project.meta.featured}
								<span class="ml-2 align-middle text-[var(--ember)]">·</span>
							{/if}
						</h2>
						<p class="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
							{project.meta.description}
						</p>
						<div class="mt-3 flex items-center gap-3 text-[var(--faint)] md:hidden">
							{#if project.meta.githubUrl}
								<Github class="h-4 w-4" />
							{/if}
							{#if project.meta.liveUrl}
								<ExternalLink class="h-4 w-4" />
							{/if}
						</div>
					</div>

					<div class="hidden md:col-span-4 md:block">
						<div class="flex flex-wrap gap-1.5">
							{#each (project.meta.technologies || []).slice(0, 5) as tech}
								<span class="tag text-[10px]">{tech}</span>
							{/each}
						</div>
					</div>

					<div class="hidden md:col-span-2 md:block">
						<span class="font-mono text-xs text-[var(--faint)]"
							>{fmtDate(project.meta.completedAt)}</span
						>
					</div>

					<div class="col-span-12 flex justify-end md:col-span-1">
						<ArrowUpRight
							class="h-4 w-4 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
						/>
					</div>
				</a>
			{/each}

			{#if filtered.length === 0}
				<div class="py-20 text-center">
					<p class="font-serif text-2xl italic text-[var(--muted)]">Nothing in that category yet.</p>
				</div>
			{/if}
		</div>
	</div>
</section>
