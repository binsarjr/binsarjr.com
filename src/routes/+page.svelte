<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Contact from '$lib/components/Contact.svelte';
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
	<Projects />
	<Services />
	<Blog />
	<Contact />
</main>
