<!-- Typography.svelte -->
<script lang="ts">
	export let variant: 'default' | 'compact' | 'wide' = 'default';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

	$: containerClass = `prose-enhanced ${variant === 'compact' ? 'prose-compact' : variant === 'wide' ? 'prose-wide' : ''} ${size === 'sm' ? 'prose-sm' : size === 'lg' ? 'prose-lg' : size === 'xl' ? 'prose-xl' : ''}`;
</script>

<div class={containerClass}>
	<slot />
</div>

<style>
	:global(.prose-compact) {
		/* Compact spacing untuk konten yang padat */
		--prose-spacing: 0.75rem;
	}

	:global(.prose-compact h1),
	:global(.prose-compact h2),
	:global(.prose-compact h3),
	:global(.prose-compact h4),
	:global(.prose-compact h5),
	:global(.prose-compact h6) {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose-compact p) {
		margin-bottom: 1rem;
	}

	:global(.prose-compact ul),
	:global(.prose-compact ol) {
		margin: 1rem 0;
	}

	:global(.prose-wide) {
		/* Wide spacing untuk reading yang lebih nyaman */
		--prose-spacing: 2rem;
	}

	:global(.prose-wide h1),
	:global(.prose-wide h2),
	:global(.prose-wide h3),
	:global(.prose-wide h4),
	:global(.prose-wide h5),
	:global(.prose-wide h6) {
		margin-top: 3rem;
		margin-bottom: 2rem;
	}

	:global(.prose-wide p) {
		margin-bottom: 2rem;
		line-height: 1.8;
	}

	:global(.prose-wide ul),
	:global(.prose-wide ol) {
		margin: 2rem 0;
	}

	:global(.prose-wide ul > li),
	:global(.prose-wide ol > li) {
		margin-bottom: 1rem;
	}

	/* Size variations */
	:global(.prose-sm) {
		font-size: 0.875rem;
	}

	:global(.prose-sm h1) {
		font-size: 1.875rem;
	}

	:global(.prose-sm h2) {
		font-size: 1.5rem;
	}

	:global(.prose-sm h3) {
		font-size: 1.25rem;
	}

	:global(.prose-xl) {
		font-size: 1.25rem;
	}

	:global(.prose-xl h1) {
		font-size: 4rem;
	}

	:global(.prose-xl h2) {
		font-size: 3rem;
	}

	:global(.prose-xl h3) {
		font-size: 2.25rem;
	}

	:global(.prose-xl p) {
		font-size: 1.25rem;
		line-height: 1.8;
	}
</style>
