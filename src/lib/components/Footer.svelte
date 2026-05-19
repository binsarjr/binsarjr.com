<script lang="ts">
	import { Github, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS } from '$lib/constants';

	const currentYear = new Date().getFullYear();
	const builtAt = new Date().toISOString().slice(0, 10);

	const colA = [
		{ label: 'About', href: '/#about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Services', href: '/services' },
		{ label: 'Journal', href: '/blog' },
		{ label: 'Curriculum Vitae', href: '/cv' },
		{ label: 'Resume', href: '/resume' }
	];

	const colB = [
		{ label: 'GitHub', href: SOCIAL_LINKS.github, external: true, icon: Github },
		{ label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true, icon: Linkedin },
		{ label: 'Twitter', href: SOCIAL_LINKS.twitter, external: true, icon: Twitter },
		{ label: 'YouTube', href: SOCIAL_LINKS.youtube, external: true, icon: Youtube }
	].filter((l) => l.href);
</script>

<footer class="relative mt-32 border-t border-[var(--border)]">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Top: large editorial signature -->
		<div class="grid grid-cols-1 gap-10 py-16 md:grid-cols-12">
			<div class="md:col-span-7">
				<span class="kicker">§ Closing</span>
				<h2
					class="font-serif mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-tight text-[var(--text)]"
				>
					Let's build<br />
					<span class="italic text-[var(--ember)]">something</span> that lasts.
				</h2>
				<p class="mt-6 max-w-md text-[var(--muted)]">
					Open to selected engagements — full-stack web, custom systems, automation, and
					small-team mentorship.
				</p>
				<a
					href="mailto:{AUTHOR.email}"
					class="link-arrow mt-8 inline-flex"
				>
					<span>{AUTHOR.email}</span>
					<ArrowUpRight class="h-3.5 w-3.5" />
				</a>
			</div>

			<div class="grid grid-cols-2 gap-8 md:col-span-5">
				<div>
					<span class="kicker block">Navigate</span>
					<ul class="mt-4 space-y-1">
						{#each colA as link}
							<li>
								<a
									href={link.href}
									class="inline-block py-1.5 text-sm text-[var(--text)] hover:text-[var(--ember)]"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<span class="kicker block">Elsewhere</span>
					<ul class="mt-4 space-y-1">
						{#each colB as link}
							{@const Icon = link.icon}
							<li>
								<a
									href={link.href}
									target="_blank"
									rel="noopener"
									class="group inline-flex items-center gap-2 py-1.5 text-sm text-[var(--text)] hover:text-[var(--ember)]"
								>
									<Icon class="h-3.5 w-3.5" />
									<span>{link.label}</span>
									<ArrowUpRight
										class="h-3 w-3 text-[var(--faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--ember)]"
									/>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom: colophon strip -->
		<div
			class="flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--border)] py-6 text-xs text-[var(--faint)] md:flex-row md:items-center"
		>
			<div class="font-mono">
				© {currentYear} BINSAR DWI JASUMA · YOGYAKARTA · ID
			</div>
			<div class="font-mono flex flex-wrap items-center gap-x-4 gap-y-1">
				<span>BUILT WITH SVELTEKIT</span>
				<span class="text-[var(--border)]">/</span>
				<span class="inline-flex items-center gap-1.5">
					<span class="dot"></span> AVAILABLE FOR WORK
				</span>
				<span class="text-[var(--border)]">/</span>
				<span>REV {builtAt}</span>
			</div>
		</div>
	</div>
</footer>
