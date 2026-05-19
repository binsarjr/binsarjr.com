<script lang="ts">
	import { Send, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS } from '$lib/constants';
	import { isValidEmail } from '$lib/utils';

	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');
	let submitting = $state(false);
	let status = $state<'idle' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name || !email || !message) {
			status = 'error';
			errorMessage = 'Name, email, and message are required.';
			return;
		}
		if (!isValidEmail(email)) {
			status = 'error';
			errorMessage = 'That email address looks invalid.';
			return;
		}

		submitting = true;
		status = 'idle';
		errorMessage = '';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, subject, message })
			});
			if (!res.ok) throw new Error('Failed');
			status = 'success';
			name = '';
			email = '';
			subject = '';
			message = '';
		} catch {
			status = 'error';
			errorMessage = 'Could not send. Please email me directly.';
		} finally {
			submitting = false;
		}
	}
</script>

<section id="contact" class="relative scroll-mt-20 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<!-- Section header -->
		<div class="grid grid-cols-1 gap-8 border-b border-[var(--border)] pb-10 lg:grid-cols-12">
			<div class="lg:col-span-5">
				<span class="section-no">§ 05 / Contact</span>
				<h2
					class="font-serif mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight text-[var(--text)]"
				>
					Send a <span class="italic text-[var(--ember)]">note.</span>
				</h2>
			</div>
			<div class="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
				<p class="text-lg leading-relaxed text-[var(--muted)]">
					Looking to start something? Have a question, an offer, or just want to say hello?
					I read every message and reply within a couple of working days.
				</p>
			</div>
		</div>

		<!-- Contact grid -->
		<div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Direct contact column -->
			<aside class="lg:col-span-4">
				<div class="space-y-8">
					<div>
						<span class="kicker block">Email</span>
						<a
							href="mailto:{AUTHOR.email}"
							class="font-mono mt-2 inline-flex items-center gap-2 py-1 text-sm text-[var(--text)] hover:text-[var(--ember)]"
						>
							<span class="break-all">{AUTHOR.email}</span>
							<ArrowUpRight class="h-3 w-3 shrink-0" />
						</a>
					</div>
					<div>
						<span class="kicker block">Based in</span>
						<p class="mt-2 text-sm text-[var(--text)]">{AUTHOR.location}</p>
					</div>
					<div>
						<span class="kicker block">Working hours</span>
						<p class="font-mono mt-2 text-sm text-[var(--text)]">
							Mon–Fri · 09:00 – 18:00 WIB
						</p>
					</div>
					<div>
						<span class="kicker block">Elsewhere</span>
						<div class="mt-2 flex flex-col gap-0.5">
							{#each [{ href: SOCIAL_LINKS.github, label: 'GitHub', Icon: Github }, { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: Linkedin }, { href: SOCIAL_LINKS.twitter, label: 'Twitter', Icon: Twitter }].filter((l) => l.href) as link}
								{@const Icon = link.Icon}
								<a
									href={link.href}
									target="_blank"
									rel="noopener"
									class="font-mono inline-flex items-center gap-2 py-1.5 text-sm text-[var(--text)] hover:text-[var(--ember)]"
								>
									<Icon class="h-3.5 w-3.5" />
									<span>{link.label}</span>
								</a>
							{/each}
						</div>
					</div>

					<div class="border-t border-[var(--border)] pt-6">
						<p class="font-mono text-xs leading-relaxed text-[var(--faint)]">
							PREFER ASYNC? EMAIL ALWAYS WORKS. FOR EVERYTHING ELSE, A SHORT CALL.
						</p>
					</div>
				</div>
			</aside>

			<!-- Form -->
			<form
				onsubmit={handleSubmit}
				class="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10 lg:col-span-8"
			>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<label class="block">
						<span class="kicker block">Name *</span>
						<input
							type="text"
							bind:value={name}
							required
							class="mt-2 w-full border-b border-[var(--border)] bg-transparent py-2 text-[var(--text)] placeholder:text-[var(--faint)] focus:border-[var(--ember)] focus:outline-none"
							placeholder="Jane Doe"
						/>
					</label>
					<label class="block">
						<span class="kicker block">Email *</span>
						<input
							type="email"
							bind:value={email}
							required
							class="mt-2 w-full border-b border-[var(--border)] bg-transparent py-2 text-[var(--text)] placeholder:text-[var(--faint)] focus:border-[var(--ember)] focus:outline-none"
							placeholder="you@example.com"
						/>
					</label>
				</div>

				<label class="mt-6 block">
					<span class="kicker block">Subject</span>
					<input
						type="text"
						bind:value={subject}
						class="mt-2 w-full border-b border-[var(--border)] bg-transparent py-2 text-[var(--text)] placeholder:text-[var(--faint)] focus:border-[var(--ember)] focus:outline-none"
						placeholder="A new project, a question, a hello"
					/>
				</label>

				<label class="mt-6 block">
					<span class="kicker block">Message *</span>
					<textarea
						bind:value={message}
						required
						rows="6"
						class="mt-2 w-full resize-none border-b border-[var(--border)] bg-transparent py-2 text-[var(--text)] placeholder:text-[var(--faint)] focus:border-[var(--ember)] focus:outline-none"
						placeholder="Tell me what you're thinking about…"
					></textarea>
				</label>

				<div class="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
					<div class="font-mono text-xs text-[var(--faint)]">
						{#if status === 'success'}
							<span class="text-[var(--mint)]">✓ MESSAGE SENT. THANK YOU.</span>
						{:else if status === 'error'}
							<span class="text-[var(--ember)]">✕ {errorMessage}</span>
						{:else}
							TYPICAL REPLY · &lt; 48H
						{/if}
					</div>
					<button
						type="submit"
						disabled={submitting}
						class="group inline-flex items-center gap-3 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-6 py-3 text-sm text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)] disabled:cursor-not-allowed disabled:opacity-50"
					>
						<span class="font-mono tracking-wider uppercase">
							{submitting ? 'Sending…' : 'Send message'}
						</span>
						<Send class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
