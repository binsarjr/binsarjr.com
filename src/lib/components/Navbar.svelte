<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let scrolled = $state(false);

	const links = [
		{ id: 'about', label: 'About', no: '01' },
		{ id: 'projects', label: 'Projects', no: '02' },
		{ id: 'services', label: 'Services', no: '03' },
		{ id: 'blog', label: 'Journal', no: '04' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleNavigation(target: string) {
		isMenuOpen = false;
		if ($page.url.pathname === '/') {
			const el = document.getElementById(target);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
				return;
			}
		}
		if (target === 'about' || target === 'contact') {
			goto(`/#${target}`);
		} else {
			goto(`/${target}`);
		}
	}

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 10;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	class="fixed top-0 z-50 w-full border-b transition-all duration-300"
	class:border-transparent={!scrolled}
	class:border-[var(--border)]={scrolled}
	class:bg-[var(--bg)]={scrolled}
	style={scrolled ? 'backdrop-filter: blur(8px); background: rgba(10,11,15,0.85);' : ''}
>
	<div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
		<div class="flex h-16 items-center justify-between">
			<!-- Wordmark -->
			<a href="/" class="group flex items-center gap-3">
				<span class="font-serif text-2xl leading-none text-[var(--text)]">
					B<span class="italic text-[var(--ember)]">j</span>
				</span>
				<span class="hidden sm:block">
					<span class="kicker block leading-tight text-[var(--text)]">Binsar Jr</span>
					<span class="kicker block leading-tight text-[var(--faint)]" style="font-size:9px">
						EDITORIAL · YOGYAKARTA
					</span>
				</span>
			</a>

			<!-- Desktop nav -->
			<div class="hidden items-center gap-1 md:flex">
				{#each links as link}
					<button
						onclick={() => handleNavigation(link.id)}
						class="group flex items-center gap-2 px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
					>
						<span class="font-mono text-[10px] text-[var(--faint)] group-hover:text-[var(--ember)]"
							>{link.no}</span
						>
						<span>{link.label}</span>
					</button>
				{/each}

				<div class="ml-2 h-4 w-px bg-[var(--border)]"></div>

				<button
					onclick={() => handleNavigation('contact')}
					class="group ml-2 inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]"
				>
					<span class="dot" style="background: var(--mint)"></span>
					<span class="font-mono text-[11px] tracking-wider uppercase">Available</span>
				</button>
			</div>

			<!-- Mobile button -->
			<button
				onclick={toggleMenu}
				class="inline-flex items-center justify-center border border-[var(--border)] p-2 text-[var(--text)] hover:border-[var(--ember)] md:hidden"
				aria-label="Toggle menu"
			>
				{#if isMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
			<div class="mx-auto max-w-7xl px-5 py-4 sm:px-8">
				{#each links as link}
					<button
						onclick={() => handleNavigation(link.id)}
						class="flex w-full items-center justify-between border-b border-[var(--border-soft)] py-4 text-left text-[var(--text)] hover:text-[var(--ember)]"
					>
						<span class="flex items-center gap-3">
							<span class="font-mono text-[10px] text-[var(--faint)]">{link.no}</span>
							<span class="text-base">{link.label}</span>
						</span>
						<span class="font-mono text-xs text-[var(--faint)]">→</span>
					</button>
				{/each}
				<button
					onclick={() => handleNavigation('contact')}
					class="mt-4 flex w-full items-center justify-between border border-[var(--ember)] px-4 py-3 text-left text-[var(--ember)]"
				>
					<span class="flex items-center gap-2">
						<span class="dot"></span>
						<span class="font-mono text-xs tracking-wider uppercase">Get in touch</span>
					</span>
					<span class="font-mono text-xs">→</span>
				</button>
			</div>
		</div>
	{/if}
</nav>
