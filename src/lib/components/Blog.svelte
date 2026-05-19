<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight } from 'lucide-svelte';
	import { format } from 'date-fns';

	interface BlogPost {
		slug: string;
		meta: {
			title: string;
			excerpt: string;
			publishedAt: string;
			tags: string[];
			featured?: boolean;
			category: string;
		};
	}

	let posts: BlogPost[] = $state([]);
	let displayed = $derived(posts.slice(0, 3));

	onMount(async () => {
		const modules = import.meta.glob('/src/content/blog/*.md');
		const list: BlogPost[] = [];
		for (const path in modules) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				const meta = (mod as any).metadata;
				if (meta?.title) list.push({ slug, meta });
			}
		}
		list.sort((a, b) => {
			const ad = a.meta.publishedAt ? new Date(a.meta.publishedAt).getTime() : 0;
			const bd = b.meta.publishedAt ? new Date(b.meta.publishedAt).getTime() : 0;
			return bd - ad;
		});
		posts = list;
	});

	function fmtDate(d: string) {
		try {
			return format(new Date(d), 'MMM d, yyyy').toUpperCase();
		} catch {
			return d;
		}
	}
</script>

<section id="blog" class="relative scroll-mt-20 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Section header -->
		<div
			class="flex flex-col gap-6 border-b border-[var(--border)] pb-10 md:flex-row md:items-end md:justify-between"
		>
			<div>
				<span class="section-no">§ 04 / Journal</span>
				<h2
					class="font-serif mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					Notes &amp; <span class="italic text-[var(--ember)]">essays</span>.
				</h2>
			</div>
			<a href="/blog" class="link-arrow">
				<span>All entries</span>
				<ArrowUpRight class="h-3.5 w-3.5" />
			</a>
		</div>

		<!-- Posts -->
		<div class="grid grid-cols-1 md:grid-cols-3">
			{#each displayed as post, i}
				<a
					href="/blog/{post.slug}"
					class="group flex flex-col gap-5 border-b border-[var(--border)] p-8 transition-colors hover:bg-[rgba(255,107,53,0.025)] md:border-r"
					class:md:border-r-0={i === displayed.length - 1}
				>
					<div class="flex items-center justify-between">
						<span class="font-mono text-[10px] tracking-wider text-[var(--ember)] uppercase">
							{post.meta.category || 'Essay'}
						</span>
						<span class="font-mono text-[10px] tracking-wider text-[var(--faint)]">
							{post.meta.publishedAt ? fmtDate(post.meta.publishedAt) : ''}
						</span>
					</div>

					<h3
						class="font-serif text-2xl leading-tight text-[var(--text)] group-hover:text-[var(--ember)]"
					>
						{post.meta.title}
					</h3>

					<p class="line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
						{post.meta.excerpt}
					</p>

					<div class="mt-auto flex items-center justify-between border-t border-[var(--border-soft)] pt-4">
						<div class="flex flex-wrap gap-1.5">
							{#each (post.meta.tags || []).slice(0, 2) as tag}
								<span class="tag text-[10px]">{tag}</span>
							{/each}
						</div>
						<ArrowUpRight
							class="h-4 w-4 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
						/>
					</div>
				</a>
			{/each}

			{#if posts.length === 0}
				{#each [1, 2, 3] as _}
					<div class="h-80 animate-pulse border-b border-r border-[var(--border)] bg-[var(--surface)]"></div>
				{/each}
			{/if}
		</div>
	</div>
</section>
