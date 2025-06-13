<!-- Contact.svelte -->
<script lang="ts">
	import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS } from '$lib/constants';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let submitMessage = $state('');

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		submitMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (result.success) {
				submitMessage = result.message;
				formData = { name: '', email: '', subject: '', message: '' };
			} else {
				submitMessage = result.error || 'Something went wrong. Please try again.';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submitMessage = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact" class="bg-gradient-to-b from-black to-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				Get In <span class="text-yellow-400">Touch</span>
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				Have a project in mind or want to collaborate? I'd love to hear from you!
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Contact Information -->
			<div class="space-y-8">
				<div>
					<h3 class="mb-6 text-2xl font-bold text-white">Let's work together</h3>
					<p class="mb-8 leading-relaxed text-gray-300">
						I'm always open to discussing new opportunities, interesting projects, or just having a
						chat about technology. Whether you need a full-stack developer, want to collaborate on
						an open-source project, or need consulting advice, feel free to reach out.
					</p>
				</div>

				<!-- Contact Details -->
				<div class="space-y-6">
					<div class="flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"
						>
							<Mail class="h-6 w-6 text-yellow-400" />
						</div>
						<div>
							<h4 class="font-semibold text-white">Email</h4>
							<a
								href={SOCIAL_LINKS.email}
								class="text-gray-300 transition-colors hover:text-yellow-400"
							>
								{AUTHOR.email}
							</a>
						</div>
					</div>

					<div class="flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"
						>
							<Phone class="h-6 w-6 text-yellow-400" />
						</div>
						<div>
							<h4 class="font-semibold text-white">Phone</h4>
							<a
								href={SOCIAL_LINKS.phone}
								class="text-gray-300 transition-colors hover:text-yellow-400"
							>
								{AUTHOR.phone}
							</a>
						</div>
					</div>

					<div class="flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"
						>
							<MapPin class="h-6 w-6 text-yellow-400" />
						</div>
						<div>
							<h4 class="font-semibold text-white">Location</h4>
							<p class="text-gray-300">{AUTHOR.location}</p>
						</div>
					</div>
				</div>

				<!-- Social Links -->
				<div>
					<h4 class="mb-4 font-semibold text-white">Follow me on</h4>
					<div class="flex space-x-4">
						<a
							href={SOCIAL_LINKS.github}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-yellow-400/20 hover:text-yellow-400"
						>
							<Github class="h-5 w-5" />
						</a>
						<a
							href={SOCIAL_LINKS.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-yellow-400/20 hover:text-yellow-400"
						>
							<Linkedin class="h-5 w-5" />
						</a>
						<a
							href={SOCIAL_LINKS.twitter}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors hover:bg-yellow-400/20 hover:text-yellow-400"
						>
							<Twitter class="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="rounded-xl border border-gray-800 bg-gray-900 p-8">
				<h3 class="mb-6 text-2xl font-bold text-white">Send me a message</h3>

				{#if submitMessage}
					<div
						class="mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-400"
					>
						{submitMessage}
					</div>
				{/if}

				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="name" class="mb-2 block font-semibold text-white">Name</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-yellow-400 focus:outline-none"
								placeholder="Your name"
							/>
						</div>
						<div>
							<label for="email" class="mb-2 block font-semibold text-white">Email</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-yellow-400 focus:outline-none"
								placeholder="your@email.com"
							/>
						</div>
					</div>

					<div>
						<label for="subject" class="mb-2 block font-semibold text-white">Subject</label>
						<input
							type="text"
							id="subject"
							bind:value={formData.subject}
							required
							class="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-yellow-400 focus:outline-none"
							placeholder="Project discussion"
						/>
					</div>

					<div>
						<label for="message" class="mb-2 block font-semibold text-white">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="6"
							class="w-full resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-yellow-400 focus:outline-none"
							placeholder="Tell me about your project..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="flex w-full items-center justify-center rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{#if isSubmitting}
							<div
								class="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"
							></div>
							Sending...
						{:else}
							<Send class="mr-2 h-5 w-5" />
							Send Message
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="mt-20 border-t border-gray-800 pt-8">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<p class="text-gray-400">
					© {new Date().getFullYear()}
					{AUTHOR.name}. Built with <span class="text-yellow-400">SvelteKit</span> and
					<span class="text-yellow-400">Tailwind CSS</span>
				</p>
			</div>
		</div>
	</footer>
</section>
