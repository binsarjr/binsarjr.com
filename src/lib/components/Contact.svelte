<!-- Contact.svelte -->
<script lang="ts">
	import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-svelte';
	import { fadeUp, fadeLeft, fadeRight } from '$lib/animations';
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

<section id="contact" class="relative overflow-hidden py-20">
	<!-- Background decorations -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent"
	></div>
	<div
		class="absolute top-0 left-0 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-violet-400/5 to-purple-400/5 blur-3xl"
	></div>
	<div
		class="absolute right-0 bottom-0 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-pink-400/5 to-rose-400/5 blur-3xl delay-1000"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center" use:fadeUp>
			<h2 class="mb-6 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 200 }}>
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
					>Get In</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Touch</span
				>
			</h2>
			<p
				class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300"
				use:fadeUp={{ delay: 400 }}
			>
				Have a project in mind or want to collaborate? I'd love to hear from you!
			</p>
		</div>

		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Enhanced Contact Information -->
			<div class="space-y-8" use:fadeRight={{ delay: 600 }}>
				<div
					class="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
					use:fadeUp={{ delay: 800 }}
				>
					<h3
						class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-2xl font-bold text-transparent"
					>
						Let's work together
					</h3>
					<p class="mb-8 leading-relaxed text-gray-300">
						I'm always open to discussing new opportunities, interesting projects, or just having a
						chat about technology. Whether you need a full-stack developer, want to collaborate on
						an open-source project, or need consulting advice, feel free to reach out.
					</p>
					<!-- Decorative element -->
					<div
						class="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/30"
					></div>
				</div>

				<!-- Enhanced Contact Details -->
				<div class="space-y-6" use:fadeUp={{ delay: 1000 }}>
					<div
						class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10"
						use:fadeUp={{ delay: 1200 }}
					>
						<div
							class="mr-6 flex h-14 w-14 items-center justify-center rounded-xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
						>
							<Mail class="h-6 w-6 text-yellow-400" />
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-white">Email</h4>
							<a
								href={SOCIAL_LINKS.email}
								class="text-gray-300 transition-colors hover:text-yellow-400"
							>
								{AUTHOR.email}
							</a>
						</div>
					</div>

					<div
						class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10"
						use:fadeUp={{ delay: 1400 }}
					>
						<div
							class="mr-6 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
						>
							<Phone class="h-6 w-6 text-blue-400" />
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-white">Phone</h4>
							<a
								href={SOCIAL_LINKS.phone}
								class="text-gray-300 transition-colors hover:text-blue-400"
							>
								{AUTHOR.phone}
							</a>
						</div>
					</div>

					<div
						class="group flex items-center rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/10"
						use:fadeUp={{ delay: 1600 }}
					>
						<div
							class="mr-6 flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
						>
							<MapPin class="h-6 w-6 text-emerald-400" />
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-white">Location</h4>
							<p class="text-gray-300">{AUTHOR.location}</p>
						</div>
					</div>
				</div>

				<!-- Enhanced Social Links -->
				<div
					class="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
					use:fadeUp={{ delay: 1800 }}
				>
					<h4
						class="mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text font-semibold text-transparent"
					>
						Follow me on
					</h4>
					<div class="flex space-x-4">
						<a
							href={SOCIAL_LINKS.github}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-lg hover:shadow-yellow-400/20"
						>
							<Github
								class="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-yellow-400"
							/>
						</a>
						<a
							href={SOCIAL_LINKS.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-400/10 hover:shadow-lg hover:shadow-blue-400/20"
						>
							<Linkedin
								class="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-blue-400"
							/>
						</a>
						<a
							href={SOCIAL_LINKS.twitter}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-purple-400/10 hover:shadow-lg hover:shadow-purple-400/20"
						>
							<Twitter
								class="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-purple-400"
							/>
						</a>
					</div>
					<div
						class="absolute right-4 bottom-4 h-1 w-1 animate-pulse rounded-full bg-purple-400/30 delay-500"
					></div>
				</div>
			</div>

			<!-- Enhanced Contact Form -->
			<div
				class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
				use:fadeLeft={{ delay: 600 }}
			>
				<!-- Background decoration -->
				<div
					class="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-r from-violet-400/10 to-purple-400/10 blur-3xl"
				></div>
				<div
					class="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-gradient-to-r from-pink-400/10 to-rose-400/10 blur-3xl"
				></div>

				<div class="relative z-10">
					<h3
						class="mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-2xl font-bold text-transparent"
					>
						Send me a message
					</h3>

					{#if submitMessage}
						<div
							class="mb-8 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-green-400 backdrop-blur-sm"
						>
							{submitMessage}
						</div>
					{/if}

					<form onsubmit={handleSubmit} class="space-y-8">
						<div class="grid gap-6 md:grid-cols-2">
							<div>
								<label for="name" class="mb-3 block font-semibold text-gray-200">Name</label>
								<input
									type="text"
									id="name"
									bind:value={formData.name}
									required
									class="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-yellow-400/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label for="email" class="mb-3 block font-semibold text-gray-200">Email</label>
								<input
									type="email"
									id="email"
									bind:value={formData.email}
									required
									class="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-yellow-400/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
									placeholder="your@email.com"
								/>
							</div>
						</div>

						<div>
							<label for="subject" class="mb-3 block font-semibold text-gray-200">Subject</label>
							<input
								type="text"
								id="subject"
								bind:value={formData.subject}
								required
								class="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-yellow-400/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
								placeholder="Project discussion"
							/>
						</div>

						<div>
							<label for="message" class="mb-3 block font-semibold text-gray-200">Message</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								rows="6"
								class="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-yellow-400/50 focus:bg-white/10 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
								placeholder="Tell me about your project..."
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							class="group relative flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{#if isSubmitting}
								<div
									class="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"
								></div>
								Sending...
							{:else}
								<Send
									class="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
								/>
								Send Message
							{/if}
							<div
								class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
