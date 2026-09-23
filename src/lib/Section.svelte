<script lang="ts">
	import { inview } from 'svelte-inview';

	export let id: string;
	let showSection = false;

	function changed(event: CustomEvent<{ inView: boolean }>) {
		showSection = event.detail.inView;
	}
</script>

<section {id} use:inview={{}} on:inview_change={changed} class:section__show={showSection}>
	<div class="container">
		<slot />
	</div>
</section>

<style lang="scss">
	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	section {
		min-height: 100vh;
		padding-top: 4rem;
		color: white;
		scroll-margin-top: 4rem;
		opacity: 1;

		&.section__show {
			animation: slideIn 0.5s both;
		}
	}

	.container {
		margin: 0 2rem;
	}

	@media (prefers-reduced-motion: reduce) {
		section.section__show {
			animation: none;
		}
	}
</style>
