<script lang="ts">
	export let href = '';
	export let imgSrc = 'dummy.svg';
	export let title = '';
	export let yearMonth = '';
	export let description = '';
	export let tags: string[] = [];
	let expanded = false;
	let summaryId: string;
	$: summaryId = `work-summary-${title.replace(/[^a-zA-Z0-9_-]/g, '-')}`;
</script>

<!-- External project links use direct URLs rather than SvelteKit route resolution. -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<article class="work-card" class:expanded>
	<img src={imgSrc} alt="" class="work-card__image" loading="lazy" />
	<div class="work-card__description">
		<p class="title">
			<a {href} target="_blank" rel="noreferrer">{title}</a>
			<span>{yearMonth}</span>
		</p>
		<p class="summary" class:expanded id={summaryId}>{description}</p>
		<button
			class="more-button"
			type="button"
			aria-expanded={expanded}
			aria-controls={summaryId}
			on:click={() => (expanded = !expanded)}
		>
			{expanded ? '閉じる' : '続きを読む'}
		</button>
		<div class="tags">
			{#each tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</article>

<!-- eslint-enable svelte/no-navigation-without-resolve -->

<style lang="scss">
	.work-card {
		position: relative;
		box-sizing: border-box;
		height: 21rem;
		min-width: 0;
		overflow: hidden;
		border: 1px solid rgb(255 255 255 / 22%);
		border-radius: 0.55rem;
		background: #20263b;
		box-shadow: 0 0.75rem 2rem rgb(0 0 0 / 24%);
		color: #f1f3f7;
		transition:
			transform 180ms ease,
			box-shadow 180ms ease,
			height 180ms ease;

		&:hover,
		&:focus-within {
			transform: translateY(-3px);
			box-shadow: 0 1rem 2.5rem rgb(0 0 0 / 36%);
		}

		&.expanded {
			height: 25rem;
		}

		.title {
			display: flex;
			flex-wrap: wrap;
			align-items: baseline;
			gap: 0.35rem 0.6rem;
			margin: 0 0 0.4rem;
			font-size: clamp(1.1rem, 1.5vw, 1.35rem);
			font-weight: 750;
			line-height: 1.2;

			a {
				color: inherit;
				text-decoration-thickness: 1px;
				text-underline-offset: 0.15em;
			}

			span {
				color: #bdc2cc;
				font-size: 0.82rem;
				font-weight: 500;
			}
		}

		.summary {
			display: -webkit-box;
			overflow: hidden;
			margin: 0;
			font-size: 0.9rem;
			line-height: 1.5;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;

			&.expanded {
				display: block;
				overflow: visible;
			}
		}

		.tags {
			display: flex;
			flex-wrap: wrap;
			gap: 0.35rem;
			margin-top: 0.75rem;

			.tag {
				padding: 0.2rem 0.5rem;
				border: 1px solid rgb(255 255 255 / 14%);
				border-radius: 999px;
				background: rgb(255 255 255 / 8%);
				color: #e1e5ee;
				font-size: 0.72rem;
				line-height: 1.2;
			}
		}
	}

	.work-card__image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 28%;
		transition: transform 300ms ease;
	}

	.work-card:hover .work-card__image,
	.work-card:focus-within .work-card__image {
		transform: scale(1.035);
	}

	.work-card__description {
		position: absolute;
		inset: auto 0 0;
		padding: 1rem;
		background: linear-gradient(transparent, rgb(26 32 50 / 94%) 18%, #1a2032 42%);
		backdrop-filter: blur(3px);
	}

	.more-button {
		margin-top: 0.35rem;
		padding: 0;
		border: 0;
		background: transparent;
		color: #e8c99c;
		font: inherit;
		font-size: 0.72rem;
		font-weight: 700;
		text-decoration: none;
		opacity: 0.76;
		cursor: pointer;
		transition:
			color 160ms ease,
			opacity 160ms ease;

		&:hover {
			color: #f1cfa2;
			opacity: 1;
			text-decoration: underline;
			text-underline-offset: 0.15em;
		}

		&:focus-visible {
			border-radius: 0.15rem;
			outline: 2px solid #725626;
			outline-offset: 2px;
		}
	}

	@media (max-width: 600px) {
		.work-card {
			height: clamp(17rem, 42svh, 21rem);

			&.expanded {
				height: clamp(21rem, 55svh, 27rem);
			}
		}

		.work-card__description {
			padding: 1.1rem;
			background: linear-gradient(transparent, rgb(26 32 50 / 96%) 14%, #1a2032 42%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.work-card,
		.work-card__image,
		.more-button {
			transition: none;
		}
	}
</style>
