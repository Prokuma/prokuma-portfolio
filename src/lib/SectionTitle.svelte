<script lang="ts">
	export let title = '';
</script>

<h2 class="section-title">
	<span class="section-icon"><slot /></span>
	{title}
</h2>

<style lang="scss">
	.section-title {
		margin: 0;
		font-size: 2.5rem;
		font-weight: bold;
	}

	.section-icon {
		display: inline-block;
		vertical-align: middle;
	}

	@media (max-width: 640px) {
		.section-title {
			font-size: 1.5rem;
		}
	}
</style>
