<!-- About.svelte -->
<script lang="ts">
	import { Code, Coffee, Zap } from 'lucide-svelte';
	import { SKILLS, AUTHOR } from '$lib/constants';
</script>

<section id="about" class="bg-gradient-to-b from-black to-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl">
				About <span class="text-yellow-400">Me</span>
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-300">
				I'm a passionate developer who loves turning ideas into reality through clean, efficient
				code
			</p>
		</div>

		<div class="grid items-center gap-12 md:grid-cols-2">
			<!-- Text Content -->
			<div class="space-y-6">
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
				<div class="space-y-4">
					<h3 class="text-xl font-semibold text-yellow-400">Technologies I work with:</h3>
					<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
						{#each [...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.tools].slice(0, 12) as tech}
							<div
								class="rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-center text-sm text-white transition-colors hover:border-yellow-400/50"
							>
								{tech}
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Features -->
			<div class="space-y-8">
				<div
					class="rounded-xl border border-gray-700 bg-gray-800 p-6 transition-colors hover:border-yellow-400/50"
				>
					<div class="mb-4 flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"
						>
							<Code class="h-6 w-6 text-yellow-400" />
						</div>
						<h3 class="text-xl font-semibold text-white">Clean Code</h3>
					</div>
					<p class="text-gray-300">
						I write maintainable, well-documented code that follows best practices and industry
						standards.
					</p>
				</div>

				<div
					class="rounded-xl border border-gray-700 bg-gray-800 p-6 transition-colors hover:border-yellow-400/50"
				>
					<div class="mb-4 flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"
						>
							<Zap class="h-6 w-6 text-yellow-400" />
						</div>
						<h3 class="text-xl font-semibold text-white">Performance</h3>
					</div>
					<p class="text-gray-300">
						I optimize applications for speed and efficiency, ensuring great user experiences across
						all devices.
					</p>
				</div>

				<div
					class="rounded-xl border border-gray-700 bg-gray-800 p-6 transition-colors hover:border-yellow-400/50"
				>
					<div class="mb-4 flex items-center">
						<div
							class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/10"
						>
							<Coffee class="h-6 w-6 text-yellow-400" />
						</div>
						<h3 class="text-xl font-semibold text-white">Problem Solving</h3>
					</div>
					<p class="text-gray-300">
						I approach complex challenges with creativity and analytical thinking to deliver
						innovative solutions.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
