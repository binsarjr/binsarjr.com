<script lang="ts">
	import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from 'lucide-svelte';
	import { format } from 'date-fns';

	let {
		title = '',
		description = '',
		image = '',
		technologies = [],
		githubUrl = '',
		liveUrl = '',
		category = '',
		completedAt = '',
		children
	}: {
		title?: string;
		description?: string;
		image?: string;
		technologies?: string[];
		githubUrl?: string;
		liveUrl?: string;
		category?: string;
		completedAt?: string;
		children?: any;
	} = $props();

	function fmtDate(d: string) {
		try {
			return format(new Date(d), 'MMMM yyyy');
		} catch {
			return d;
		}
	}
</script>

<svelte:head>
	<title>{title} — Work · Binsar Dwi Jasuma</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<article class="relative pt-32 pb-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
		<!-- Back link -->
		<a
			href="/projects"
			class="inline-flex items-center gap-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--ember)]"
		>
			<ArrowLeft class="h-3.5 w-3.5" />
			<span class="font-mono text-xs tracking-wider uppercase">Back to archive</span>
		</a>

		<!-- Hero -->
		<header class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
			<div class="lg:col-span-8">
				{#if category}
					<span class="tag tag-ember">{category}</span>
				{/if}
				<h1
					class="font-serif mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight text-[var(--text)]"
				>
					{title}
				</h1>
				{#if description}
					<p class="font-serif mt-6 max-w-2xl text-xl leading-relaxed text-[var(--muted)] italic">
						{description}
					</p>
				{/if}

				<div class="mt-8 flex flex-wrap items-center gap-3">
					{#if githubUrl}
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener"
							class="group inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]"
						>
							<Github class="h-4 w-4" />
							<span class="font-mono text-xs tracking-wider uppercase">Source</span>
						</a>
					{/if}
					{#if liveUrl}
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener"
							class="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-4 py-2 text-sm text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]"
						>
							<ExternalLink class="h-4 w-4" />
							<span class="font-mono text-xs tracking-wider uppercase">View live</span>
						</a>
					{/if}
				</div>
			</div>

			<!-- Meta sidebar -->
			<aside class="lg:col-span-4">
				<div class="space-y-6 border-l border-[var(--border)] pl-6">
					{#if completedAt}
						<div>
							<span class="kicker block">Completed</span>
							<p class="font-mono mt-2 text-sm text-[var(--text)]">{fmtDate(completedAt)}</p>
						</div>
					{/if}
					{#if category}
						<div>
							<span class="kicker block">Category</span>
							<p class="font-mono mt-2 text-sm text-[var(--text)]">{category}</p>
						</div>
					{/if}
					{#if technologies?.length}
						<div>
							<span class="kicker block">Built with</span>
							<div class="mt-2 flex flex-wrap gap-1.5">
								{#each technologies as tech}
									<span class="tag text-[10px]">{tech}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</aside>
		</header>

		<!-- Image -->
		{#if image && image !== '/project1.jpg'}
			<figure class="mt-16 border border-[var(--border)]">
				<img src={image} alt={title} class="w-full" />
			</figure>
		{/if}

		<!-- Body -->
		<div class="mt-16 grid grid-cols-1 lg:grid-cols-12">
			<div class="lg:col-span-8 lg:col-start-3">
				<div class="prose-editorial">
					{@render children?.()}
				</div>
			</div>
		</div>

		<!-- Footer -->
		<footer class="mt-20 border-t border-[var(--border)] pt-10">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<a href="/projects" class="link-arrow">
					<ArrowLeft class="h-3.5 w-3.5" />
					<span>All projects</span>
				</a>
				<a href="/#contact" class="link-arrow">
					<span>Start a project</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</footer>
	</div>
</article>
