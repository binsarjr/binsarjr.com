<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight } from 'lucide-svelte';
	import { format } from 'date-fns';

	interface Project {
		slug: string;
		meta: {
			title: string;
			description: string;
			technologies: string[];
			githubUrl?: string;
			liveUrl?: string;
			category: string;
			featured?: boolean;
			completedAt?: string;
		};
	}

	let projects: Project[] = $state([]);
	let displayed = $derived(projects.slice(0, 6));

	onMount(async () => {
		const modules = import.meta.glob('/src/content/projects/*.md');
		const list: Project[] = [];
		for (const path in modules) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				const meta = (mod as any).metadata;
				if (meta?.title) list.push({ slug, meta });
			}
		}
		list.sort((a, b) => {
			const ad = a.meta.completedAt ? new Date(a.meta.completedAt).getTime() : 0;
			const bd = b.meta.completedAt ? new Date(b.meta.completedAt).getTime() : 0;
			return bd - ad;
		});
		projects = list;
	});

	function fmtDate(d?: string) {
		if (!d) return '';
		try {
			return format(new Date(d), 'yyyy.MM');
		} catch {
			return d;
		}
	}
</script>

<section id="projects" class="relative scroll-mt-20 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Section header -->
		<div
			class="flex flex-col gap-6 border-b border-[var(--border)] pb-10 md:flex-row md:items-end md:justify-between"
		>
			<div>
				<span class="section-no">§ 02 / Selected work</span>
				<h2
					class="font-serif mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					Projects, in <span class="italic text-[var(--ember)]">order</span> of recency.
				</h2>
			</div>
			<a href="/projects" class="link-arrow">
				<span>Full archive</span>
				<ArrowUpRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<!-- Project index -->
		<div class="mt-4 divide-y divide-[var(--border)] border-b border-[var(--border)]">
			{#each displayed as project, i}
				<a
					href="/projects/{project.slug}"
					class="group grid grid-cols-12 items-baseline gap-4 py-6 transition-colors hover:bg-[rgba(255,107,53,0.025)] md:gap-6 md:py-8"
				>
					<!-- Number -->
					<div class="col-span-2 md:col-span-1">
						<span class="font-mono text-xs text-[var(--faint)] group-hover:text-[var(--ember)]"
							>{String(i + 1).padStart(2, '0')}</span
						>
					</div>

					<!-- Title + category -->
					<div class="col-span-10 md:col-span-5">
						<h3
							class="font-serif text-2xl leading-tight text-[var(--text)] transition-colors group-hover:text-[var(--ember)] md:text-3xl"
						>
							{project.meta.title}
							{#if project.meta.featured}
								<span class="ml-2 align-middle text-[var(--ember)]">·</span>
							{/if}
						</h3>
						<p class="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--muted)] md:hidden">
							{project.meta.description}
						</p>
					</div>

					<!-- Tech -->
					<div class="col-span-8 hidden md:col-span-4 md:block">
						<div class="flex flex-wrap gap-1.5">
							{#each project.meta.technologies.slice(0, 4) as tech}
								<span class="tag text-[10px]">{tech}</span>
							{/each}
						</div>
					</div>

					<!-- Date + arrow -->
					<div class="col-span-12 flex items-center justify-between md:col-span-2 md:justify-end">
						<span class="font-mono text-xs text-[var(--faint)]">
							{fmtDate(project.meta.completedAt)}
						</span>
						<ArrowUpRight
							class="ml-3 h-4 w-4 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
						/>
					</div>
				</a>
			{/each}

			{#if projects.length === 0}
				{#each [1, 2, 3] as _}
					<div class="grid grid-cols-12 items-baseline gap-4 py-8">
						<div class="col-span-1">
							<span class="font-mono text-xs text-[var(--faint)]">—</span>
						</div>
						<div class="col-span-11 h-7 max-w-md animate-pulse bg-[var(--surface)]"></div>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>
