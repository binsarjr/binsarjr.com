<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Binsar Dwi Jasuma — Full Stack Engineer</title>
	<meta
		name="description"
		content="Personal site of Binsar Dwi Jasuma — full-stack engineer from Yogyakarta. Selected projects, services, and journal."
	/>
</svelte:head>

<Hero />
<About />
<Projects />
<Services />
<Blog />
<Contact />
