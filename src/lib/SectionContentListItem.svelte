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
		th,
		td {
			padding: 0.15rem 0;
			color: #ccc;
			text-align: left;
			vertical-align: top;
		}

		th {
			padding-right: 1rem;
			color: white;
			font-weight: 700;
			white-space: nowrap;
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
		tr,
		tr.right {
			th,
			td {
				display: block;
				text-align: left;
			}

			th {
				padding: 0;
				font-size: 1.1rem;
			}
		}
	}
</style>
