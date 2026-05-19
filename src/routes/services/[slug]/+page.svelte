<script lang="ts">
	import type { PageData } from './$types';
	import ServiceLayout from '$lib/components/layouts/ServiceLayout.svelte';

	let { data }: { data: PageData } = $props();
</script>

<ServiceLayout
	title={data.meta.title}
	excerpt={data.meta.excerpt || ''}
	category={data.meta.category || ''}
	features={(data.meta as any).features || []}
	technologies={(data.meta as any).technologies || []}
	pricing={(data.meta as any).pricing || { starting: '', description: '' }}
	duration={(data.meta as any).duration || ''}
	deliverables={(data.meta as any).deliverables || []}
>
	{@const Content = data.content}
	<Content {...data.meta} />
</ServiceLayout>
