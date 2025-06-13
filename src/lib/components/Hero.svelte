<!-- Hero.svelte -->
<script lang="ts">
	import { ChevronDown, Github, Linkedin, Mail } from 'lucide-svelte';
	import { AUTHOR, SOCIAL_LINKS, SKILLS } from '$lib/constants';
	import { scrollToSection } from '$lib/utils';
	import { services } from '$lib/data/services';
	import { onMount } from 'svelte';

	// Typing animation variables
	let typingText = '';
	let currentTextIndex = 0;
	let currentCharIndex = 0;
	let isDeleting = false;
	let typingSpeed = 100;

	// Statistics counter variables
	let projectsCount = 0;
	let clientsCount = 0;
	let experienceYears = 0;

	// Statistics targets
	const stats = {
		projects: 50,
		clients: 30,
		experience: 5
	};

	// Dynamically get service titles for typing animation
	const texts = [
		'Web Development 💻',
		'Bot Development 🤖',
		'Data Scraping 📊',
		'DevOps & Cloud ☁️',
		'Tech Consulting 💡'
	];

	onMount(() => {
		const typeWriter = () => {
			const currentText = texts[currentTextIndex];

			if (isDeleting) {
				typingText = currentText.substring(0, currentCharIndex - 1);
				currentCharIndex--;
				typingSpeed = 50;
			} else {
				typingText = currentText.substring(0, currentCharIndex + 1);
				currentCharIndex++;
				typingSpeed = 100;
			}

			if (!isDeleting && currentCharIndex === currentText.length) {
				setTimeout(() => {
					isDeleting = true;
					typingSpeed = 50;
				}, 2000);
			} else if (isDeleting && currentCharIndex === 0) {
				isDeleting = false;
				currentTextIndex = (currentTextIndex + 1) % texts.length;
			}

			setTimeout(typeWriter, typingSpeed);
		};

		// Animated counters
		const animateCounter = (target: number, setValue: (value: number) => void, duration = 2000) => {
			let start = 0;
			const increment = target / (duration / 16);

			const timer = setInterval(() => {
				start += increment;
				if (start >= target) {
					setValue(target);
					clearInterval(timer);
				} else {
					setValue(Math.floor(start));
				}
			}, 16);
		};

		typeWriter();

		// Start counters with delay
		setTimeout(() => {
			animateCounter(stats.projects, (val) => (projectsCount = val));
			animateCounter(stats.clients, (val) => (clientsCount = val));
			animateCounter(stats.experience, (val) => (experienceYears = val));
		}, 1000);
	});
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
				class="mx-auto h-40 w-40 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 shadow-2xl shadow-yellow-400/20 transition-all duration-300 hover:scale-105"
			>
				<div
					class="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm"
				>
					<img
						src="/profile.jpeg"
						alt="{AUTHOR.name} Profile"
						class="h-full w-full rounded-full object-cover"
						loading="eager"
					/>
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
				<!-- Typing Animation dengan design lebih menarik -->
				<div class="flex h-20 items-center justify-center">
					<div class="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-sm">
						<p class="text-2xl font-light text-gray-300 md:text-3xl lg:text-4xl">
							Saya ahli dalam <span
								class="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text font-bold text-transparent"
								>{typingText}</span
							><span class="animate-pulse text-yellow-400">|</span>
						</p>
					</div>
				</div>

				<!-- Animated Statistics -->
				<div class="my-8 grid grid-cols-3 gap-4 md:gap-8">
					<div
						class="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
					>
						<div
							class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
						>
							{projectsCount}+
						</div>
						<div class="mt-1 text-sm text-gray-400 md:text-base">Projects Completed</div>
					</div>
					<div
						class="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
					>
						<div
							class="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
						>
							{clientsCount}+
						</div>
						<div class="mt-1 text-sm text-gray-400 md:text-base">Happy Clients</div>
					</div>
					<div
						class="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
					>
						<div
							class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
						>
							{experienceYears}+
						</div>
						<div class="mt-1 text-sm text-gray-400 md:text-base">Years Experience</div>
					</div>
				</div>

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

			<!-- CTA Buttons dengan copy yang lebih menarik -->
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					onclick={() => scrollToSection('projects')}
					class="group relative rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
				>
					<span class="relative z-10">🚀 Lihat Portfolio Saya</span>
					<div
						class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="group relative rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
				>
					<span class="relative z-10">💬 Mulai Project Bersama</span>
				</button>
			</div>

			<!-- Social proof dengan testimonial singkat -->
			<div
				class="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
			>
				<div class="mb-3 flex items-center justify-center">
					<div class="flex text-yellow-400">
						{'⭐'.repeat(5)}
					</div>
				</div>
				<blockquote class="text-center text-gray-300 italic">
					"Binsar sangat professional dan hasil kerjanya selalu melampaui ekspektasi. Highly
					recommended!"
				</blockquote>
				<cite class="mt-2 block text-center text-sm text-gray-400">- Client dari Jakarta</cite>
			</div>

			<!-- Social Links dengan hover effects -->
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
