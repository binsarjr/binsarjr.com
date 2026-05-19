<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';

	let {
		title = '',
		description = '',
		children
	}: {
		title?: string;
		description?: string;
		children?: any;
	} = $props();
</script>

<svelte:head>
	{#if title}<title>{title} — Binsar Dwi Jasuma</title>{/if}
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<article class="relative pt-32 pb-24">
	<div class="mx-auto max-w-3xl px-5 sm:px-8">
		<button
			onclick={() => history.back()}
			class="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ember)]"
		>
			<ArrowLeft class="h-3.5 w-3.5" />
			<span class="font-mono text-xs tracking-wider uppercase">Back</span>
		</button>

		{#if title}
			<h1
				class="font-serif mt-10 text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-[var(--text)]"
			>
				{title}
			</h1>
		{/if}
		{#if description}
			<p class="font-serif mt-6 text-xl leading-relaxed text-[var(--muted)] italic">
				{description}
			</p>
		{/if}

		<div class="prose-editorial mt-12">
			{@render children?.()}
		</div>
	</div>
</article>
