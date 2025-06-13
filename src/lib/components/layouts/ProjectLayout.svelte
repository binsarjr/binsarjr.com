<!-- ProjectLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-svelte';
	import { fadeUp, fadeRight, fadeLeft } from '$lib/animations';

	export let title: string;
	export let description: string = '';
	export let image: string = '';
	export let technologies: string[] = [];
	export let githubUrl: string = '';
	export let liveUrl: string = '';
	export let category: string = '';
	export const featured: boolean = false;
	export let completedAt: string = '';
</script>

<svelte:head>
	<title>{title} - Project by Binsar Jr</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 pt-20 text-white"
>
	<!-- Tech-Inspired Dynamic Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<!-- Rotating tech orbs with multiple layers -->
		<div
			class="absolute top-16 right-8 h-40 w-40 animate-spin rounded-full bg-gradient-to-r from-cyan-400/12 to-blue-400/12 blur-2xl"
			style="animation-duration: 20s;"
		></div>
		<div
			class="absolute top-20 right-12 h-32 w-32 animate-spin rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-xl"
			style="animation-duration: 15s; animation-direction: reverse;"
		></div>

		<!-- Large pulsating code-like structures -->
		<div class="absolute top-1/4 left-16 h-56 w-56 animate-pulse" style="animation-duration: 4s;">
			<div
				class="absolute inset-0 rotate-12 transform rounded-lg bg-gradient-to-br from-yellow-400/10 to-orange-400/10 blur-3xl"
			></div>
			<div
				class="absolute inset-4 -rotate-6 transform rounded-lg bg-gradient-to-br from-yellow-500/8 to-orange-500/8 blur-2xl delay-1000"
			></div>
		</div>

		<!-- Dynamic floating code blocks -->
		<div
			class="absolute right-1/4 bottom-1/3 h-72 w-72 animate-bounce"
			style="animation-duration: 6s;"
		>
			<div
				class="absolute inset-0 rotate-45 transform rounded-2xl bg-gradient-to-br from-emerald-400/8 to-teal-400/8 blur-3xl"
			></div>
			<div
				class="absolute inset-8 -rotate-12 transform rounded-xl bg-gradient-to-br from-emerald-500/6 to-teal-500/6 blur-2xl delay-2000"
			></div>
		</div>

		<!-- Circuit-like connecting lines -->
		<div
			class="absolute top-1/3 left-1/4 h-px w-32 animate-pulse bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent delay-1000"
		></div>
		<div
			class="absolute top-1/3 left-1/4 h-16 w-px translate-x-32 animate-pulse bg-gradient-to-b from-cyan-400/30 via-blue-400/30 to-transparent delay-1500"
		></div>
		<div
			class="absolute top-1/3 left-1/4 h-px w-24 translate-x-32 translate-y-16 animate-pulse bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-transparent delay-2000"
		></div>

		<!-- Floating tech particles -->
		<div
			class="absolute top-1/5 left-1/3 h-4 w-4 animate-ping rounded-full bg-cyan-400/40 delay-500"
			style="animation-duration: 3s;"
		></div>
		<div
			class="absolute top-2/5 right-1/5 h-3 w-3 animate-bounce rounded-full bg-yellow-400/45 delay-1500"
			style="animation-duration: 4s;"
		></div>
		<div
			class="absolute bottom-1/5 left-1/5 h-2 w-2 animate-ping rounded-full bg-purple-400/50 delay-2500"
			style="animation-duration: 5s;"
		></div>
		<div
			class="absolute top-3/5 left-2/3 h-5 w-5 animate-pulse rounded-full bg-emerald-400/35 delay-3000"
		></div>

		<!-- Matrix-style code rain effect -->
		<div
			class="absolute top-0 left-1/6 h-full w-px animate-pulse bg-gradient-to-b from-transparent via-green-400/20 to-transparent delay-1000"
		></div>
		<div
			class="absolute top-0 left-1/3 h-full w-px animate-pulse bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent delay-2000"
		></div>
		<div
			class="absolute top-0 right-1/4 h-full w-px animate-pulse bg-gradient-to-b from-transparent via-blue-400/18 to-transparent delay-3000"
		></div>
		<div
			class="absolute top-0 right-1/6 h-full w-px animate-pulse bg-gradient-to-b from-transparent via-purple-400/15 to-transparent delay-4000"
		></div>

		<!-- Tech hexagons -->
		<div
			class="absolute top-1/6 right-1/3 h-20 w-20 animate-spin bg-gradient-to-r from-blue-400/15 to-cyan-400/15 blur-lg"
			style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); animation-duration: 25s;"
		></div>
		<div
			class="absolute bottom-1/6 left-2/5 h-16 w-16 animate-spin bg-gradient-to-r from-purple-400/18 to-pink-400/18 blur-md delay-1000"
			style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); animation-duration: 18s; animation-direction: reverse;"
		></div>

		<!-- Dynamic geometric overlays -->
		<div
			class="absolute top-1/4 right-1/5 h-24 w-24 rotate-45 transform animate-pulse bg-gradient-to-br from-yellow-400/12 to-orange-400/12 blur-xl delay-2000"
		></div>
		<div
			class="absolute right-1/3 bottom-1/4 h-18 w-18 -rotate-30 transform animate-bounce bg-gradient-to-br from-emerald-400/15 to-teal-400/15 blur-lg delay-3000"
			style="animation-duration: 7s;"
		></div>

		<!-- Advanced grid pattern with tech feel -->
		<div
			class="absolute inset-0 opacity-6"
			style="background-image: 
				radial-gradient(circle at 2px 2px, rgba(34, 211, 238, 0.15) 1px, transparent 0),
				radial-gradient(circle at 50px 50px, rgba(168, 85, 247, 0.1) 1px, transparent 0);
			background-size: 100px 100px, 80px 80px;"
		></div>

		<!-- Code-like pattern overlay -->
		<div
			class="absolute inset-0 opacity-4"
			style="background-image: 
				repeating-linear-gradient(90deg, transparent 0px, transparent 48px, rgba(34, 211, 238, 0.08) 48px, rgba(34, 211, 238, 0.08) 50px),
				repeating-linear-gradient(0deg, transparent 0px, transparent 48px, rgba(168, 85, 247, 0.06) 48px, rgba(168, 85, 247, 0.06) 50px);"
		></div>

		<!-- Floating binary-like elements -->
		<div
			class="absolute top-1/8 left-1/8 animate-pulse text-xs text-cyan-400/20 delay-1000"
			style="font-family: 'Courier New', monospace;"
		>
			01010011
		</div>
		<div
			class="absolute top-3/8 right-1/8 animate-pulse text-xs text-purple-400/20 delay-2000"
			style="font-family: 'Courier New', monospace;"
		>
			11001100
		</div>
		<div
			class="absolute bottom-1/8 left-1/4 animate-pulse text-xs text-green-400/20 delay-3000"
			style="font-family: 'Courier New', monospace;"
		>
			10101010
		</div>

		<!-- Dynamic radial overlays -->
		<div
			class="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-slate-900/30"
		></div>
		<div
			class="bg-gradient-radial absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse from-cyan-400/5 via-blue-400/3 to-transparent delay-2000"
			style="animation-duration: 8s;"
		></div>
	</div>

	<!-- Enhanced Header -->
	<header class="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
		<!-- Tech header ornaments -->
		<div class="pointer-events-none absolute inset-0">
			<!-- Header circuit lines -->
			<div
				class="absolute top-4 left-1/5 h-px w-24 animate-pulse bg-gradient-to-r from-transparent via-cyan-400/25 to-blue-400/25 delay-1000"
			></div>
			<div
				class="absolute top-4 right-1/5 h-px w-24 animate-pulse bg-gradient-to-l from-transparent via-purple-400/25 to-pink-400/25 delay-2000"
			></div>

			<!-- Tech corner accents -->
			<div class="absolute top-0 left-0 h-12 w-12 border-r border-b border-cyan-400/15">
				<div
					class="absolute -right-1 -bottom-1 h-2 w-2 animate-ping rounded-full bg-cyan-400/40 delay-1000"
					style="animation-duration: 3s;"
				></div>
			</div>
			<div class="absolute top-0 right-0 h-12 w-12 border-b border-l border-purple-400/15">
				<div
					class="absolute -bottom-1 -left-1 h-2 w-2 animate-pulse rounded-full bg-purple-400/40 delay-2000"
				></div>
			</div>

			<!-- Floating tech indicators -->
			<div
				class="absolute top-1/2 left-4 h-6 w-6 animate-spin bg-gradient-to-br from-yellow-400/15 to-orange-400/15 blur-sm delay-1500"
				style="animation-duration: 15s; clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"
			></div>
			<div
				class="absolute top-1/2 right-4 h-6 w-6 animate-bounce bg-gradient-to-br from-emerald-400/15 to-teal-400/15 blur-sm delay-2500"
				style="animation-duration: 4s;"
			></div>

			<!-- Header separator with nodes -->
			<div
				class="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
			>
				<div
					class="absolute top-0 left-1/4 h-1 w-1 animate-ping rounded-full bg-blue-400/50 delay-1000"
					style="animation-duration: 4s;"
				></div>
				<div
					class="absolute top-0 right-1/4 h-1 w-1 animate-pulse rounded-full bg-purple-400/50 delay-2000"
				></div>
			</div>
		</div>

		<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="group mb-6 inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
				use:fadeRight
			>
				<ArrowLeft
					class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				/>
				Back to Projects
			</button>

			<div class="grid gap-12 lg:grid-cols-2">
				<!-- Enhanced Project Info -->
				<div use:fadeRight={{ delay: 200 }}>
					<!-- Enhanced Category Badge -->
					{#if category}
						<div class="mb-6" use:fadeUp={{ delay: 400 }}>
							<span
								class="inline-flex items-center rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm"
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</span>
						</div>
					{/if}

					<!-- Enhanced Title -->
					<h1 class="mb-6 text-4xl font-bold md:text-5xl" use:fadeUp={{ delay: 600 }}>
						<span
							class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
							>{title}</span
						>
					</h1>

					<!-- Enhanced Description -->
					{#if description}
						<p class="mb-8 text-lg leading-relaxed text-gray-300" use:fadeUp={{ delay: 800 }}>
							{description}
						</p>
					{/if}

					<!-- Enhanced Action Buttons -->
					<div class="mb-8 flex flex-wrap gap-4" use:fadeUp={{ delay: 1000 }}>
						{#if liveUrl}
							<a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group relative inline-flex items-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-300 hover:shadow-2xl hover:shadow-yellow-400/25"
							>
								<ExternalLink
									class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
								/>
								View Live
								<div
									class="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								></div>
							</a>
						{/if}
						{#if githubUrl}
							<a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="group relative inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
							>
								<Github
									class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
								/>
								View Code
							</a>
						{/if}
					</div>

					<!-- Enhanced Technologies -->
					{#if technologies.length > 0}
						<div class="mb-6" use:fadeUp={{ delay: 1200 }}>
							<h3
								class="mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-sm font-semibold text-transparent"
							>
								Technologies Used
							</h3>
							<div class="flex flex-wrap gap-3">
								{#each technologies as tech}
									<span
										class="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
									>
										<Tag class="mr-2 h-3 w-3" />
										{tech}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Enhanced Completion Date -->
					{#if completedAt}
						<div
							class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm"
						>
							<Calendar class="mr-2 h-4 w-4 text-green-400" />
							<span class="text-gray-200"
								>Completed: {new Date(completedAt).toLocaleDateString()}</span
							>
						</div>
					{/if}
				</div>

				<!-- Enhanced Project Image -->
				{#if image}
					<div class="flex items-center justify-center" use:fadeLeft={{ delay: 200 }}>
						<div class="group relative">
							<img
								src={image}
								alt={title}
								class="max-w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-105"
								loading="lazy"
							/>
							<div
								class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</header>

	<!-- Enhanced Content -->
	<main class="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Tech-inspired content ornaments -->
		<div class="pointer-events-none absolute inset-0">
			<!-- Side code brackets -->
			<div
				class="absolute top-0 left-0 h-full w-8 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
			>
				<div class="absolute top-8 left-2 font-mono text-lg text-cyan-400/30">{'{'}</div>
				<div class="absolute bottom-8 left-2 font-mono text-lg text-cyan-400/30">{'}'}</div>
			</div>
			<div
				class="absolute top-0 right-0 h-full w-8 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
			>
				<div class="absolute top-8 right-2 font-mono text-lg text-purple-400/30">[</div>
				<div class="absolute right-2 bottom-8 font-mono text-lg text-purple-400/30">]</div>
			</div>

			<!-- Floating code elements -->
			<div
				class="absolute top-1/4 -left-8 h-12 w-12 animate-spin bg-gradient-to-br from-yellow-400/15 to-orange-400/15 blur-lg delay-1000"
				style="animation-duration: 12s; clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);"
			></div>
			<div
				class="absolute top-1/2 -right-8 h-10 w-10 animate-bounce bg-gradient-to-br from-emerald-400/18 to-teal-400/18 blur-md delay-2000"
				style="animation-duration: 5s;"
			></div>
			<div
				class="absolute bottom-1/4 -left-6 h-8 w-8 animate-ping bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-sm delay-3000"
				style="animation-duration: 4s;"
			></div>

			<!-- Tech divider lines with nodes -->
			<div class="absolute top-1/3 left-1/2 -translate-x-1/2">
				<div class="flex items-center space-x-4">
					<div
						class="h-px w-16 animate-pulse bg-gradient-to-r from-transparent via-cyan-400/25 to-cyan-400/25 delay-1000"
					></div>
					<div
						class="h-2 w-2 animate-ping rounded-full bg-cyan-400/40 delay-1500"
						style="animation-duration: 3s;"
					></div>
					<div
						class="h-px w-8 animate-pulse bg-gradient-to-r from-cyan-400/25 via-blue-400/25 to-blue-400/25 delay-2000"
					></div>
					<div class="h-3 w-3 animate-pulse rounded-full bg-blue-400/35 delay-2500"></div>
					<div
						class="h-px w-12 animate-pulse bg-gradient-to-r from-blue-400/25 via-purple-400/25 to-transparent delay-3000"
					></div>
				</div>
			</div>

			<!-- Corner tech indicators -->
			<div class="absolute top-4 left-4">
				<div class="relative">
					<div class="h-8 w-8 border-t-2 border-l-2 border-cyan-400/25"></div>
					<div
						class="absolute -top-1 -left-1 h-2 w-2 animate-ping rounded-full bg-cyan-400/40 delay-1000"
						style="animation-duration: 4s;"
					></div>
				</div>
			</div>
			<div class="absolute top-4 right-4">
				<div class="relative">
					<div class="h-8 w-8 border-t-2 border-r-2 border-purple-400/25"></div>
					<div
						class="absolute -top-1 -right-1 h-2 w-2 animate-pulse rounded-full bg-purple-400/40 delay-2000"
					></div>
				</div>
			</div>
			<div class="absolute bottom-4 left-4">
				<div class="relative">
					<div class="h-8 w-8 border-b-2 border-l-2 border-emerald-400/25"></div>
					<div
						class="absolute -bottom-1 -left-1 h-2 w-2 animate-bounce rounded-full bg-emerald-400/40 delay-3000"
						style="animation-duration: 3s;"
					></div>
				</div>
			</div>
			<div class="absolute right-4 bottom-4">
				<div class="relative">
					<div class="h-8 w-8 border-r-2 border-b-2 border-yellow-400/25"></div>
					<div
						class="absolute -right-1 -bottom-1 h-2 w-2 animate-ping rounded-full bg-yellow-400/40 delay-4000"
						style="animation-duration: 5s;"
					></div>
				</div>
			</div>

			<!-- Dynamic progress-like bars -->
			<div class="absolute top-1/6 left-8">
				<div class="space-y-2">
					<div
						class="h-1 w-20 animate-pulse rounded-full bg-gradient-to-r from-cyan-400/20 to-cyan-400/40 delay-1000"
					></div>
					<div
						class="h-1 w-16 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-blue-400/40 delay-1500"
					></div>
					<div
						class="h-1 w-12 animate-pulse rounded-full bg-gradient-to-r from-purple-400/20 to-purple-400/40 delay-2000"
					></div>
				</div>
			</div>
			<div class="absolute top-1/6 right-8">
				<div class="space-y-2">
					<div
						class="h-1 w-18 animate-pulse rounded-full bg-gradient-to-l from-yellow-400/20 to-yellow-400/40 delay-2000"
					></div>
					<div
						class="h-1 w-14 animate-pulse rounded-full bg-gradient-to-l from-orange-400/20 to-orange-400/40 delay-2500"
					></div>
					<div
						class="h-1 w-10 animate-pulse rounded-full bg-gradient-to-l from-red-400/20 to-red-400/40 delay-3000"
					></div>
				</div>
			</div>
		</div>

		<article class="prose-enhanced" use:fadeUp={{ delay: 1400 }}>
			<slot />
		</article>

		<!-- Dynamic bottom tech elements -->
		<div class="pointer-events-none absolute right-0 bottom-0 left-0">
			<!-- Tech footer with animated elements -->
			<div class="mx-auto flex max-w-4xl items-center justify-center space-x-8 pb-8">
				<div
					class="h-px w-12 animate-pulse bg-gradient-to-r from-transparent via-cyan-400/30 to-cyan-400/30 delay-1000"
				></div>
				<div
					class="h-3 w-3 animate-spin rounded-full border border-blue-400/40 delay-1500"
					style="animation-duration: 8s;"
				></div>
				<div
					class="h-px w-16 animate-pulse bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-purple-400/30 delay-2000"
				></div>
				<div
					class="h-2 w-2 animate-ping rounded-full bg-purple-400/40 delay-2500"
					style="animation-duration: 4s;"
				></div>
				<div
					class="h-px w-8 animate-pulse bg-gradient-to-r from-purple-400/30 via-emerald-400/30 to-emerald-400/30 delay-3000"
				></div>
				<div
					class="h-4 w-4 animate-pulse bg-gradient-to-br from-emerald-400/20 to-teal-400/20 delay-3500"
					style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);"
				></div>
				<div
					class="h-px w-14 animate-pulse bg-gradient-to-r from-emerald-400/30 via-yellow-400/30 to-transparent delay-4000"
				></div>
			</div>
		</div>
	</main>
</div>

<style>
	/* Tech-inspired animations */
	@keyframes techFloat {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		25% {
			transform: translateY(-15px) rotate(5deg);
		}
		50% {
			transform: translateY(-8px) rotate(0deg);
		}
		75% {
			transform: translateY(-20px) rotate(-3deg);
		}
	}

	@keyframes circuitPulse {
		0%,
		100% {
			opacity: 0.1;
			transform: scale(1);
		}
		50% {
			opacity: 0.3;
			transform: scale(1.1);
		}
	}

	@keyframes matrixRain {
		0% {
			opacity: 0;
			transform: translateY(-10px);
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(20px);
		}
	}

	@keyframes codeGlow {
		0%,
		100% {
			text-shadow: 0 0 5px currentColor;
			opacity: 0.2;
		}
		50% {
			text-shadow:
				0 0 10px currentColor,
				0 0 20px currentColor;
			opacity: 0.4;
		}
	}

	.animate-tech-float {
		animation: techFloat 10s ease-in-out infinite;
	}

	.animate-circuit-pulse {
		animation: circuitPulse 4s ease-in-out infinite;
	}

	.animate-matrix-rain {
		animation: matrixRain 3s linear infinite;
	}

	.animate-code-glow {
		animation: codeGlow 2s ease-in-out infinite;
	}

	/* Tech grid background */
	.tech-grid {
		background-image:
			linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px),
			radial-gradient(circle at 50px 50px, rgba(168, 85, 247, 0.1) 2px, transparent 2px);
		background-size:
			100px 100px,
			100px 100px,
			100px 100px;
	}

	/* Gradient radial for tech effects */
	.bg-gradient-radial {
		background: radial-gradient(circle at center, var(--tw-gradient-stops));
	}

	/* Monospace font for code elements */
	.font-mono {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
	}
</style>
