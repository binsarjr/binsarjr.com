<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();

	// ATS routes render bare — no nav, no footer, no decorative background.
	// Used exclusively by the PDF generation script.
	const bareRoutes = ['/cv/ats', '/resume/ats'];
	const isBare = $derived(bareRoutes.includes($page.url.pathname));
</script>

{#if isBare}
	{@render children()}
{:else}
	<div class="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
		<div class="bg-grid pointer-events-none fixed inset-0 opacity-50"></div>
		<div
			class="pointer-events-none fixed top-0 right-0 h-[60vh] w-[60vw] opacity-[0.07]"
			style="background: radial-gradient(circle at 70% 20%, var(--ember) 0%, transparent 55%);"
		></div>

		<div class="relative z-10 flex min-h-screen flex-col">
			<Navbar />
			<main class="flex-grow">
				{@render children()}
			</main>
			<Footer />
		</div>
	</div>
{/if}
