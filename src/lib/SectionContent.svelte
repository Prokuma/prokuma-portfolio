<script lang="ts">
	export let align: 'left' | 'right' = 'left';
</script>

<div class="content" class:right={align === 'right'}>
	<slot />
</div>

<style lang="scss">
	.content {
		box-sizing: border-box;
		width: fit-content;
		max-width: 100%;
		margin: 0.5rem auto 0.5rem 0;
		padding: 1.5rem;
		border-radius: 5px;
		background-color: #5558;
		backdrop-filter: blur(5px);
		font-size: 1.3rem;
		text-align: left;

		&.right {
			margin-right: 0;
			margin-left: auto;
			text-align: right;
		}
	}

	@media (max-width: 640px) {
		.content {
			width: calc(100% - 2rem);
			max-width: none;
			padding: 1rem;
			font-size: 1rem;
		}
	}
</style>
