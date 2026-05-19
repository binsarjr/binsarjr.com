<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowUpRight, Search } from 'lucide-svelte';
	import { format } from 'date-fns';

	let { data }: { data: PageData } = $props();

	let query = $state('');
	let activeTag = $state<string>('all');

	const allTags = $derived(
		Array.from(new Set(data.posts.flatMap((p: any) => p.meta.tags || []))).sort()
	);

	const filtered = $derived(
		data.posts.filter((p: any) => {
			const q = query.trim().toLowerCase();
			const tagOk = activeTag === 'all' || (p.meta.tags || []).includes(activeTag);
			const qOk =
				!q ||
				p.meta.title?.toLowerCase().includes(q) ||
				p.meta.excerpt?.toLowerCase().includes(q) ||
				(p.meta.tags || []).join(' ').toLowerCase().includes(q);
			return tagOk && qOk;
		})
	);

	function fmtDate(d: string) {
		try {
			return format(new Date(d), 'MMM d, yyyy').toUpperCase();
		} catch {
			return d;
		}
	}
</script>

<svelte:head>
	<title>Journal — Binsar Dwi Jasuma</title>
	<meta
		name="description"
		content="Long-form notes, essays and tutorials on web development, infra, and the craft of building software."
	/>
</svelte:head>

<section class="relative pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Header -->
		<div class="grid grid-cols-1 gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<span class="section-no">§ Journal</span>
				<h1
					class="font-serif mt-4 text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					Notes from <span class="italic text-[var(--ember)]">the workshop</span>.
				</h1>
			</div>
			<div class="flex flex-col justify-end lg:col-span-5">
				<p class="text-lg leading-relaxed text-[var(--muted)]">
					A working log of things I've learnt, broken, and rebuilt. Mostly software, sometimes
					tangents.
				</p>
				<p class="font-mono mt-3 text-xs text-[var(--faint)]">
					{data.posts.length} ENTRIES · LAST UPDATE {data.posts[0]?.meta.publishedAt
						? fmtDate(data.posts[0].meta.publishedAt)
						: '—'}
				</p>
			</div>
		</div>

		<!-- Search + filters -->
		<div
			class="mt-8 flex flex-col gap-4 border-b border-[var(--border)] pb-8 md:flex-row md:items-center md:justify-between"
		>
			<label class="flex w-full max-w-md items-center gap-3 border-b border-[var(--border)] py-2">
				<Search class="h-4 w-4 text-[var(--faint)]" />
				<input
					type="text"
					bind:value={query}
					placeholder="Search entries…"
					class="font-mono flex-1 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--faint)] focus:outline-none"
				/>
			</label>
			<div class="flex flex-wrap gap-2">
				<button
					onclick={() => (activeTag = 'all')}
					class="tag {activeTag === 'all' ? 'tag-ember' : ''}"
				>
					All
				</button>
				{#each allTags.slice(0, 8) as tag}
					<button
						onclick={() => (activeTag = tag)}
						class="tag {activeTag === tag ? 'tag-ember' : ''}"
					>
						{tag}
					</button>
				{/each}
			</div>
		</div>

		<!-- Posts list -->
		<div class="mt-2 divide-y divide-[var(--border)]">
			{#each filtered as post}
				<a
					href="/blog/{post.slug}"
					class="group grid grid-cols-1 gap-4 py-10 transition-colors hover:bg-[rgba(255,107,53,0.02)] md:grid-cols-12 md:gap-8"
				>
					<div class="md:col-span-2">
						<span class="font-mono text-xs tracking-wider text-[var(--ember)]">
							{post.meta.publishedAt ? fmtDate(post.meta.publishedAt) : ''}
						</span>
						{#if post.meta.category}
							<p class="font-mono mt-2 text-[10px] tracking-wider text-[var(--faint)] uppercase">
								{post.meta.category}
							</p>
						{/if}
					</div>

					<div class="md:col-span-8">
						<h2
							class="font-serif text-3xl leading-tight text-[var(--text)] group-hover:text-[var(--ember)] md:text-4xl"
						>
							{post.meta.title}
						</h2>
						<p class="mt-3 max-w-2xl text-[var(--muted)]">
							{post.meta.excerpt}
						</p>
						{#if post.meta.tags?.length}
							<div class="mt-4 flex flex-wrap gap-1.5">
								{#each post.meta.tags.slice(0, 4) as tag}
									<span class="tag text-[10px]">{tag}</span>
								{/each}
							</div>
						{/if}
					</div>

					<div class="flex items-end justify-end md:col-span-2">
						<ArrowUpRight
							class="h-5 w-5 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
						/>
					</div>
				</a>
			{/each}

			{#if filtered.length === 0}
				<div class="py-20 text-center">
					<p class="font-serif text-2xl italic text-[var(--muted)]">No entries match that filter.</p>
				</div>
			{/if}
		</div>
	</div>
</section>
