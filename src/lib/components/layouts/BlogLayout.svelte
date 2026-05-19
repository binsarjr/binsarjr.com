<script lang="ts">
	import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';
	import { format } from 'date-fns';
	import { AUTHOR } from '$lib/constants';

	interface Author {
		name?: string;
		avatar?: string;
		bio?: string;
	}

	let {
		title = '',
		excerpt = '',
		publishedAt = '',
		updatedAt = '',
		readingTime = '',
		tags = [],
		category = '',
		author = {},
		children
	}: {
		title?: string;
		excerpt?: string;
		publishedAt?: string;
		updatedAt?: string;
		readingTime?: string | number;
		tags?: string[];
		category?: string;
		author?: Author;
		children?: any;
	} = $props();

	function fmtDate(d: string) {
		try {
			return format(new Date(d), 'MMMM d, yyyy');
		} catch {
			return d;
		}
	}
</script>

<svelte:head>
	<title>{title} — Journal · Binsar Dwi Jasuma</title>
	{#if excerpt}
		<meta name="description" content={excerpt} />
	{/if}
</svelte:head>

<article class="relative pt-32 pb-24">
	<div class="mx-auto max-w-3xl px-5 sm:px-8">
		<!-- Back link -->
		<a
			href="/blog"
			class="inline-flex items-center gap-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--ember)]"
		>
			<ArrowLeft class="h-3.5 w-3.5" />
			<span class="font-mono text-xs tracking-wider uppercase">Back to journal</span>
		</a>

		<!-- Header -->
		<header class="mt-10">
			<div class="flex flex-wrap items-center gap-3 text-xs">
				{#if category}
					<span class="tag tag-ember">{category}</span>
				{/if}
				{#if publishedAt}
					<span class="font-mono text-[var(--faint)]">{fmtDate(publishedAt)}</span>
				{/if}
				{#if readingTime}
					<span class="text-[var(--border)]">/</span>
					<span class="font-mono text-[var(--faint)]"
						>{typeof readingTime === 'number' ? `${readingTime} min` : readingTime} read</span
					>
				{/if}
			</div>

			<h1
				class="font-serif mt-6 text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-[var(--text)]"
			>
				{title}
			</h1>

			{#if excerpt}
				<p class="font-serif mt-6 text-xl leading-relaxed text-[var(--muted)] italic">
					{excerpt}
				</p>
			{/if}

			<!-- Byline -->
			<div class="mt-10 flex items-center gap-3 border-t border-b border-[var(--border)] py-5">
				<img
					src={author?.avatar || AUTHOR.avatar}
					alt={author?.name || AUTHOR.fullName}
					class="h-10 w-10 rounded-full border border-[var(--border)] object-cover"
				/>
				<div>
					<p class="text-sm text-[var(--text)]">{author?.name || AUTHOR.fullName}</p>
					<p class="font-mono text-[10px] tracking-wider text-[var(--faint)] uppercase">
						{author?.bio || 'Full Stack Engineer'}
					</p>
				</div>
				{#if updatedAt && updatedAt !== publishedAt}
					<p class="font-mono ml-auto text-[10px] tracking-wider text-[var(--faint)] uppercase">
						Updated · {fmtDate(updatedAt)}
					</p>
				{/if}
			</div>
		</header>

		<!-- Content -->
		<div class="prose-editorial mt-12">
			{@render children?.()}
		</div>

		<!-- Footer -->
		<footer class="mt-20 border-t border-[var(--border)] pt-10">
			{#if tags?.length}
				<div class="flex flex-wrap gap-2">
					{#each tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}

			<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<a href="/blog" class="link-arrow">
					<ArrowLeft class="h-3.5 w-3.5" />
					<span>All entries</span>
				</a>
				<a href="/#contact" class="link-arrow">
					<span>Get in touch</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</footer>
	</div>
</article>
