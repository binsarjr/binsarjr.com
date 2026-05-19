<script lang="ts">
	import { ArrowLeft, ArrowUpRight, Check } from 'lucide-svelte';

	let {
		title = '',
		excerpt = '',
		category = '',
		features = [],
		technologies = [],
		pricing = { starting: '', description: '' },
		duration = '',
		deliverables = [],
		children
	}: {
		title?: string;
		excerpt?: string;
		category?: string;
		features?: string[];
		technologies?: string[];
		pricing?: { starting: string; description: string };
		duration?: string;
		deliverables?: string[];
		children?: any;
	} = $props();
</script>

<svelte:head>
	<title>{title} — Services · Binsar Dwi Jasuma</title>
	{#if excerpt}
		<meta name="description" content={excerpt} />
	{/if}
</svelte:head>

<article class="relative pt-32 pb-24">
	<div class="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
		<a
			href="/services"
			class="inline-flex items-center gap-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--ember)]"
		>
			<ArrowLeft class="h-3.5 w-3.5" />
			<span class="font-mono text-xs tracking-wider uppercase">All services</span>
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
				{#if excerpt}
					<p class="font-serif mt-6 max-w-2xl text-xl leading-relaxed text-[var(--muted)] italic">
						{excerpt}
					</p>
				{/if}

				<div class="mt-8">
					<a
						href="/#contact"
						class="group inline-flex items-center gap-3 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-5 py-3 text-sm text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]"
					>
						<span class="font-mono tracking-wider uppercase">Start a conversation</span>
						<ArrowUpRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>
			</div>

			<!-- Meta sidebar -->
			<aside class="lg:col-span-4">
				<div class="space-y-6 border border-[var(--border)] bg-[var(--surface)] p-6">
					{#if pricing?.starting}
						<div>
							<span class="kicker block">Starting from</span>
							<p class="font-serif mt-1 text-3xl text-[var(--ember)]">{pricing.starting}</p>
							{#if pricing.description}
								<p class="mt-1 text-xs text-[var(--muted)]">{pricing.description}</p>
							{/if}
						</div>
					{/if}
					{#if duration}
						<div class="border-t border-[var(--border)] pt-4">
							<span class="kicker block">Typical duration</span>
							<p class="font-mono mt-2 text-sm text-[var(--text)]">{duration}</p>
						</div>
					{/if}
					{#if technologies?.length}
						<div class="border-t border-[var(--border)] pt-4">
							<span class="kicker block">Stack</span>
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

		<!-- Features + Deliverables -->
		{#if features.length || deliverables.length}
			<div class="mt-20 grid grid-cols-1 gap-12 border-t border-[var(--border)] pt-12 md:grid-cols-2">
				{#if features.length}
					<div>
						<span class="section-no block">§ Features</span>
						<ul class="mt-6 space-y-3">
							{#each features as feature}
								<li class="flex items-start gap-3">
									<Check class="mt-1 h-4 w-4 shrink-0 text-[var(--ember)]" />
									<span class="text-[var(--text)]">{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if deliverables.length}
					<div>
						<span class="section-no block">§ Deliverables</span>
						<ul class="mt-6 space-y-3">
							{#each deliverables as item}
								<li class="flex items-start gap-3">
									<span class="font-mono mt-1 text-xs text-[var(--ember)]">→</span>
									<span class="text-[var(--text)]">{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/if}

		<!-- Body -->
		<div class="mt-20 grid grid-cols-1 lg:grid-cols-12">
			<div class="lg:col-span-8 lg:col-start-3">
				<div class="prose-editorial">
					{@render children?.()}
				</div>
			</div>
		</div>

		<!-- Footer -->
		<footer class="mt-20 border-t border-[var(--border)] pt-10">
			<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<a href="/services" class="link-arrow">
					<ArrowLeft class="h-3.5 w-3.5" />
					<span>All services</span>
				</a>
				<a href="/#contact" class="link-arrow">
					<span>Discuss this project</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</footer>
	</div>
</article>
