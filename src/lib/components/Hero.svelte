<script lang="ts">
	import { ArrowDown, ArrowUpRight } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS } from '$lib/constants';

	const yearStart = 2019;
	const yearsExperience = new Date().getFullYear() - yearStart;

	const stack = [
		'TypeScript',
		'SvelteKit',
		'React',
		'Node.js',
		'Bun',
		'PostgreSQL',
		'Go',
		'Python',
		'Docker',
		'Linux',
		'Redis',
		'Tailwind'
	];

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section
	id="hero"
	class="relative flex min-h-[100svh] items-end overflow-hidden pt-32 pb-12 md:pb-20"
>
	<div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Top kicker row -->
		<div
			class="fade-up mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6"
		>
			<span class="kicker">Vol. {new Date().getFullYear()} · Yogyakarta, ID</span>
			<span class="kicker inline-flex items-center gap-2">
				<span class="dot"></span> Available for select engagements
			</span>
		</div>

		<!-- Editorial grid: name left, meta right -->
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
			<!-- Left: display name -->
			<div class="lg:col-span-8">
				<h1
					class="fade-up font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
				>
					Binsar
					<br />
					Dwi <span class="italic text-[var(--ember)]">Jasuma</span>
				</h1>

				<p
					class="fade-up delay-200 mt-10 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl"
				>
					Full-stack engineer building thoughtful, durable web systems —
					<span class="font-serif text-[var(--text)] italic">API-first</span>,
					<span class="font-serif text-[var(--text)] italic">type-safe</span>, and
					<span class="font-serif text-[var(--text)] italic">unhurried</span>.
				</p>

				<div class="fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
					<button
						onclick={() => scrollTo('projects')}
						class="group inline-flex items-center gap-3 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-5 py-3 text-sm text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]"
					>
						<span class="font-mono tracking-wider uppercase">View work</span>
						<ArrowDown class="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
					</button>
					<button
						onclick={() => scrollTo('contact')}
						class="group inline-flex items-center gap-3 px-5 py-3 text-sm text-[var(--text)] hover:text-[var(--ember)]"
					>
						<span class="font-mono tracking-wider uppercase">Get in touch</span>
						<ArrowUpRight
							class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</button>
				</div>
			</div>

			<!-- Right: metadata column -->
			<aside class="fade-up delay-400 lg:col-span-4">
				<div class="space-y-6 border-l border-[var(--border)] pl-6">
					<div>
						<span class="kicker block">Role</span>
						<p class="mt-2 text-sm text-[var(--text)]">{AUTHOR.title}</p>
					</div>
					<div>
						<span class="kicker block">Tenure</span>
						<p class="font-mono mt-2 text-sm text-[var(--text)]">
							{yearsExperience}+ years
							<span class="text-[var(--faint)]">/ since {yearStart}</span>
						</p>
					</div>
					<div>
						<span class="kicker block">Location</span>
						<p class="font-mono mt-2 text-sm text-[var(--text)]">{AUTHOR.location}</p>
					</div>
					<div>
						<span class="kicker block">Currently</span>
						<p class="mt-2 text-sm leading-relaxed text-[var(--text)]">
							Crafting calm interfaces &<br />long-running backend services.
						</p>
					</div>
					<div>
						<span class="kicker block">Reach</span>
						<div class="mt-2 flex flex-col gap-1">
							<a
								href="mailto:{AUTHOR.email}"
								class="font-mono inline-block py-1 text-xs text-[var(--text)] hover:text-[var(--ember)]"
							>
								{AUTHOR.email}
							</a>
							<a
								href={SOCIAL_LINKS.github}
								target="_blank"
								rel="noopener"
								class="font-mono inline-block py-1 text-xs text-[var(--text)] hover:text-[var(--ember)]"
							>
								@binsarjr · github
							</a>
						</div>
					</div>
				</div>
			</aside>
		</div>
	</div>

	<!-- Marquee tech strip at very bottom -->
	<div
		class="absolute right-0 bottom-0 left-0 overflow-hidden border-y border-[var(--border)] bg-[var(--bg-soft)] py-3"
	>
		<div class="marquee flex w-max items-center gap-12 whitespace-nowrap">
			{#each [...stack, ...stack, ...stack] as item, i}
				<span class="font-mono text-[11px] tracking-[0.2em] text-[var(--faint)] uppercase">
					{item}
				</span>
				{#if i < stack.length * 3 - 1}
					<span class="text-[var(--border)]">/</span>
				{/if}
			{/each}
		</div>
	</div>
</section>
