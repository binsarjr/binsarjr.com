<!-- About.svelte -->
<script lang="ts">
	import { Code, Coffee, Zap } from 'lucide-svelte';
	import { SKILLS, AUTHOR } from '$lib/constants';
	import { fadeUp, fadeLeft, fadeRight } from '$lib/animations';
	import { onMount } from 'svelte';

	let parallaxOffset = 0;
	let aboutSection: HTMLElement;

	onMount(() => {
		const handleScroll = () => {
			if (aboutSection) {
				const rect = aboutSection.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);

				// Normalize scroll progress between -1 and 1
				const normalizedProgress = Math.max(-1, Math.min(1, (scrollProgress - 0.5) * 2));

				// Calculate parallax offset (positive = move right, negative = move left)
				parallaxOffset = normalizedProgress * 300; // Adjust multiplier for speed
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial call

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section id="about" class="relative overflow-hidden py-20" bind:this={aboutSection}>
	<!-- Background decorations -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"
	></div>
	<div
		class="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-r from-yellow-400/5 to-orange-400/5 blur-3xl"
	></div>
	<div
		class="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Parallax "Hire Me" Background Text - Inside Container -->
		<div
			class="pointer-events-none absolute top-0 left-4 overflow-hidden select-none sm:left-6 lg:left-8"
			style="transform: translateX({parallaxOffset}px)"
		>
			<div
				class="text-[16vw] leading-none font-black tracking-widest whitespace-nowrap text-white/[0.04] lg:text-[12vw] xl:text-[10vw]"
			>
				HIRE ME
			</div>
		</div>

		<div class="mb-16 text-center" use:fadeUp>
			<h2 class="mb-4 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 200 }}>
				<span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
					>About</span
				>
				<span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
					Me</span
				>
			</h2>
			<p
				class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300"
				use:fadeUp={{ delay: 400 }}
			>
				I'm a passionate developer who loves turning ideas into reality through clean, efficient
				code
			</p>
		</div>

		<div class="grid items-center gap-12 md:grid-cols-2">
			<!-- Text Content -->
			<div class="space-y-6" use:fadeRight={{ delay: 600 }}>
				<p class="text-lg leading-relaxed text-gray-300">
					{AUTHOR.bio}. I specialize in creating modern, scalable web applications. I'm passionate
					about writing clean, maintainable code and staying up-to-date with the latest
					technologies.
				</p>

				<p class="text-lg leading-relaxed text-gray-300">
					When I'm not coding, you can find me exploring new frameworks, contributing to open-source
					projects, or sharing my knowledge through technical writing and mentoring.
				</p>

				<!-- Skills -->
				<div class="space-y-4" use:fadeUp={{ delay: 800 }}>
					<h3
						class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-xl font-semibold text-transparent"
					>
						Technologies I work with:
					</h3>
					<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
						{#each [...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.tools].slice(0, 12) as tech}
							<div
								class="group relative rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-gray-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
							>
								{tech}
								<div
									class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/10 to-orange-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Enhanced Features with glassmorphism -->
			<div class="space-y-6" use:fadeLeft={{ delay: 600 }}>
				<div
					class="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-yellow-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-yellow-400/10"
					use:fadeUp={{ delay: 800 }}
				>
					<div class="mb-6 flex items-center">
						<div
							class="mr-4 flex h-14 w-14 items-center justify-center rounded-xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm"
						>
							<Code class="h-7 w-7 text-yellow-400" />
						</div>
						<h3
							class="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent"
						>
							Clean Code
						</h3>
					</div>
					<p class="leading-relaxed text-gray-300">
						I write maintainable, well-documented code that follows best practices and industry
						standards.
					</p>
					<!-- Decorative element -->
					<div
						class="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-yellow-400/30"
					></div>
				</div>

				<div
					class="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-400/10"
					use:fadeUp={{ delay: 1000 }}
				>
					<div class="mb-6 flex items-center">
						<div
							class="mr-4 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm"
						>
							<Zap class="h-7 w-7 text-blue-400" />
						</div>
						<h3
							class="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent"
						>
							Performance
						</h3>
					</div>
					<p class="leading-relaxed text-gray-300">
						I optimize applications for speed and efficiency, ensuring great user experiences across
						all devices.
					</p>
					<div
						class="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-blue-400/30 delay-500"
					></div>
				</div>

				<div
					class="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-emerald-400/10"
					use:fadeUp={{ delay: 1200 }}
				>
					<div class="mb-6 flex items-center">
						<div
							class="mr-4 flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 backdrop-blur-sm"
						>
							<Coffee class="h-7 w-7 text-emerald-400" />
						</div>
						<h3
							class="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-xl font-semibold text-transparent"
						>
							Problem Solving
						</h3>
					</div>
					<p class="leading-relaxed text-gray-300">
						I approach complex challenges with creativity and analytical thinking to deliver
						innovative solutions.
					</p>
					<div
						class="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-emerald-400/30 delay-1000"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>
