<!-- Enhanced Loading.svelte -->
<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg' | 'xl';
		color?: 'yellow' | 'white' | 'gray' | 'blue' | 'purple' | 'green';
		type?: 'spinner' | 'dots' | 'pulse' | 'bars';
	}

	let { size = 'md', color = 'yellow', type = 'spinner' }: Props = $props();

	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-6 h-6',
		lg: 'w-8 h-8',
		xl: 'w-12 h-12'
	};

	const colorClasses = {
		yellow: 'border-yellow-400 border-t-transparent',
		white: 'border-white border-t-transparent',
		gray: 'border-gray-400 border-t-transparent',
		blue: 'border-blue-400 border-t-transparent',
		purple: 'border-purple-400 border-t-transparent',
		green: 'border-green-400 border-t-transparent'
	};

	const dotColors = {
		yellow: 'bg-yellow-400',
		white: 'bg-white',
		gray: 'bg-gray-400',
		blue: 'bg-blue-400',
		purple: 'bg-purple-400',
		green: 'bg-green-400'
	};
</script>

{#if type === 'spinner'}
	<div
		class="animate-spin rounded-full border-2 {sizeClasses[size]} {colorClasses[color]}"
		aria-label="Loading..."
	></div>
{:else if type === 'dots'}
	<div class="flex space-x-1" aria-label="Loading...">
		<div class="h-2 w-2 {dotColors[color]} animate-pulse rounded-full"></div>
		<div class="h-2 w-2 {dotColors[color]} animate-pulse rounded-full delay-100"></div>
		<div class="h-2 w-2 {dotColors[color]} animate-pulse rounded-full delay-200"></div>
	</div>
{:else if type === 'pulse'}
	<div
		class="animate-pulse rounded-full {sizeClasses[size]} {dotColors[color]} opacity-75"
		aria-label="Loading..."
	></div>
{:else if type === 'bars'}
	<div class="flex space-x-1" aria-label="Loading...">
		<div class="h-4 w-1 {dotColors[color]} animate-pulse"></div>
		<div class="h-4 w-1 {dotColors[color]} animate-pulse delay-75"></div>
		<div class="h-4 w-1 {dotColors[color]} animate-pulse delay-150"></div>
		<div class="h-4 w-1 {dotColors[color]} animate-pulse delay-225"></div>
	</div>
{/if}
