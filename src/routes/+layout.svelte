<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div
	class="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white"
>
	<!-- Background ornaments -->
	<div class="pointer-events-none fixed inset-0">
		<!-- Floating geometric shapes -->
		<div
			class="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/5 to-orange-400/5 blur-3xl"
		></div>
		<div
			class="absolute top-1/3 right-20 h-48 w-48 animate-pulse rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl delay-1000"
		></div>
		<div
			class="absolute bottom-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-emerald-400/3 to-teal-400/3 blur-3xl delay-2000"
		></div>

		<!-- Grid pattern overlay -->
		<div
			class="absolute inset-0 opacity-10"
			style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0); background-size: 60px 60px;"
		></div>

		<!-- Subtle lines -->
		<div
			class="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
		></div>
		<div
			class="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-white/3 to-transparent"
		></div>
	</div>

	<div class="relative z-10 flex min-h-screen flex-col">
		<Navbar />
		<main class="flex-grow">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>
