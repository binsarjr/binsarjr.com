<!-- BlogLayout.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate } from '$lib/utils';
	import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-svelte';
	import { fadeUp, fadeRight } from '$lib/animations';

	export let title: string;
	export let excerpt: string = '';
	export let publishedAt: string;
	export let updatedAt: string = '';
	export let readingTime: string = '';
	export let tags: string[] = [];
	export let category: string = '';
	export let author: {
		name: string;
		avatar: string;
		bio: string;
	} = {
		name: 'Binsar Jr',
		avatar: '/avatar.jpg',
		bio: 'Full Stack Developer & Technical Writer'
	};
	export const featured: boolean = false;

	const publishDate = new Date(publishedAt);
	const updateDate = updatedAt ? new Date(updatedAt) : null;
</script>

<svelte:head>
	<title>{title} - Binsar Jr Blog</title>
	<meta name="description" content={excerpt} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={publishedAt} />
	{#if updatedAt}
		<meta property="article:modified_time" content={updatedAt} />
	{/if}
	{#each tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 pt-20 text-white"
>
	<!-- Enhanced Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<!-- Large floating orbs -->
		<div
			class="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-400/10 blur-3xl"
		></div>
		<div
			class="absolute top-1/3 right-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-blue-400/8 to-purple-400/8 blur-3xl delay-1000"
		></div>
		<div
			class="absolute bottom-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/6 to-teal-400/6 blur-3xl delay-2000"
		></div>

		<!-- Medium floating elements -->
		<div
			class="absolute top-1/2 left-20 h-24 w-24 animate-bounce rounded-full bg-gradient-to-r from-pink-400/8 to-rose-400/8 blur-2xl delay-500"
			style="animation-duration: 4s;"
		></div>
		<div
			class="absolute top-3/4 right-1/4 h-36 w-36 animate-pulse rounded-full bg-gradient-to-r from-indigo-400/7 to-cyan-400/7 blur-2xl delay-1500"
		></div>
		<div
			class="absolute top-10 right-10 h-20 w-20 animate-bounce rounded-full bg-gradient-to-r from-amber-400/9 to-yellow-400/9 blur-xl delay-3000"
			style="animation-duration: 3s;"
		></div>

		<!-- Small decorative dots -->
		<div
			class="absolute top-1/4 left-1/2 h-12 w-12 animate-ping rounded-full bg-gradient-to-r from-violet-400/15 to-purple-400/15 blur-lg delay-2500"
			style="animation-duration: 6s;"
		></div>
		<div
			class="absolute right-1/3 bottom-1/3 h-16 w-16 animate-pulse rounded-full bg-gradient-to-r from-teal-400/12 to-green-400/12 blur-lg delay-4000"
		></div>
		<div
			class="absolute top-2/3 left-10 h-8 w-8 animate-ping rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-sm delay-5000"
			style="animation-duration: 5s;"
		></div>

		<!-- Geometric shapes -->
		<div
			class="absolute top-1/5 right-1/5 h-20 w-20 animate-spin rounded-lg bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-xl delay-1000"
			style="animation-duration: 20s;"
		></div>
		<div
			class="absolute bottom-1/5 left-1/5 h-14 w-14 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/8 to-lime-400/8 blur-lg delay-3500"
		></div>

		<!-- Moving gradient lines -->
		<div
			class="absolute top-0 left-1/4 h-full w-px animate-pulse bg-gradient-to-b from-transparent via-yellow-400/10 to-transparent delay-1000"
		></div>
		<div
			class="absolute top-0 right-1/3 h-full w-px animate-pulse bg-gradient-to-b from-transparent via-blue-400/8 to-transparent delay-2000"
		></div>

		<!-- Floating particles -->
		<div
			class="absolute top-1/6 left-3/4 h-2 w-2 animate-bounce rounded-full bg-white/20 delay-1500"
			style="animation-duration: 3s;"
		></div>
		<div
			class="absolute top-2/3 left-2/3 h-3 w-3 animate-ping rounded-full bg-yellow-400/30 delay-2500"
			style="animation-duration: 4s;"
		></div>
		<div
			class="absolute right-1/6 bottom-1/6 h-1 w-1 animate-pulse rounded-full bg-purple-400/40 delay-3000"
		></div>

		<!-- Floating Knowledge Words -->
		<div
			class="absolute top-1/8 left-1/8 animate-pulse text-xs font-light text-yellow-400/25 delay-1000"
			style="font-family: 'Inter', sans-serif;"
		>
			research
		</div>
		<div
			class="absolute top-1/4 right-1/8 animate-pulse text-xs font-light text-blue-400/25 delay-2000"
			style="font-family: 'Inter', sans-serif;"
		>
			knowledge
		</div>
		<div
			class="absolute top-1/2 left-1/12 animate-pulse text-xs font-light text-emerald-400/25 delay-3000"
			style="font-family: 'Inter', sans-serif;"
		>
			discovery
		</div>
		<div
			class="absolute top-2/3 right-1/12 animate-pulse text-xs font-light text-purple-400/25 delay-4000"
			style="font-family: 'Inter', sans-serif;"
		>
			wisdom
		</div>
		<div
			class="absolute bottom-1/6 left-1/6 animate-pulse text-xs font-light text-cyan-400/25 delay-5000"
			style="font-family: 'Inter', sans-serif;"
		>
			insight
		</div>
		<div
			class="absolute right-1/6 bottom-1/8 animate-pulse text-xs font-light text-orange-400/25 delay-6000"
			style="font-family: 'Inter', sans-serif;"
		>
			learning
		</div>
		<div
			class="absolute top-3/8 left-1/5 animate-pulse text-xs font-light text-pink-400/25 delay-2500"
			style="font-family: 'Inter', sans-serif;"
		>
			analysis
		</div>
		<div
			class="absolute top-5/8 right-1/5 animate-pulse text-xs font-light text-indigo-400/25 delay-3500"
			style="font-family: 'Inter', sans-serif;"
		>
			theory
		</div>
		<div
			class="center absolute bottom-1/4 animate-pulse text-xs font-light text-teal-400/25 delay-4500"
			style="font-family: 'Inter', sans-serif; left: 45%;"
		>
			innovation
		</div>
		<div
			class="center absolute top-1/12 animate-pulse text-xs font-light text-rose-400/25 delay-1500"
			style="font-family: 'Inter', sans-serif; right: 45%;"
		>
			explore
		</div>

		<!-- Grid pattern -->
		<div
			class="absolute inset-0 opacity-5"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 80px 80px;"
		></div>

		<!-- Diagonal stripes -->
		<div
			class="absolute inset-0 opacity-3"
			style="background-image: repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.02) 100px, rgba(255,255,255,0.02) 102px);"
		></div>

		<!-- Radial gradient overlay -->
		<div
			class="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-slate-900/20"
		></div>
	</div>

	<!-- Enhanced Header -->
	<header class="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-md">
		<div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
			<button
				onclick={() => history.back()}
				class="group mb-6 inline-flex items-center text-sm text-gray-400 transition-all duration-300 hover:scale-105 hover:text-yellow-400"
				use:fadeRight
			>
				<ArrowLeft
					class="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
				/>
				Back to Blog
			</button>

			<!-- Enhanced Category Badge -->
			{#if category}
				<div class="mb-6" use:fadeUp={{ delay: 200 }}>
					<span
						class="inline-flex items-center rounded-xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-4 py-2 text-sm font-medium text-yellow-400 backdrop-blur-sm"
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</span>
				</div>
			{/if}

			<!-- Enhanced Title -->
			<h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl" use:fadeUp={{ delay: 400 }}>
				<span
					class="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
					>{title}</span
				>
			</h1>

			<!-- Enhanced Excerpt -->
			{#if excerpt}
				<p
					class="mb-8 text-lg leading-relaxed text-gray-300 md:text-xl"
					use:fadeUp={{ delay: 600 }}
				>
					{excerpt}
				</p>
			{/if}

			<!-- Enhanced Meta Information -->
			<div class="flex flex-wrap items-center gap-6 text-sm" use:fadeUp={{ delay: 800 }}>
				<!-- Enhanced Author -->
				<div
					class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
				>
					<img
						src={author.avatar}
						alt={author.name}
						class="mr-3 h-8 w-8 rounded-full border border-white/20"
					/>
					<User class="mr-2 h-4 w-4 text-blue-400" />
					<span class="text-gray-200">{author.name}</span>
				</div>

				<!-- Enhanced Published Date -->
				<div
					class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
				>
					<Calendar class="mr-2 h-4 w-4 text-green-400" />
					<span class="text-gray-200">{formatDate(publishDate, 'long')}</span>
				</div>

				<!-- Enhanced Reading Time -->
				{#if readingTime}
					<div
						class="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
					>
						<Clock class="mr-2 h-4 w-4 text-purple-400" />
						<span class="text-gray-200">{readingTime}</span>
					</div>
				{/if}
			</div>

			<!-- Enhanced Tags -->
			{#if tags.length > 0}
				<div class="mt-6 flex flex-wrap gap-3" use:fadeUp={{ delay: 1000 }}>
					{#each tags as tag}
						<span
							class="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
						>
							<Tag class="mr-2 h-3 w-3" />
							{tag}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Enhanced Updated Date -->
			{#if updateDate}
				<div
					class="mt-6 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 backdrop-blur-sm"
				>
					Last updated: {formatDate(updateDate, 'long')}
				</div>
			{/if}
		</div>
	</header>

	<!-- Enhanced Content -->
	<main class="relative z-10 mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Content ornaments -->
		<div class="pointer-events-none absolute inset-0">
			<!-- Subtle content decorations -->
			<div
				class="absolute top-10 -left-20 h-40 w-1 animate-pulse bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent delay-1000"
			></div>
			<div
				class="absolute top-20 -right-20 h-60 w-1 animate-pulse bg-gradient-to-b from-transparent via-blue-400/15 to-transparent delay-2000"
			></div>

			<!-- Corner decorations -->
			<div
				class="absolute top-0 left-0 h-8 w-8 rounded-br-full border-r border-b border-yellow-400/20"
			></div>
			<div
				class="absolute top-0 right-0 h-8 w-8 rounded-bl-full border-b border-l border-blue-400/20"
			></div>
			<div
				class="absolute bottom-0 left-0 h-8 w-8 rounded-tr-full border-t border-r border-emerald-400/20"
			></div>
			<div
				class="absolute right-0 bottom-0 h-8 w-8 rounded-tl-full border-t border-l border-purple-400/20"
			></div>

			<!-- Content Area Knowledge Words -->
			<div
				class="absolute top-1/6 -left-16 -rotate-90 transform animate-pulse text-xs font-light text-yellow-400/20 delay-2000"
				style="font-family: 'Inter', sans-serif;"
			>
				study
			</div>
			<div
				class="absolute top-1/3 -right-16 rotate-90 transform animate-pulse text-xs font-light text-blue-400/20 delay-3000"
				style="font-family: 'Inter', sans-serif;"
			>
				method
			</div>
			<div
				class="absolute top-1/2 -left-14 -rotate-90 transform animate-pulse text-xs font-light text-emerald-400/20 delay-4000"
				style="font-family: 'Inter', sans-serif;"
			>
				concept
			</div>
			<div
				class="absolute top-2/3 -right-14 rotate-90 transform animate-pulse text-xs font-light text-purple-400/20 delay-5000"
				style="font-family: 'Inter', sans-serif;"
			>
				evidence
			</div>
			<div
				class="absolute bottom-1/6 -left-12 -rotate-90 transform animate-pulse text-xs font-light text-cyan-400/20 delay-6000"
				style="font-family: 'Inter', sans-serif;"
			>
				logic
			</div>
		</div>

		<article class="prose-enhanced" use:fadeUp={{ delay: 1200 }}>
			<slot />
		</article>

		<!-- Bottom decorative elements -->
		<div class="pointer-events-none absolute right-0 bottom-0 left-0">
			<div class="mx-auto flex max-w-lg justify-center space-x-4 pb-8">
				<div class="h-1 w-8 animate-pulse rounded-full bg-yellow-400/30 delay-500"></div>
				<div class="h-1 w-12 animate-pulse rounded-full bg-blue-400/30 delay-1000"></div>
				<div class="h-1 w-6 animate-pulse rounded-full bg-purple-400/30 delay-1500"></div>
				<div class="h-1 w-10 animate-pulse rounded-full bg-emerald-400/30 delay-2000"></div>
			</div>

			<!-- Bottom Knowledge Words -->
			<div class="mx-auto flex max-w-4xl justify-between px-8 pb-4">
				<div
					class="animate-pulse text-xs font-light text-yellow-400/15 delay-3000"
					style="font-family: 'Inter', sans-serif;"
				>
					science
				</div>
				<div
					class="animate-pulse text-xs font-light text-blue-400/15 delay-3500"
					style="font-family: 'Inter', sans-serif;"
				>
					experiment
				</div>
				<div
					class="animate-pulse text-xs font-light text-purple-400/15 delay-4000"
					style="font-family: 'Inter', sans-serif;"
				>
					hypothesis
				</div>
				<div
					class="animate-pulse text-xs font-light text-emerald-400/15 delay-4500"
					style="font-family: 'Inter', sans-serif;"
				>
					conclusion
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	.bg-gradient-radial {
		background: radial-gradient(circle at center, var(--tw-gradient-stops));
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-20px);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
</style>
