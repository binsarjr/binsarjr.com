<script lang="ts">
	import { Download, ArrowLeft, ArrowUpRight } from 'lucide-svelte';
	import { CV } from '$lib/config/cv';
	import { AUTHOR } from '$lib/constants';

	// Take only the 4 most relevant current/recent roles for a 1-page resume
	const headline = CV.experience.slice(0, 4);
</script>

<svelte:head>
	<title>Resume — Binsar Dwi Jasuma</title>
	<meta
		name="description"
		content="One-page resume of Binsar Dwi Jasuma — full-stack engineer specialising in backend, APIs, and automation."
	/>
</svelte:head>

<article class="resume-page relative pt-28 pb-24 print:pt-0 print:pb-0">
	<!-- Toolbar (web only) -->
	<div class="no-print mx-auto max-w-4xl px-5 sm:px-8">
		<div class="flex flex-col gap-3 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
			<a href="/" class="inline-flex items-center gap-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--ember)]">
				<ArrowLeft class="h-3.5 w-3.5" />
				<span class="font-mono text-xs tracking-wider uppercase">Back to site</span>
			</a>
			<div class="flex items-center gap-2">
				<a
					href="/cv"
					class="group inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 text-xs text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]"
				>
					<span class="font-mono tracking-wider uppercase">View full CV</span>
					<ArrowUpRight class="h-3 w-3" />
				</a>
				<a
					href="/resume.pdf"
					download="Binsar-Dwi-Jasuma-Resume.pdf"
					class="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-4 py-2 text-xs text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]"
				>
					<Download class="h-3.5 w-3.5" />
					<span class="font-mono tracking-wider uppercase">Download PDF</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Resume sheet -->
	<div class="resume-sheet mx-auto mt-10 max-w-4xl bg-[var(--bg)] px-5 py-10 sm:px-10 print:mt-0 print:max-w-none print:px-0 print:py-0">
		<!-- Header -->
		<header class="flex flex-col gap-4 border-b-2 border-[var(--ember)] pb-5 sm:flex-row sm:items-center sm:justify-between">
			<div class="flex items-center gap-4">
				<img
					src={AUTHOR.avatar}
					alt={AUTHOR.fullName}
					class="h-16 w-16 rounded-full border border-[var(--border)] object-cover grayscale"
				/>
				<div>
					<h1 class="font-serif text-3xl leading-none text-[var(--text)] sm:text-4xl">
						Binsar Dwi <span class="italic text-[var(--ember)]">Jasuma</span>
					</h1>
					<p class="font-mono mt-1.5 text-[11px] tracking-wider text-[var(--ember)] uppercase">{CV.headline}</p>
				</div>
			</div>
			<div class="font-mono space-y-0.5 text-[10px] text-[var(--text)] sm:text-right">
				<p><a href="mailto:{CV.contact.email}" class="hover:text-[var(--ember)]">{CV.contact.email}</a></p>
				<p>linkedin.com/in/binsarjr</p>
				<p>github.com/binsarjr</p>
				<p>binsarjr.com</p>
				<p class="text-[var(--faint)]">{CV.contact.location}</p>
			</div>
		</header>

		<!-- Profile -->
		<section class="mt-5">
			<h2 class="font-mono text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Profile</h2>
			<p class="mt-2 text-[13px] leading-relaxed text-[var(--text)]">
				{CV.summary[0]}
				<span class="text-[var(--muted)]">{CV.summary[1]}</span>
			</p>
		</section>

		<!-- 2-column body -->
		<div class="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
			<!-- LEFT: Experience -->
			<section class="md:col-span-2">
				<h2 class="font-mono text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Experience</h2>
				<div class="mt-3 space-y-4">
					{#each headline as job}
						<article>
							<header class="flex items-baseline justify-between gap-2">
								<h3 class="text-[13px] font-semibold text-[var(--text)]">
									{job.company}
									{#if job.url}
										<a href={job.url} target="_blank" rel="noopener" aria-label="Open company site" class="font-mono ml-1 inline-block px-1 py-0.5 text-[11px] text-[var(--faint)] hover:text-[var(--ember)]">↗</a>
									{/if}
								</h3>
								<span class="font-mono text-[10px] whitespace-nowrap text-[var(--ember)]">{job.roles[0].period}</span>
							</header>
							<p class="font-mono mt-0.5 text-[10px] tracking-wider text-[var(--muted)] uppercase">{job.roles[0].title}</p>
							{#if job.roles[0].bullets?.length}
								<ul class="mt-1.5 space-y-1">
									{#each job.roles[0].bullets.slice(0, 3) as bullet}
										<li class="flex items-start gap-2 text-[12px] leading-snug text-[var(--muted)]">
											<span class="mt-2 inline-block h-[1px] w-1.5 shrink-0 bg-[var(--ember)]"></span>
											<span>{bullet}</span>
										</li>
									{/each}
								</ul>
							{/if}
							{#if job.roles.length > 1}
								<p class="font-mono mt-1 text-[10px] text-[var(--faint)] italic">
									+ {job.roles.length - 1} concurrent role{job.roles.length > 2 ? 's' : ''} — see /cv
								</p>
							{/if}
						</article>
					{/each}
				</div>

				<!-- Open source -->
				<h2 class="font-mono mt-5 text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Selected open source</h2>
				<ul class="mt-2 space-y-1">
					{#each CV.openSource.slice(0, 4) as pkg}
						<li class="flex items-baseline gap-2 text-[12px]">
							<span class="font-mono w-10 shrink-0 text-[10px] text-[var(--ember)]">{pkg.year}</span>
							<span class="font-mono text-[var(--text)]">{pkg.name}</span>
							<span class="text-[var(--muted)]">— {pkg.description}</span>
						</li>
					{/each}
				</ul>
			</section>

			<!-- RIGHT: side column -->
			<aside class="space-y-5">
				<section>
					<h2 class="font-mono text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Toolkit</h2>
					<div class="mt-2 space-y-2">
						{#each CV.tools as group}
							<div>
								<p class="font-mono text-[9px] tracking-wider text-[var(--muted)] uppercase">{group.label}</p>
								<p class="font-mono mt-0.5 text-[11px] leading-snug text-[var(--text)]">
									{group.items.join(' · ')}
								</p>
							</div>
						{/each}
					</div>
				</section>

				<section>
					<h2 class="font-mono text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Education</h2>
					<div class="mt-2 space-y-2">
						{#each CV.education as edu}
							<div>
								<p class="text-[12px] font-semibold text-[var(--text)]">{edu.institution}</p>
								<p class="text-[11px] text-[var(--muted)]">{edu.field || edu.degree}</p>
								<p class="font-mono text-[10px] text-[var(--ember)]">{edu.period}</p>
							</div>
						{/each}
					</div>
				</section>

				<section>
					<h2 class="font-mono text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Awards</h2>
					<ul class="mt-2 space-y-1">
						{#each CV.awards as award}
							<li class="text-[11px] leading-snug text-[var(--text)]">{award.name}</li>
						{/each}
					</ul>
				</section>

				<section>
					<h2 class="font-mono text-[10px] tracking-[0.15em] text-[var(--ember)] uppercase">— Languages</h2>
					<ul class="mt-2 space-y-1">
						{#each CV.languages as lang}
							<li class="flex items-baseline justify-between text-[11px]">
								<span class="text-[var(--text)]">{lang.name}</span>
								<span class="font-mono text-[10px] text-[var(--ember)]">{lang.level}</span>
							</li>
						{/each}
					</ul>
				</section>
			</aside>
		</div>

		<!-- Footer (web-only — redundant in print where contact info is in header) -->
		<footer class="no-print mt-5 flex items-center justify-between border-t border-[var(--border-soft)] pt-2">
			<p class="font-mono text-[9px] tracking-wider text-[var(--faint)] uppercase">
				RESUME · {new Date().toISOString().slice(0, 10)}
			</p>
			<p class="font-mono text-[9px] tracking-wider text-[var(--faint)] uppercase">
				FULL CV → binsarjr.com/cv
			</p>
		</footer>
	</div>
</article>

<style>
	@media print {
		:global(html),
		:global(body) {
			background: white !important;
		}
		:global(.resume-page) {
			color: #111 !important;
		}
		:global(.no-print) {
			display: none !important;
		}
		:global(nav),
		:global(footer:not(.resume-page footer)) {
			display: none !important;
		}
		:global(.resume-page) {
			--bg: #ffffff;
			--surface: #fafafa;
			--border: #d4d4d4;
			--border-soft: #e5e5e5;
			--text: #111111;
			--muted: #555555;
			--faint: #888888;
			--ember: #c2410c;
		}
		:global(.resume-sheet) {
			padding: 6mm 10mm 5mm 10mm !important;
			max-width: 100% !important;
		}
		:global(.dot) {
			animation: none !important;
		}
		@page {
			size: A4;
			margin: 0;
		}
	}
</style>
