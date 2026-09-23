<script lang="ts">
	import { onMount } from 'svelte';
	import { mdiHome } from '@mdi/js';
	import Icon from '$lib/Icon.svelte';
	import type { NavigationItem } from '$lib/data/portfolio';

	export let items: NavigationItem[];
	let activeId = '';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible) activeId = visible.target.id;
			},
			{ rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
		);

		for (const item of items) {
			const section = document.getElementById(item.id);
			if (section) observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<nav class="navigator" aria-label="ページ内ナビゲーション">
	<a class="navigate" href="#top" class:active={activeId === ''} aria-label="Home" title="Home">
		<Icon path={mdiHome} />
		<span class="navigate_title" class:navigate_title__active={activeId === ''}>Home</span>
	</a>
	{#each items as item (item.id)}
		<a
			class="navigate"
			href="#{item.id}"
			class:active={activeId === item.id}
			aria-label={item.title}
			title={item.title}
		>
			<Icon path={item.icon} />
			<span class="navigate_title" class:navigate_title__active={activeId === item.id}>
				{item.title}
			</span>
		</a>
	{/each}
</nav>

<style lang="scss">
	.navigator {
		position: fixed;
		z-index: 5;
		inset: 0 0 auto;
		display: flex;
		justify-content: center;
		padding-bottom: 1rem;
	}

	.navigate {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		margin: 0.6rem 0;
		padding: 0 0.3rem;
		border: 0;
		background: none;
		color: white;
		font-family: inherit;
		font-size: 1.3rem;
		font-weight: bold;
		text-decoration: none;
		backdrop-filter: blur(30px);
		cursor: pointer;

		.navigate_title {
			display: none;
			color: #ccc;
		}

		&:hover .navigate_title,
		.navigate_title__active {
			display: inline-block;
		}

		&:focus-visible {
			outline: 2px solid white;
			outline-offset: 3px;
		}
	}
</style>
