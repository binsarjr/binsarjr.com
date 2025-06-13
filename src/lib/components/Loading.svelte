<!-- Loading.svelte -->
<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg';
		color?: 'yellow' | 'white' | 'gray';
	}

	let { size = 'md', color = 'yellow' }: Props = $props();

	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-6 h-6',
		lg: 'w-8 h-8'
	};

	const colorClasses = {
		yellow: 'border-yellow-400 border-t-transparent',
		white: 'border-white border-t-transparent',
		gray: 'border-gray-400 border-t-transparent'
	};
</script>

<div
	class="animate-spin rounded-full border-2 {sizeClasses[size]} {colorClasses[color]}"
	aria-label="Loading..."
></div>
