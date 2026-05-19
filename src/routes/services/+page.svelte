<script lang="ts">
	import type { PageData } from './$types';
	import { ArrowUpRight } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Services — Binsar Dwi Jasuma</title>
	<meta
		name="description"
		content="Engagements I take on: full-stack web, automation, custom systems, and small-team mentorship."
	/>
</svelte:head>

<section class="relative pt-32 pb-24">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Header -->
		<div class="grid grid-cols-1 gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<span class="section-no">§ Services</span>
				<h1
					class="font-serif mt-4 text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					Ways we can <span class="italic text-[var(--ember)]">collaborate</span>.
				</h1>
			</div>
			<div class="flex flex-col justify-end lg:col-span-5">
				<p class="text-lg leading-relaxed text-[var(--muted)]">
					Each engagement begins with a short discovery conversation — free, no pressure.
					I'll help you decide whether I'm the right person to ship it.
				</p>
			</div>
		</div>

		<!-- Services as numbered chapters -->
		<div class="mt-2 divide-y divide-[var(--border)]">
			{#each data.services as service, i}
				<a
					href="/services/{service.slug}"
					class="group grid grid-cols-1 gap-6 py-14 transition-colors hover:bg-[rgba(255,107,53,0.02)] md:grid-cols-12 md:gap-10"
				>
					<!-- Number + meta -->
					<div class="md:col-span-3">
						<span class="font-mono text-xs text-[var(--ember)]"
							>CHAPTER {String(i + 1).padStart(2, '0')}</span
						>
						{#if service.meta.duration}
							<p class="font-mono mt-3 text-xs text-[var(--faint)]">
								Duration · <span class="text-[var(--muted)]">{service.meta.duration}</span>
							</p>
						{/if}
						{#if service.meta.pricing?.starting}
							<p class="font-mono mt-1 text-xs text-[var(--faint)]">
								From · <span class="text-[var(--muted)]">{service.meta.pricing.starting}</span>
							</p>
						{/if}
					</div>

					<!-- Title + description -->
					<div class="md:col-span-7">
						<h2
							class="font-serif text-3xl leading-tight text-[var(--text)] group-hover:text-[var(--ember)] md:text-5xl"
						>
							{service.meta.title}
						</h2>
						<p class="mt-4 max-w-2xl text-[var(--muted)]">
							{service.meta.excerpt || ''}
						</p>

						{#if service.meta.features?.length}
							<ul class="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2">
								{#each service.meta.features.slice(0, 4) as feature}
									<li class="flex items-baseline gap-2 text-sm text-[var(--muted)]">
										<span class="text-[var(--ember)]">—</span>
										<span>{feature}</span>
									</li>
								{/each}
							</ul>
						{/if}

						{#if service.meta.technologies?.length}
							<div class="mt-5 flex flex-wrap gap-1.5">
								{#each service.meta.technologies.slice(0, 6) as tech}
									<span class="tag text-[10px]">{tech}</span>
								{/each}
							</div>
						{/if}
					</div>

					<div class="flex items-start justify-end md:col-span-2">
						<ArrowUpRight
							class="h-5 w-5 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
						/>
					</div>
				</a>
			{/each}

			{#if data.services.length === 0}
				<div class="py-20 text-center">
					<p class="font-serif text-2xl italic text-[var(--muted)]">No services listed.</p>
				</div>
			{/if}
		</div>

		<!-- CTA -->
		<div
			class="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[var(--border)] pt-12 md:flex-row md:items-center"
		>
			<div>
				<span class="kicker block">— Bespoke work</span>
				<p class="font-serif mt-3 text-3xl italic text-[var(--text)]">
					Something not on this list?
				</p>
			</div>
			<a href="/#contact" class="link-arrow">
				<span>Tell me about it</span>
				<ArrowUpRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>
