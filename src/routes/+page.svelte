<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import LazyComponent from '$lib/components/LazyComponent.svelte';

	// Lazy load components for better performance
	const Projects = () => import('$lib/components/Projects.svelte');
	const Services = () => import('$lib/components/Services.svelte');
	const Blog = () => import('$lib/components/Blog.svelte');
	const Contact = () => import('$lib/components/Contact.svelte');
</script>

<svelte:head>
	<title>Binsar Jr - Programmer & Developer</title>
	<meta
		name="description"
		content="Personal website of Binsar Jr - Full Stack Developer specializing in modern web technologies"
	/>
</svelte:head>

<main class="min-h-screen bg-black text-white">
	<Hero />
	<About />
	<LazyComponent component={Projects} />
	<LazyComponent component={Services} />
	<LazyComponent component={Blog} />
	<LazyComponent component={Contact} />
</main>
