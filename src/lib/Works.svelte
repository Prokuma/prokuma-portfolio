<script lang="ts">
	export let itemCount = 0;
	let showAll = false;
</script>

<div class="work-list" class:show-all={showAll} id="product-list">
	<slot />
</div>
{#if itemCount > 2}
	<button
		class="list-toggle"
		type="button"
		aria-expanded={showAll}
		aria-controls="product-list"
		on:click={() => (showAll = !showAll)}
	>
		{showAll ? '閉じる' : 'もっと見る'}
	</button>
{/if}

<style lang="scss">
	.work-list {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1rem, 2vw, 1.5rem);
		width: 100%;
	}

	:global(.work-list:not(.show-all) > :nth-child(n + 4)) {
		display: none;
	}

	.list-toggle {
		display: block;
		margin: 0.8rem auto 0;
		padding: 0.35rem 0.7rem;
		border: 1px solid rgb(255 255 255 / 12%);
		border-radius: 0.3rem;
		background: rgb(10 13 21 / 18%);
		color: #c2c8d2;
		font: inherit;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
		transition:
			background-color 160ms ease,
			border-color 160ms ease;

		&:hover {
			border-color: rgb(255 255 255 / 22%);
			background: rgb(10 13 21 / 32%);
			color: #f1f3f7;
		}

		&:focus-visible {
			outline: 2px solid #f1cfa2;
			outline-offset: 3px;
		}
	}

	@media (max-width: 1200px) {
		.work-list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		:global(.work-list:not(.show-all) > :nth-child(n + 3)) {
			display: none;
		}
	}

	@media (max-width: 600px) {
		.work-list {
			grid-template-columns: minmax(0, 1fr);
			gap: 1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.list-toggle {
			transition: none;
		}
	}
</style>
