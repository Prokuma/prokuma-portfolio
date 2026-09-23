<script lang="ts">
	export let align: 'left' | 'right' = 'left';
</script>

<div class="content" class:right={align === 'right'}>
	<slot />
</div>

<style lang="scss">
	.content {
		box-sizing: border-box;
		width: min(100%, 65.5rem);
		margin: 1rem auto 1rem 0;
		padding: clamp(1rem, 2.5vw, 2rem);
		border: 1px solid rgb(255 255 255 / 9%);
		border-radius: 0.55rem;
		background: rgb(25 28 40 / 76%);
		box-shadow: 0 1rem 3rem rgb(0 0 0 / 16%);
		backdrop-filter: blur(12px);
		font-size: clamp(1rem, 1.1vw, 1.125rem);
		text-align: left;

		&.right {
			margin-right: 0;
			margin-left: auto;
			text-align: right;
		}
	}

	@media (max-width: 640px) {
		.content,
		.content.right {
			width: 100%;
			margin: 0.5rem 0;
			padding: 1rem;
		}
	}
</style>
