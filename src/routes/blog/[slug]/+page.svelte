<script lang="ts">
	import type { PageData } from './$types';
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';

	let { data }: { data: PageData } = $props();
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
		name: 'Binsar Dwi Jasuma',
		avatar: '/avatar.jpg',
		bio: 'Full Stack Engineer'
	}}
>
	{@const Content = data.content}
	<Content {...data.meta} />
</BlogLayout>
