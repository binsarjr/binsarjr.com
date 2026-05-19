<script lang="ts">
	import { AUTHOR, SKILLS, EXPERIENCE } from '$lib/constants';

	const yearStart = 2019;
	const yearsExperience = new Date().getFullYear() - yearStart;

	const beliefs = [
		{
			n: '01',
			t: 'Slow software is good software.',
			d: 'I optimise for clarity and longevity over novelty. The best codebase is one a teammate can navigate six months from now without a guide.'
		},
		{
			n: '02',
			t: 'API-first by default.',
			d: 'Every system I touch is built so the data layer can outlive the UI. Strict types, honest contracts, no leaky abstractions.'
		},
		{
			n: '03',
			t: 'Ship narrow, ship often.',
			d: 'I prefer small, reversible releases — the kind that let real users tell you what to build next, instead of guessing in a vacuum.'
		}
	];

	const stackGroups = [
		{ label: 'Frontend', items: SKILLS.frontend },
		{ label: 'Backend', items: SKILLS.backend },
		{ label: 'Infra & Tools', items: SKILLS.tools },
		{ label: 'Concepts', items: SKILLS.concepts }
	];
</script>

<section id="about" class="relative scroll-mt-20 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Section header -->
		<div class="grid grid-cols-1 gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12">
			<div class="lg:col-span-4">
				<span class="section-no">§ 01 / About</span>
				<h2
					class="font-serif mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					An <span class="italic text-[var(--ember)]">engineer</span> from Yogyakarta.
				</h2>
			</div>
			<div class="lg:col-span-7 lg:col-start-6">
				<p class="text-lg leading-relaxed text-[var(--muted)]">
					I'm Binsar — a full-stack engineer with
					<span class="text-[var(--text)]">{yearsExperience}+ years</span>
					shipping production web systems for startups, agencies, and independent clients across Indonesia and abroad. My work sits at the intersection of clean interfaces, reliable backends, and the unglamorous infrastructure that holds it all together.
				</p>
				<p class="mt-5 text-lg leading-relaxed text-[var(--muted)]">
					Off-screen I read, write, and tinker with home-lab Linux boxes. I take craft seriously and ego less so.
				</p>
			</div>
		</div>

		<!-- Beliefs / principles -->
		<div class="mt-20">
			<span class="kicker block">— On the work</span>
			<div class="mt-8 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
				{#each beliefs as belief}
					<article class="border-t border-[var(--border)] pt-6">
						<span class="font-mono text-xs text-[var(--ember)]">{belief.n}</span>
						<h3 class="font-serif mt-3 text-2xl leading-tight text-[var(--text)]">
							{belief.t}
						</h3>
						<p class="mt-4 text-sm leading-relaxed text-[var(--muted)]">
							{belief.d}
						</p>
					</article>
				{/each}
			</div>
		</div>

		<!-- Stack -->
		<div class="mt-24">
			<div class="flex items-baseline justify-between border-b border-[var(--border)] pb-4">
				<span class="kicker">— Toolkit</span>
				<span class="font-mono text-xs text-[var(--faint)]">{Object.values(SKILLS).flat().length} items</span>
			</div>
			<div class="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
				{#each stackGroups as group}
					<div>
						<span class="kicker kicker-ember block">{group.label}</span>
						<ul class="mt-4 space-y-2">
							{#each group.items as item}
								<li class="font-mono text-sm text-[var(--text)]">{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<!-- Experience timeline -->
		<div class="mt-24">
			<span class="kicker block">— Timeline</span>
			<div class="mt-8 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
				{#each EXPERIENCE as job}
					<div class="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:items-baseline">
						<div class="md:col-span-3">
							<span class="font-mono text-xs tracking-wider text-[var(--ember)]">{job.period}</span>
						</div>
						<div class="md:col-span-4">
							<h3 class="font-serif text-xl text-[var(--text)]">{job.title}</h3>
							<p class="font-mono mt-1 text-xs text-[var(--faint)]">{job.company}</p>
						</div>
						<p class="text-sm text-[var(--muted)] md:col-span-5">{job.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
