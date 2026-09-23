<script lang="ts">
	import { mdiOpenInNew, mdiPost } from '@mdi/js';
	import Icon from '$lib/Icon.svelte';
	import IconLink from '$lib/IconLink.svelte';

	export let items: {
		href: string;
		text: string;
		highlight: string;
		year: number;
		venue: string;
	}[];
	export let align: 'left' | 'right' = 'left';
</script>

<ol class="publication-list" class:align-right={align === 'right'}>
	{#each items as item (item.href)}
		{@const parts = item.text.split(item.highlight)}
		<li>
			<IconLink href={item.href}>
				<span class="publication-mark" aria-hidden="true"><Icon path={mdiPost} /></span>
				<span class="publication-copy">
					<span class="publication-meta"><span>{item.venue}</span><time>{item.year}</time></span>
					<span class="publication-citation"
						>{parts[0]}<strong>{item.highlight}</strong>{parts.slice(1).join(item.highlight)}</span
					>
				</span>
				<span class="publication-open" aria-hidden="true"><Icon path={mdiOpenInNew} /></span>
			</IconLink>
		</li>
	{/each}
</ol>

<style lang="scss">
	.publication-list {
		display: grid;
		gap: 0.75rem;
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
	}

	:global(.publication-list .icon-link) {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 2.5rem minmax(0, 1fr) 1.25rem;
		align-items: center;
		gap: 0.85rem;
		width: 100%;
		margin: 0;
		padding: 1rem 1.1rem;
		border: 1px solid rgb(255 255 255 / 10%);
		border-radius: 0.55rem;
		background: rgb(10 13 21 / 28%);
		color: #f1f3f7;
		text-decoration: none;
		transition:
			background-color 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	:global(.publication-list .icon-link:hover) {
		transform: translateY(-2px);
		border-color: rgb(241 207 162 / 48%);
		background: rgb(10 13 21 / 50%);
	}

	.publication-list.align-right :global(.icon-link) {
		grid-template-columns: minmax(0, 1fr) 2.5rem 1.25rem;
	}

	.publication-list.align-right .publication-copy {
		grid-column: 1;
		text-align: right;
	}

	.publication-list.align-right .publication-mark {
		grid-column: 2;
		grid-row: 1;
	}

	.publication-list.align-right .publication-open {
		grid-column: 3;
		grid-row: 1;
	}

	:global(.publication-list .icon-link:focus-visible) {
		outline: 2px solid #f1cfa2;
		outline-offset: 3px;
	}

	.publication-mark {
		display: grid;
		width: 2.5rem;
		aspect-ratio: 1;
		place-items: center;
		border-radius: 0.45rem;
		background: rgb(241 207 162 / 15%);
		color: #f1cfa2;
	}

	.publication-copy {
		display: grid;
		min-width: 0;
		gap: 0.35rem;
	}

	.publication-meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		color: #e8c99c;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;

		time {
			color: #bdc2cc;
			font-weight: 500;
		}
	}

	.publication-list.align-right .publication-meta {
		justify-content: flex-end;
	}

	.publication-citation {
		font-size: 0.9rem;
		line-height: 1.55;
		overflow-wrap: anywhere;

		strong {
			color: white;
			font-weight: 750;
		}
	}

	.publication-open {
		color: #cbd0d9;
	}

	@media (max-width: 640px) {
		.publication-list {
			gap: 0.6rem;
		}

		:global(.publication-list .icon-link) {
			grid-template-columns: 2.2rem minmax(0, 1fr) 1rem;
			gap: 0.65rem;
			padding: 0.85rem;
		}

		.publication-list.align-right :global(.icon-link) {
			grid-template-columns: minmax(0, 1fr) 2.2rem 1rem;
		}

		.publication-mark {
			width: 2.2rem;
		}

		.publication-citation {
			font-size: 0.85rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.publication-list .icon-link) {
			transition: none;
		}
	}
</style>
