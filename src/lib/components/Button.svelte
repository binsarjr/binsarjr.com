<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		loading?: boolean;
		href?: string;
		target?: string;
		onclick?: () => void;
		type?: 'button' | 'submit' | 'reset';
		class?: string;
		children: Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		href,
		target,
		onclick,
		type = 'button',
		class: className = '',
		children
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 font-mono tracking-wider uppercase transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

	const variants = {
		primary:
			'border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]',
		secondary:
			'border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]',
		outline:
			'border border-[var(--border)] text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]',
		ghost: 'text-[var(--ember)] hover:underline underline-offset-4 decoration-[var(--ember)]'
	};

	const sizes = {
		sm: 'px-3 py-1.5 text-[11px]',
		md: 'px-5 py-2.5 text-xs',
		lg: 'px-6 py-3 text-sm'
	};

	const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
</script>

{#if href}
	<a
		{href}
		{target}
		class={classes}
		class:opacity-50={disabled}
		class:pointer-events-none={disabled || loading}
	>
		{#if loading}
			<div
				class="h-3 w-3 animate-spin rounded-full border border-current border-t-transparent"
			></div>
		{/if}
		{@render children()}
	</a>
{:else}
	<button
		{type}
		{disabled}
		{onclick}
		class={classes}
		class:opacity-50={disabled || loading}
		class:pointer-events-none={loading}
	>
		{#if loading}
			<div
				class="h-3 w-3 animate-spin rounded-full border border-current border-t-transparent"
			></div>
		{/if}
		{@render children()}
	</button>
{/if}
