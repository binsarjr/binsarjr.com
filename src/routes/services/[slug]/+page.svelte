<script lang="ts">
	import type { PageData } from './$types';
	import ServiceLayout from '$lib/components/layouts/ServiceLayout.svelte';

	export let data: PageData;
</script>

<ServiceLayout
	title={data.meta.title}
	excerpt={data.meta.description}
	category={data.meta.category}
	features={data.meta.features || []}
	technologies={data.meta.technologies || []}
	pricing={{ starting: data.meta.price || '', description: data.meta.priceDescription || '' }}
	duration={data.meta.duration || ''}
	deliverables={data.meta.deliverables || []}
>
	<svelte:component this={data.content} {...data.meta} />
</ServiceLayout>
