<script lang="ts">
	import { CV } from '$lib/config/cv';

	const fullName = 'Binsar Dwi Jasuma';
</script>

<svelte:head>
	<title>Curriculum Vitae — Binsar Dwi Jasuma</title>
	<meta name="description" content="Curriculum Vitae of Binsar Dwi Jasuma — Full-Stack Engineer." />
	<meta name="robots" content="noindex" />
</svelte:head>

<article class="ats-doc">
	<!-- Header -->
	<header class="ats-header">
		<h1>{fullName}</h1>
		<p class="ats-title">{CV.headline}</p>
		<p class="ats-contact">
			<span>{CV.contact.email}</span>
			<span> | </span>
			<span>{CV.contact.linkedin.replace(/^https?:\/\//, '')}</span>
			<span> | </span>
			<span>{CV.contact.github.replace(/^https?:\/\//, '')}</span>
			<span> | </span>
			<span>{CV.contact.website.replace(/^https?:\/\//, '')}</span>
		</p>
		<p class="ats-contact">{CV.contact.location}</p>
	</header>

	<!-- Professional summary -->
	<section>
		<h2>PROFESSIONAL SUMMARY</h2>
		{#each CV.summary as p}
			<p>{p}</p>
		{/each}
	</section>

	<!-- Experience -->
	<section>
		<h2>PROFESSIONAL EXPERIENCE</h2>
		{#each CV.experience as job}
			{#each job.roles as role}
				<div class="ats-job">
					<p class="ats-job-line">
						<strong>{role.title}</strong> — {job.company}{#if role.location} · {role.location}{/if}
					</p>
					<p class="ats-job-period">{role.period}</p>
					{#if job.description && role === job.roles[0]}
						<p class="ats-job-desc">{job.description}</p>
					{/if}
					{#if role.bullets?.length}
						<ul>
							{#each role.bullets as bullet}
								<li>{bullet}</li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		{/each}
	</section>

	<!-- Skills -->
	<section>
		<h2>TECHNICAL SKILLS</h2>
		<ul class="ats-skills">
			{#each CV.tools as group}
				<li>
					<strong>{group.label}:</strong>
					{group.items.join(', ')}
				</li>
			{/each}
		</ul>
	</section>

	<!-- Open Source -->
	<section>
		<h2>OPEN SOURCE PROJECTS</h2>
		<ul>
			{#each CV.openSource as pkg}
				<li>
					<strong>{pkg.name}</strong> ({pkg.year}) — {pkg.description}
				</li>
			{/each}
		</ul>
	</section>

	<!-- Education -->
	<section>
		<h2>EDUCATION</h2>
		{#each CV.education as edu}
			<div class="ats-edu">
				<p>
					<strong>{edu.institution}</strong> — {edu.degree}{#if edu.field}, {edu.field}{/if}
				</p>
				<p class="ats-edu-period">{edu.period}</p>
			</div>
		{/each}
	</section>

	<!-- Certifications -->
	{#if CV.certifications.length}
		<section>
			<h2>CERTIFICATIONS</h2>
			<ul>
				{#each CV.certifications as cert}
					<li>{cert.name}</li>
				{/each}
			</ul>
		</section>
	{/if}

	<!-- Awards -->
	{#if CV.awards.length}
		<section>
			<h2>HONORS AND AWARDS</h2>
			<ul>
				{#each CV.awards as award}
					<li>{award.name}</li>
				{/each}
			</ul>
		</section>
	{/if}

	<!-- Organizations -->
	{#if CV.organizations.length}
		<section>
			<h2>ORGANIZATIONAL ACTIVITIES</h2>
			<ul>
				{#each CV.organizations as org}
					<li>
						<strong>{org.name}</strong> — {org.division} ({org.period})
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<!-- Languages -->
	<section>
		<h2>LANGUAGES</h2>
		<ul>
			{#each CV.languages as lang}
				<li>{lang.name} — {lang.level}</li>
			{/each}
		</ul>
	</section>
</article>

<style>
	/* Hide the site shell when this ATS route is rendered */
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

	/* ATS-safe layout — single column, standard fonts */
	.ats-doc {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: #000000;
		background: #ffffff;
		font-size: 11pt;
		line-height: 1.45;
		max-width: 210mm;
		margin: 0 auto;
		padding: 16mm 18mm;
		box-sizing: border-box;
	}

	.ats-doc :global(*) {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
		color: inherit !important;
	}

	.ats-header h1 {
		font-size: 22pt;
		font-weight: 700;
		margin: 0 0 4pt 0;
		letter-spacing: 0.5pt;
	}

	.ats-title {
		font-size: 12pt;
		font-weight: 600;
		margin: 0 0 6pt 0;
	}

	.ats-contact {
		font-size: 10pt;
		margin: 0;
		line-height: 1.5;
	}

	section {
		margin-top: 14pt;
		page-break-inside: avoid;
	}

	h2 {
		font-size: 11pt;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.8pt;
		border-bottom: 1pt solid #000000;
		padding-bottom: 3pt;
		margin: 0 0 8pt 0;
	}

	p {
		margin: 0 0 6pt 0;
	}

	ul {
		margin: 0 0 0 0;
		padding: 0 0 0 16pt;
		list-style: disc;
	}

	li {
		margin-bottom: 3pt;
	}

	.ats-job {
		margin-bottom: 10pt;
	}

	.ats-job-line {
		margin: 0;
		font-size: 11pt;
	}

	.ats-job-period {
		margin: 0 0 4pt 0;
		font-size: 10pt;
		font-style: italic;
	}

	.ats-job-desc {
		margin: 0 0 4pt 0;
		font-size: 10pt;
	}

	.ats-skills li {
		margin-bottom: 2pt;
	}

	.ats-edu {
		margin-bottom: 6pt;
	}

	.ats-edu-period {
		margin: 0;
		font-size: 10pt;
		font-style: italic;
	}

	@page {
		size: A4;
		margin: 0;
	}
</style>
