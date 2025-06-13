<!-- Hero.svelte -->
<script lang="ts">
	import { ChevronDown, Github, Linkedin, Mail } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS, SKILLS } from '$lib/constants';
	import { scrollToSection } from '$lib/utils';
</script>

<section
	id="hero"
	class="relative flex min-h-screen items-center justify-center overflow-hidden pt-14 pb-30"
>
	<!-- Animated Background -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-emerald-900/20"
	></div>

	<!-- Floating Elements -->
	<div
		class="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/10 blur-3xl"
	></div>
	<div
		class="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl delay-1000"
	></div>
	<div
		class="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-r from-emerald-400/5 to-teal-400/5 blur-3xl delay-2000"
	></div>

	<!-- Safe zone container -->
	<div class="relative z-10 mx-auto max-w-7xl px-4 pt-8 text-center sm:px-6 md:pt-12 lg:px-8">
		<div class="space-y-8">
			<!-- Profile Image with modern design -->
			<div
				class="mx-auto h-36 w-36 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 shadow-2xl shadow-yellow-400/20"
			>
				<div
					class="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm"
				>
					<span
						class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-4xl font-bold text-transparent"
						>BJ</span
					>
				</div>
			</div>

			<!-- Main Heading with enhanced typography -->
			<div class="space-y-6">
				<h1 class="text-5xl font-bold md:text-7xl lg:text-8xl">
					<span
						class="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
						>Hi, I'm</span
					>
					<span
						class="block animate-pulse bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
						>{AUTHOR.name}</span
					>
				</h1>
				<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
					{AUTHOR.bio}
				</p>
				<!-- Subtitle -->
				<p class="text-lg font-light text-gray-400">
					{AUTHOR.subtitle}
				</p>
			</div>

			<!-- Tech Stack with glassmorphism effect -->
			<div class="flex flex-wrap justify-center gap-3 text-sm md:text-base">
				{#each SKILLS.frontend.slice(0, 5) as skill}
					<span
						class="rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-200 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/10 hover:text-yellow-400 hover:shadow-yellow-400/20"
					>
						{skill}
					</span>
				{/each}
			</div>

			<!-- CTA Buttons with modern design -->
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					onclick={() => scrollToSection('projects')}
					class="group relative rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
				>
					<span class="relative z-10">View My Work</span>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="group relative rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
				>
					<span class="relative z-10">Get In Touch</span>
				</button>
			</div>

			<!-- Social Links with hover effects -->
			<div class="flex justify-center space-x-8">
				<a
					href={SOCIAL_LINKS.github}
					target="_blank"
					rel="noopener noreferrer"
					class="group rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-white hover:shadow-lg hover:shadow-yellow-400/20"
				>
					<Github class="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
				</a>
				<a
					href={SOCIAL_LINKS.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="group rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white hover:shadow-lg hover:shadow-blue-400/20"
				>
					<Linkedin class="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
				</a>
				<a
					href={SOCIAL_LINKS.email}
					class="group rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-green-400/50 hover:bg-green-400/10 hover:text-white hover:shadow-lg hover:shadow-green-400/20"
				>
					<Mail class="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator with improved design -->
	<button
		onclick={() => scrollToSection('about')}
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce rounded-full border border-white/20 bg-white/5 p-2 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-yellow-400/50 hover:text-yellow-400"
	>
		<ChevronDown class="h-6 w-6" />
	</button>

	<!-- Enhanced geometric patterns -->
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<!-- Grid pattern -->
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 50px 50px;"
		></div>

		<!-- Floating dots with different sizes and colors -->
		<div
			class="absolute top-1/4 left-1/4 h-3 w-3 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-sm"
		></div>
		<div
			class="absolute top-1/3 right-1/3 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur-sm delay-1000"
		></div>
		<div
			class="absolute right-1/4 bottom-1/4 h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 blur-sm delay-2000"
		></div>
		<div
			class="absolute top-1/2 left-1/6 h-1 w-1 animate-pulse rounded-full bg-white/30 delay-500"
		></div>
		<div
			class="absolute right-1/6 bottom-1/3 h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-pink-400/30 to-rose-400/30 delay-1500"
		></div>

		<!-- Subtle lines -->
		<div
			class="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
		></div>
		<div
			class="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
		></div>
	</div>
</section>
