<script lang="ts">
	import type { PageData } from './$types';
	import ProjectLayout from '$lib/components/layouts/ProjectLayout.svelte';

	export let data: PageData;
</script>

<ProjectLayout
	title={data.meta.title}
	description={data.meta.description}
	image={data.meta.image}
	technologies={data.meta.technologies || []}
	githubUrl={data.meta.repository}
	liveUrl={data.meta.live}
	category={data.meta.category}
	completedAt={data.meta.completedDate}
>
	<svelte:component this={data.content} {...data.meta} />
</ProjectLayout>
