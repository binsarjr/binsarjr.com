<!-- Button.svelte -->
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

	const baseClasses =
		'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary: 'bg-yellow-400 text-black hover:bg-yellow-300 active:bg-yellow-500',
		secondary: 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 border border-gray-700',
		outline:
			'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 active:bg-yellow-400/20',
		ghost: 'text-yellow-400 hover:bg-yellow-400/10 active:bg-yellow-400/20'
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
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
				class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
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
				class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
			></div>
		{/if}
		{@render children()}
	</button>
{/if}
