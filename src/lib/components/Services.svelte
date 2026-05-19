<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowUpRight } from 'lucide-svelte';
	import type { ServiceMeta } from '$lib/content';

	interface ServiceItem {
		slug: string;
		meta: ServiceMeta;
	}

	let services: ServiceItem[] = $state([]);

	onMount(async () => {
		const modules = import.meta.glob('/src/content/services/*.md');
		const list: ServiceItem[] = [];
		for (const path in modules) {
			const mod = await modules[path]();
			const slug = path.split('/').pop()?.replace('.md', '') || '';
			if (mod && typeof mod === 'object' && 'metadata' in mod) {
				const meta = (mod as any).metadata;
				// Skip stubs missing the minimum frontmatter
				if (meta?.title) list.push({ slug, meta });
			}
		}
		services = list;
	});
</script>

<section id="services" class="relative scroll-mt-20 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Section header -->
		<div class="grid grid-cols-1 gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12">
			<div class="lg:col-span-5">
				<span class="section-no">§ 03 / Services</span>
				<h2
					class="font-serif mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					How I can <span class="italic text-[var(--ember)]">help.</span>
				</h2>
			</div>
			<div class="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
				<p class="text-lg leading-relaxed text-[var(--muted)]">
					A short list of engagements I take on. Each project starts with a free discovery
					conversation — we decide the right scope together before any contract is signed.
				</p>
			</div>
		</div>

		<!-- Service grid -->
		<div class="mt-4 grid grid-cols-1 md:grid-cols-2">
			{#each services as service, i}
				<a
					href="/services/{service.slug}"
					class="group relative flex flex-col gap-4 border-b border-[var(--border)] p-8 transition-colors hover:bg-[rgba(255,107,53,0.025)] md:border-r"
					class:md:border-r-0={i % 2 === 1}
				>
					<div class="flex items-center justify-between">
						<span class="font-mono text-xs text-[var(--ember)]"
							>{String(i + 1).padStart(2, '0')}</span
						>
						<ArrowUpRight
							class="h-4 w-4 text-[var(--faint)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
						/>
					</div>
					<h3
						class="font-serif mt-2 text-2xl leading-tight text-[var(--text)] group-hover:text-[var(--ember)] md:text-3xl"
					>
						{service.meta.title}
					</h3>
					<p class="text-sm leading-relaxed text-[var(--muted)]">
						{service.meta.excerpt || ''}
					</p>

					{#if service.meta.technologies?.length}
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each service.meta.technologies.slice(0, 4) as tech}
								<span class="tag text-[10px]">{tech}</span>
							{/each}
						</div>
					{/if}

					{#if service.meta.pricing?.starting}
						<div
							class="mt-4 flex items-center justify-between border-t border-[var(--border-soft)] pt-4"
						>
							<span class="kicker">Starting from</span>
							<span class="font-mono text-sm text-[var(--text)]"
								>{service.meta.pricing.starting}</span
							>
						</div>
					{/if}
				</a>
			{/each}

			{#if services.length === 0}
				{#each [1, 2, 3, 4] as _}
					<div class="h-56 animate-pulse border-b border-[var(--border)] bg-[var(--surface)]"></div>
				{/each}
			{/if}
		</div>

		<!-- CTA -->
		<div class="mt-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
			<p class="font-serif text-2xl italic text-[var(--text)]">
				Have something else in mind?
			</p>
			<a href="#contact" class="link-arrow">
				<span>Let's discuss</span>
				<ArrowUpRight class="h-3.5 w-3.5" />
			</a>
		</div>
	</div>
</section>
