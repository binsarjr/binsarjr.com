<!-- Navbar.svelte -->
<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { scrollToSection } from '$lib/utils';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleNavigation(target: string) {
		// Close mobile menu
		isMenuOpen = false;

		// If we're on homepage, scroll to section
		if ($page.url.pathname === '/') {
			const element = document.getElementById(target);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// If we're on other pages
			if (target === 'about' || target === 'contact') {
				// For about/contact, navigate to homepage with hash
				window.location.href = `/#${target}`;
			} else {
				// For blog, projects, services - go to their listing pages
				window.location.href = `/${target}`;
			}
		}
	}
</script>

<nav class="fixed top-0 z-50 w-full border-b border-yellow-400/20 bg-black/90 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a
					href="/"
					class="text-2xl font-bold text-yellow-400 transition-colors hover:text-yellow-300"
				>
					BJ
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<button
						onclick={() => handleNavigation('about')}
						class="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-yellow-400"
					>
						About
					</button>
					<button
						onclick={() => handleNavigation('projects')}
						class="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-yellow-400"
					>
						Projects
					</button>
					<button
						onclick={() => handleNavigation('services')}
						class="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-yellow-400"
					>
						Services
					</button>
					<button
						onclick={() => handleNavigation('blog')}
						class="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-yellow-400"
					>
						Blog
					</button>
					<button
						onclick={() => handleNavigation('contact')}
						class="px-3 py-2 text-sm font-medium text-white transition-colors hover:text-yellow-400"
					>
						Contact
					</button>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					onclick={toggleMenu}
					class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-yellow-400/10 hover:text-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none focus:ring-inset"
				>
					{#if isMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 border-t border-yellow-400/20 bg-black px-2 pt-2 pb-3 sm:px-3">
				<button
					onclick={() => handleNavigation('about')}
					class="block w-full px-3 py-2 text-left text-base font-medium text-white transition-colors hover:text-yellow-400"
				>
					About
				</button>
				<button
					onclick={() => handleNavigation('projects')}
					class="block w-full px-3 py-2 text-left text-base font-medium text-white transition-colors hover:text-yellow-400"
				>
					Projects
				</button>
				<button
					onclick={() => handleNavigation('services')}
					class="block w-full px-3 py-2 text-left text-base font-medium text-white transition-colors hover:text-yellow-400"
				>
					Services
				</button>
				<button
					onclick={() => handleNavigation('blog')}
					class="block w-full px-3 py-2 text-left text-base font-medium text-white transition-colors hover:text-yellow-400"
				>
					Blog
				</button>
				<button
					onclick={() => handleNavigation('contact')}
					class="block w-full px-3 py-2 text-left text-base font-medium text-white transition-colors hover:text-yellow-400"
				>
					Contact
				</button>
			</div>
		</div>
	{/if}
</nav>
