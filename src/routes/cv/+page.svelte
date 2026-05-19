<script lang="ts">
	import { Download, ArrowLeft, ArrowUpRight, Github, Linkedin, Mail, Globe, MapPin } from 'lucide-svelte';
	import { CV } from '$lib/config/cv';
	import { AUTHOR } from '$lib/constants';
</script>

<svelte:head>
	<title>Curriculum Vitae — Binsar Dwi Jasuma</title>
	<meta
		name="description"
		content="Full curriculum vitae of Binsar Dwi Jasuma — full-stack engineer specialising in backend, APIs, scraping and automation."
	/>
</svelte:head>

<article class="cv-page relative pt-28 pb-24 print:pt-0 print:pb-0">
	<!-- Toolbar (web only) -->
	<div class="no-print mx-auto max-w-5xl px-5 sm:px-8">
		<div class="flex flex-col gap-3 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
			<a href="/" class="inline-flex items-center gap-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--ember)]">
				<ArrowLeft class="h-3.5 w-3.5" />
				<span class="font-mono text-xs tracking-wider uppercase">Back to site</span>
			</a>
			<div class="flex items-center gap-2">
				<a
					href="/resume"
					class="group inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 text-xs text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]"
				>
					<span class="font-mono tracking-wider uppercase">View 1-page Resume</span>
					<ArrowUpRight class="h-3 w-3" />
				</a>
				<a
					href="/cv.pdf"
					download="Binsar-Dwi-Jasuma-CV.pdf"
					class="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-4 py-2 text-xs text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]"
				>
					<Download class="h-3.5 w-3.5" />
					<span class="font-mono tracking-wider uppercase">Download PDF</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Document -->
	<div class="cv-doc mx-auto mt-10 max-w-5xl px-5 sm:px-8 print:mt-0 print:max-w-none print:px-0">
		<!-- Header -->
		<header class="grid grid-cols-1 gap-6 border-b border-[var(--border)] pb-8 md:grid-cols-12 md:items-end">
			<div class="md:col-span-3">
				<img
					src={AUTHOR.avatar}
					alt={AUTHOR.fullName}
					class="h-28 w-28 border border-[var(--border)] object-cover grayscale"
				/>
			</div>
			<div class="md:col-span-6">
				<span class="kicker">Curriculum Vitae · {new Date().getFullYear()}</span>
				<h1 class="font-serif mt-2 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight text-[var(--text)]">
					Binsar Dwi <span class="italic text-[var(--ember)]">Jasuma</span>
				</h1>
				<p class="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">{CV.subheadline}</p>
			</div>
			<div class="md:col-span-3">
				<ul class="font-mono space-y-1.5 text-xs text-[var(--text)]">
					<li class="inline-flex items-center gap-2">
						<Mail class="h-3 w-3 text-[var(--ember)]" />
						<a href="mailto:{CV.contact.email}" class="inline-block py-1 hover:text-[var(--ember)]">{CV.contact.email}</a>
					</li>
					<li class="inline-flex items-center gap-2">
						<Linkedin class="h-3 w-3 text-[var(--ember)]" />
						<a href={CV.contact.linkedin} target="_blank" rel="noopener" class="inline-block py-1 hover:text-[var(--ember)]">in/binsarjr</a>
					</li>
					<li class="inline-flex items-center gap-2">
						<Github class="h-3 w-3 text-[var(--ember)]" />
						<a href={CV.contact.github} target="_blank" rel="noopener" class="inline-block py-1 hover:text-[var(--ember)]">@binsarjr</a>
					</li>
					<li class="inline-flex items-center gap-2">
						<Globe class="h-3 w-3 text-[var(--ember)]" />
						<a href={CV.contact.website} target="_blank" rel="noopener" class="inline-block py-1 hover:text-[var(--ember)]">binsarjr.com</a>
					</li>
					<li class="inline-flex items-center gap-2">
						<MapPin class="h-3 w-3 text-[var(--ember)]" />
						<span>{CV.contact.location}</span>
					</li>
				</ul>
			</div>
		</header>

		<!-- Summary -->
		<section class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
			<div class="md:col-span-3">
				<span class="section-no">§ 01 / Profile</span>
				<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Headline</h2>
				<p class="font-mono mt-2 text-xs text-[var(--ember)] uppercase tracking-wider">{CV.headline}</p>
			</div>
			<div class="space-y-4 md:col-span-9">
				{#each CV.summary as p}
					<p class="text-[var(--text)] leading-relaxed">{p}</p>
				{/each}
			</div>
		</section>

		<!-- Experience -->
		<section class="mt-12 border-t border-[var(--border)] pt-10">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<div class="md:col-span-3">
					<span class="section-no">§ 02 / Experience</span>
					<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Work history</h2>
				</div>
				<div class="space-y-10 md:col-span-9">
					{#each CV.experience as job}
						<article>
							<header class="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border-soft)] pb-2">
								<h3 class="font-serif text-xl text-[var(--text)]">
									{#if job.url}
										<a href={job.url} target="_blank" rel="noopener" class="inline-block py-1 hover:text-[var(--ember)]">
											{job.company}
										</a>
									{:else}
										{job.company}
									{/if}
								</h3>
								{#if job.url}
									<span class="font-mono text-[10px] text-[var(--faint)]">{job.url.replace(/^https?:\/\//, '')}</span>
								{/if}
							</header>
							{#if job.description}
								<p class="mt-3 text-sm text-[var(--muted)] italic">{job.description}</p>
							{/if}
							<div class="mt-4 space-y-6">
								{#each job.roles as role}
									<div>
										<div class="flex flex-wrap items-baseline justify-between gap-2">
											<p class="font-mono text-sm text-[var(--text)]">
												{role.title}
												{#if role.current}
													<span class="ml-1.5 inline-flex items-center gap-1 align-middle">
														<span class="dot" style="width:5px;height:5px"></span>
														<span class="text-[10px] tracking-wider text-[var(--mint)] uppercase">Current</span>
													</span>
												{/if}
											</p>
											<p class="font-mono text-xs text-[var(--ember)]">{role.period}</p>
										</div>
										{#if role.location}
											<p class="font-mono mt-0.5 text-[10px] tracking-wider text-[var(--faint)] uppercase">{role.location}</p>
										{/if}
										{#if role.bullets?.length}
											<ul class="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
												{#each role.bullets as bullet}
													<li class="flex items-start gap-2">
														<span class="mt-2 inline-block h-[1px] w-2 shrink-0 bg-[var(--ember)]"></span>
														<span>{bullet}</span>
													</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<!-- Tools -->
		<section class="mt-12 border-t border-[var(--border)] pt-10">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<div class="md:col-span-3">
					<span class="section-no">§ 03 / Toolkit</span>
					<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Tools &amp; tech</h2>
				</div>
				<div class="md:col-span-9">
					<div class="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
						{#each CV.tools as group}
							<div>
								<span class="kicker kicker-ember block">{group.label}</span>
								<p class="font-mono mt-1 text-sm text-[var(--text)]">{group.items.join(' · ')}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<!-- Open Source -->
		<section class="mt-12 border-t border-[var(--border)] pt-10 break-inside-avoid">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<div class="md:col-span-3">
					<span class="section-no">§ 04 / Open source</span>
					<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Published packages</h2>
				</div>
				<div class="md:col-span-9">
					<div class="divide-y divide-[var(--border-soft)]">
						{#each CV.openSource as pkg}
							<article class="grid grid-cols-12 items-baseline gap-3 py-3">
								<span class="font-mono col-span-2 text-xs text-[var(--ember)]">{pkg.year}</span>
								<div class="col-span-10">
									<p class="font-mono text-sm text-[var(--text)]">
										{#if pkg.url}
											<a href={pkg.url} target="_blank" rel="noopener" class="inline-block py-1 hover:text-[var(--ember)]">{pkg.name}</a>
										{:else}
											{pkg.name}
										{/if}
									</p>
									<p class="mt-0.5 text-xs text-[var(--muted)]">{pkg.description}</p>
								</div>
							</article>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<!-- Organizations -->
		<section class="mt-12 border-t border-[var(--border)] pt-10 break-inside-avoid">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<div class="md:col-span-3">
					<span class="section-no">§ 05 / Communities</span>
					<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Organisational activities</h2>
				</div>
				<div class="md:col-span-9">
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{#each CV.organizations as org}
							<article>
								<h3 class="font-serif text-lg text-[var(--text)]">
									{#if org.url}
										<a href={org.url} target="_blank" rel="noopener" class="inline-block py-1 hover:text-[var(--ember)]">{org.name}</a>
									{:else}
										{org.name}
									{/if}
								</h3>
								<p class="font-mono mt-0.5 text-xs text-[var(--ember)]">{org.period}</p>
								<p class="mt-1 text-sm text-[var(--muted)]">{org.division}</p>
							</article>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<!-- Certifications + Awards -->
		<section class="mt-12 grid grid-cols-1 gap-10 border-t border-[var(--border)] pt-10 md:grid-cols-2 break-inside-avoid">
			<div>
				<span class="section-no">§ 06 / Certifications</span>
				<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Certifications</h2>
				<ul class="mt-4 space-y-2">
					{#each CV.certifications as cert}
						<li class="flex items-start gap-3 text-sm">
							<span class="mt-2 inline-block h-[1px] w-2 shrink-0 bg-[var(--ember)]"></span>
							<span class="text-[var(--text)]">{cert.name}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<span class="section-no">§ 07 / Awards</span>
				<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Honors &amp; awards</h2>
				<ul class="mt-4 space-y-2">
					{#each CV.awards as award}
						<li class="flex items-start gap-3 text-sm">
							<span class="mt-2 inline-block h-[1px] w-2 shrink-0 bg-[var(--ember)]"></span>
							<span class="text-[var(--text)]">{award.name}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<!-- Education -->
		<section class="mt-12 border-t border-[var(--border)] pt-10 break-inside-avoid">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<div class="md:col-span-3">
					<span class="section-no">§ 08 / Education</span>
					<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Education</h2>
				</div>
				<div class="space-y-5 md:col-span-9">
					{#each CV.education as edu}
						<article class="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border-soft)] pb-3">
							<div>
								<h3 class="font-serif text-lg text-[var(--text)]">{edu.institution}</h3>
								<p class="mt-1 text-sm text-[var(--muted)]">
									{edu.degree}{#if edu.field} · {edu.field}{/if}
								</p>
							</div>
							<p class="font-mono text-xs text-[var(--ember)]">{edu.period}</p>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<!-- Languages -->
		<section class="mt-12 border-t border-[var(--border)] pt-10 break-inside-avoid">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-12">
				<div class="md:col-span-3">
					<span class="section-no">§ 09 / Languages</span>
					<h2 class="font-serif mt-2 text-2xl text-[var(--text)]">Languages</h2>
				</div>
				<div class="md:col-span-9">
					<ul class="space-y-2">
						{#each CV.languages as lang}
							<li class="flex items-baseline justify-between border-b border-[var(--border-soft)] pb-2">
								<span class="text-[var(--text)]">{lang.name}</span>
								<span class="font-mono text-xs text-[var(--ember)] uppercase tracking-wider">{lang.level}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<footer class="mt-16 border-t border-[var(--border)] pt-6 print:mt-10">
			<p class="font-mono text-[10px] tracking-wider text-[var(--faint)] uppercase">
				DOC · CV-BinsarDwiJasuma · GENERATED {new Date().toISOString().slice(0, 10)} · BINSARJR.COM/CV
			</p>
		</footer>
	</div>
</article>

<style>
	/* ============================================================
	   Print stylesheet — Save as PDF from browser
	   ============================================================ */
	@media print {
		:global(html),
		:global(body) {
			background: white !important;
		}
		:global(.cv-page) {
			color: #111 !important;
		}
		:global(.no-print) {
			display: none !important;
		}
		:global(nav),
		:global(footer:not(.cv-page footer)) {
			display: none !important;
		}
		:global(.cv-page) {
			--bg: #ffffff;
			--surface: #fafafa;
			--border: #d4d4d4;
			--border-soft: #e5e5e5;
			--text: #111111;
			--muted: #555555;
			--faint: #777777;
			--ember: #c2410c;
		}
		:global(.cv-doc) {
			padding: 12mm 14mm !important;
			max-width: 100% !important;
		}
		:global(.cv-page section) {
			page-break-inside: avoid;
		}
		:global(.cv-page img) {
			filter: grayscale(100%);
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
