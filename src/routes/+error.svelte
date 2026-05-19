<script lang="ts">
	import { page } from '$app/stores';
	import { Home, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Error {$page.status} — Binsar Dwi Jasuma</title>
</svelte:head>

<section class="relative flex min-h-[100svh] items-center pt-32 pb-24">
	<div class="mx-auto w-full max-w-4xl px-5 sm:px-8">
		<span class="section-no">§ Error</span>

		<div class="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-baseline">
			<div class="lg:col-span-7">
				<h1
					class="font-serif text-[clamp(5rem,18vw,16rem)] leading-[0.85] tracking-tight text-[var(--text)]"
				>
					<span class="italic text-[var(--ember)]">{$page.status}</span>
				</h1>
			</div>
			<div class="lg:col-span-5">
				<h2 class="font-serif text-3xl leading-tight text-[var(--text)]">
					{#if $page.status === 404}
						The page you wanted isn't here.
					{:else if $page.status === 500}
						Something gave way on the server.
					{:else}
						An unexpected detour.
					{/if}
				</h2>
				<p class="mt-4 text-[var(--muted)]">
					{#if $page.status === 404}
						It may have been moved, renamed, or never existed in the first place. The links below
						should get you back on track.
					{:else}
						{$page.error?.message || 'Please try again, or come back in a moment.'}
					{/if}
				</p>

				<div class="mt-8 flex flex-col gap-3 sm:flex-row">
					<a
						href="/"
						class="group inline-flex items-center gap-2 border border-[var(--ember)] bg-[rgba(255,107,53,0.06)] px-5 py-3 text-sm text-[var(--ember)] hover:bg-[rgba(255,107,53,0.12)]"
					>
						<Home class="h-4 w-4" />
						<span class="font-mono tracking-wider uppercase">Home</span>
					</a>
					<button
						onclick={() => history.back()}
						class="group inline-flex items-center gap-2 border border-[var(--border)] px-5 py-3 text-sm text-[var(--text)] hover:border-[var(--ember)] hover:text-[var(--ember)]"
					>
						<ArrowLeft class="h-4 w-4" />
						<span class="font-mono tracking-wider uppercase">Go back</span>
					</button>
				</div>

				<div class="mt-12 border-t border-[var(--border)] pt-6">
					<span class="kicker block">Or visit</span>
					<ul class="mt-3 space-y-2">
						<li><a href="/projects" class="link-underline text-sm">Selected work</a></li>
						<li><a href="/services" class="link-underline text-sm">Services</a></li>
						<li><a href="/blog" class="link-underline text-sm">Journal</a></li>
						<li><a href="/#contact" class="link-underline text-sm">Get in touch</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
