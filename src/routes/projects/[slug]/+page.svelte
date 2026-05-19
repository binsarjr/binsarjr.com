<script lang="ts">
	import type { PageData } from './$types';
	import ProjectLayout from '$lib/components/layouts/ProjectLayout.svelte';

	let { data }: { data: PageData } = $props();
</script>

<ProjectLayout
	title={data.meta.title}
	description={(data.meta as any).description || data.meta.excerpt || ''}
	image={(data.meta as any).image || ''}
	technologies={(data.meta as any).technologies || []}
	githubUrl={(data.meta as any).githubUrl || ''}
	liveUrl={(data.meta as any).liveUrl || ''}
	category={data.meta.category || ''}
	completedAt={(data.meta as any).completedAt || ''}
>
	{@const Content = data.content}
	<Content {...data.meta} />
</ProjectLayout>
