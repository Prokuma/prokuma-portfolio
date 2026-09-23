<script lang="ts">
	export let title = '';
	export let align: 'left' | 'right' = 'left';
</script>

<tr class:right={align === 'right'}>
	{#if title}
		<th scope="row">{title}</th>
	{:else}
		<th scope="row" class="visually-hidden">項目</th>
	{/if}
	<td><slot /></td>
</tr>

<style lang="scss">
	tr {
		box-sizing: border-box;
		display: block;
		width: 100%;
		margin: 0 0 1rem;

		th,
		td {
			display: block;
			padding: 0;
			color: #ccc;
			text-align: left;
		}

		th {
			margin-bottom: 0.25rem;
			color: white;
			font-weight: 700;
		}

		&.right th,
		&.right td {
			text-align: right;
		}
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 640px) {
		tr th {
			font-size: 1.1rem;
		}
	}
</style>
