<script lang="ts">
	export let href = '';
	export let withText = false;
</script>

<!-- External profile/publication links do not use SvelteKit route resolution. -->
<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} class="icon-link" class:icon-link__withText={withText}>
	<slot />
</a>

<style lang="scss">
	.icon-link {
		color: white;
		text-decoration: none;
		margin: 0 0.1rem;
		padding: 0.1rem;
		vertical-align: middle;
		align-items: center;

		&__withText {
			text-decoration: underline;
		}
	}
</style>
