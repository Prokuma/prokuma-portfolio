<script lang="ts">
	import Background from '$lib/Background.svelte';
	import Navigator from '$lib/Navigator.svelte';
	import type { NavigationItem } from '$lib/data/portfolio';

	export let navigation: NavigationItem[];
	export let copyrightYear: number;
	export let showHero = false;
</script>

<Background />
<div class="site-shell" id="top">
	<a class="skip-link" href="#main-content">本文へ移動</a>
	{#if showHero}
		<div class="hero-placeholder" id="top" aria-hidden="true"></div>
	{/if}
	<main id="main-content"><slot /></main>
	<footer>© {copyrightYear} Prokuma All rights reserved</footer>
</div>
<Navigator items={navigation} />

<style lang="scss">
	.site-shell {
		position: relative;
		max-width: 1500px;
		margin: 0 auto;
		padding: 0 3rem;
		color: white;
	}

	.hero-placeholder {
		min-height: 100vh;
	}

	footer {
		min-height: 100vh;
		display: flex;
		align-items: end;
		justify-content: center;
		padding-bottom: 1rem;
		box-sizing: border-box;
	}

	.skip-link {
		position: absolute;
		left: -10000px;
		top: 0;
		z-index: 10;
		padding: 0.75rem;
		background: white;
		color: black;

		&:focus {
			left: 0;
		}
	}

	@media (max-width: 639px) {
		.site-shell {
			padding: 0;
		}
	}
</style>
