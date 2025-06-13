<!-- Hero.svelte -->
<script lang="ts">
	import { ChevronDown, Github, Linkedin, Mail } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS, SKILLS } from '$lib/constants';
	import { scrollToSection } from '$lib/utils';
</script>

<section id="hero" class="relative flex min-h-screen items-center justify-center pt-16">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<div class="space-y-8">
			<!-- Profile Image -->
			<div
				class="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1"
			>
				<div class="flex h-full w-full items-center justify-center rounded-full bg-black">
					<span class="text-4xl font-bold text-yellow-400">BJ</span>
				</div>
			</div>

			<!-- Main Heading -->
			<div class="space-y-4">
				<h1 class="text-5xl font-bold md:text-7xl">
					<span class="text-white">Hi, I'm</span>
					<span class="block text-yellow-400">{AUTHOR.name}</span>
				</h1>
				<p class="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl">
					{AUTHOR.bio}
				</p>
			</div>

			<!-- Tech Stack -->
			<div class="flex flex-wrap justify-center gap-4 text-sm md:text-base">
				{#each SKILLS.frontend.slice(0, 5) as skill}
					<span
						class="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-yellow-400"
					>
						{skill}
					</span>
				{/each}
			</div>

			<!-- CTA Buttons -->
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					onclick={() => scrollToSection('projects')}
					class="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
				>
					View My Work
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="rounded-lg border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition-colors hover:bg-yellow-400/10"
				>
					Get In Touch
				</button>
			</div>

			<!-- Social Links -->
			<div class="flex justify-center space-x-6">
				<a
					href={SOCIAL_LINKS.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-yellow-400"
				>
					<Github class="h-6 w-6" />
				</a>
				<a
					href={SOCIAL_LINKS.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors hover:text-yellow-400"
				>
					<Linkedin class="h-6 w-6" />
				</a>
				<a href={SOCIAL_LINKS.email} class="text-gray-400 transition-colors hover:text-yellow-400">
					<Mail class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<button
		onclick={() => scrollToSection('about')}
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-yellow-400"
	>
		<ChevronDown class="h-8 w-8" />
	</button>

	<!-- Background Pattern -->
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent"
		></div>
		<div
			class="absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/20"
		></div>
		<div
			class="absolute top-1/3 right-1/3 h-1 w-1 animate-pulse rounded-full bg-yellow-400/30 delay-1000"
		></div>
		<div
			class="absolute right-1/4 bottom-1/4 h-3 w-3 animate-pulse rounded-full bg-yellow-400/10 delay-2000"
		></div>
	</div>
</section>
