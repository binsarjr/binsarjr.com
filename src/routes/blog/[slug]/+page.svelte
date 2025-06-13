<script lang="ts">
	import type { PageData } from './$types';
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';

	export let data: PageData;
</script>

<BlogLayout
	title={data.meta.title}
	excerpt={data.meta.excerpt || ''}
	publishedAt={data.meta.publishedAt}
	updatedAt={data.meta.updatedAt || ''}
	readingTime={data.meta.readingTime || ''}
	tags={data.meta.tags || []}
	category={data.meta.category || ''}
	author={data.meta.author || {
		name: 'Binsar Jr',
		avatar: '/avatar.jpg',
		bio: 'Full Stack Developer & Technical Writer'
	}}
>
	<svelte:component this={data.content} {...data.meta} />
</BlogLayout>
