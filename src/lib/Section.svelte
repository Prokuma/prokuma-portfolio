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
			transform: translateY(24px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	section {
		box-sizing: border-box;
		min-height: 100svh;
		padding-block: clamp(5rem, 9vh, 7rem) 3rem;
		color: white;
		scroll-margin-top: 3rem;
		opacity: 1;

		&.section__show {
			animation: slideIn 0.45s both;
		}
	}

	.container {
		box-sizing: border-box;
		width: min(100%, 1048px);
		max-width: 1048px;
		margin-inline: auto;
		padding-inline: clamp(1.25rem, 4vw, 3.5rem);
	}

	@media (max-width: 640px) {
		section {
			padding-block: 5rem 2.5rem;
		}

		.container {
			padding-inline: 1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		section.section__show {
			animation: none;
		}
	}
</style>
