<script lang="ts">
	import { CV } from '$lib/config/cv';

	const fullName = 'Binsar Dwi Jasuma';
	// 1-page resume: trim to the most relevant 4 experience blocks
	const experience = CV.experience.slice(0, 4);
	// Keep only the 4 highest-signal open source items
	const openSource = CV.openSource.slice(0, 4);
</script>

<svelte:head>
	<title>Resume — Binsar Dwi Jasuma</title>
	<meta name="description" content="One-page resume of Binsar Dwi Jasuma — Full-Stack Engineer." />
	<meta name="robots" content="noindex" />
</svelte:head>

<article class="ats-doc">
	<!-- Header -->
	<header class="ats-header">
		<h1>{fullName}</h1>
		<p class="ats-title">{CV.headline}</p>
		<p class="ats-contact">
			{CV.contact.email} | {CV.contact.linkedin.replace(/^https?:\/\//, '')} | {CV.contact.github.replace(/^https?:\/\//, '')} | {CV.contact.website.replace(/^https?:\/\//, '')}
		</p>
		<p class="ats-contact">{CV.contact.location}</p>
	</header>

	<!-- Summary -->
	<section>
		<h2>SUMMARY</h2>
		<p>{CV.summary[0]} {CV.summary[1]}</p>
	</section>

	<!-- Experience -->
	<section>
		<h2>EXPERIENCE</h2>
		{#each experience as job}
			{@const primary = job.roles[0]}
			<div class="ats-job">
				<p class="ats-job-line">
					<strong>{primary.title}</strong> — {job.company}{#if primary.location} · {primary.location}{/if}
				</p>
				<p class="ats-job-period">{primary.period}</p>
				{#if primary.bullets?.length}
					<ul>
						{#each primary.bullets.slice(0, 3) as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>
				{/if}
				{#if job.roles.length > 1}
					<p class="ats-note">Concurrent role(s) at {job.company}: {job.roles
							.slice(1)
							.map((r) => r.title)
							.join('; ')}.</p>
				{/if}
			</div>
		{/each}
	</section>

	<!-- Skills -->
	<section>
		<h2>TECHNICAL SKILLS</h2>
		<ul class="ats-skills">
			{#each CV.tools as group}
				<li><strong>{group.label}:</strong> {group.items.join(', ')}</li>
			{/each}
		</ul>
	</section>

	<!-- Open Source -->
	<section>
		<h2>SELECTED OPEN SOURCE</h2>
		<ul>
			{#each openSource as pkg}
				<li><strong>{pkg.name}</strong> ({pkg.year}) — {pkg.description}</li>
			{/each}
		</ul>
	</section>

	<!-- Education -->
	<section>
		<h2>EDUCATION</h2>
		{#each CV.education as edu}
			<p class="ats-edu-line">
				<strong>{edu.institution}</strong> — {edu.degree}{#if edu.field}, {edu.field}{/if} <em>({edu.period})</em>
			</p>
		{/each}
	</section>

	<!-- Awards + Languages on one row to save space -->
	<section class="ats-twocol">
		<div>
			<h2>AWARDS</h2>
			<ul>
				{#each CV.awards as award}
					<li>{award.name}</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2>LANGUAGES</h2>
			<ul>
				{#each CV.languages as lang}
					<li>{lang.name} — {lang.level}</li>
				{/each}
			</ul>
		</div>
	</section>
</article>

<style>
	:global(html),
	:global(body) {
		background: #ffffff !important;
		color: #000000 !important;
	}
	:global(body > div > div.bg-grid),
	:global(body > div > div[style*='radial-gradient']) {
		display: none !important;
	}
	:global(nav),
	:global(body > div > div > footer) {
		display: none !important;
	}
	:global(main) {
		min-height: 0 !important;
	}

	.ats-doc {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: #000000;
		background: #ffffff;
		font-size: 9pt;
		line-height: 1.33;
		max-width: 210mm;
		margin: 0 auto;
		padding: 8mm 12mm 6mm 12mm;
		box-sizing: border-box;
	}

	.ats-doc :global(*) {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
		color: inherit !important;
	}

	.ats-header h1 {
		font-size: 18pt;
		font-weight: 700;
		margin: 0 0 3pt 0;
		letter-spacing: 0.4pt;
	}

	.ats-title {
		font-size: 11pt;
		font-weight: 600;
		margin: 0 0 4pt 0;
	}

	.ats-contact {
		font-size: 9pt;
		margin: 0;
	}

	section {
		margin-top: 7pt;
	}

	h2 {
		font-size: 10pt;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.6pt;
		border-bottom: 0.75pt solid #000000;
		padding-bottom: 2pt;
		margin: 0 0 5pt 0;
	}

	p {
		margin: 0 0 4pt 0;
	}

	ul {
		margin: 0;
		padding-left: 14pt;
		list-style: disc;
	}

	li {
		margin-bottom: 1.5pt;
	}

	.ats-job {
		margin-bottom: 6pt;
	}

	.ats-job-line {
		margin: 0;
		font-size: 10pt;
	}

	.ats-job-period {
		margin: 0 0 2pt 0;
		font-size: 9pt;
		font-style: italic;
	}

	.ats-note {
		margin: 2pt 0 0 0;
		font-size: 9pt;
		font-style: italic;
	}

	.ats-skills li {
		margin-bottom: 1pt;
	}

	.ats-edu-line {
		margin: 0 0 2pt 0;
		font-size: 10pt;
	}

	.ats-twocol {
		display: flex;
		gap: 18pt;
	}

	.ats-twocol > div {
		flex: 1;
	}

	@page {
		size: A4;
		margin: 0;
	}
</style>
