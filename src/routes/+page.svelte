<script lang="ts">
	import { mdiMail, mdiHistory, mdiBookOpen, mdiInformation } from '@mdi/js';
	import Icon from '$lib/Icon.svelte';
	import IconLink from '$lib/IconLink.svelte';
	import Section from '$lib/Section.svelte';
	import SectionTitle from '$lib/SectionTitle.svelte';
	import SectionSubTitle from '$lib/SectionSubTitle.svelte';
	import SectionContent from '$lib/SectionContent.svelte';
	import SectionContentList from '$lib/SectionContentList.svelte';
	import SectionContentListItem from '$lib/SectionContentListItem.svelte';
	import PublicationList from '$lib/PublicationList.svelte';
	import SiteShell from '$lib/SiteShell.svelte';
	import Works from '$lib/Works.svelte';
	import WorkCard from '$lib/WorkCard.svelte';
	import {
		contacts,
		education,
		employment,
		portfolioNavigation,
		profile,
		profileLinks,
		publications,
		skills,
		works
	} from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>Prokuma | Dohyun Kim</title>
</svelte:head>

<SiteShell navigation={portfolioNavigation} copyrightYear={2026} showHero>
	<Section id="about">
		<SectionTitle title="About"><Icon path={mdiInformation} /></SectionTitle>
		<SectionContent>
			<SectionSubTitle>情報</SectionSubTitle>
			<SectionContentList>
				{#each profile as item (item.title)}
					<SectionContentListItem title={item.title}>{item.text}</SectionContentListItem>
				{/each}
				<SectionContentListItem title="リンク集">
					{#each profileLinks as link (link.title)}
						<IconLink href={link.href} withText>
							<Icon path={link.icon} />{link.title}
						</IconLink>
					{/each}
				</SectionContentListItem>
			</SectionContentList>
		</SectionContent>
		<SectionContent align="right">
			<SectionSubTitle>スキル</SectionSubTitle>
			<SectionContentList>
				{#each skills as item (item.title)}
					<SectionContentListItem align="right" title={item.title}>
						{item.text}
					</SectionContentListItem>
				{/each}
			</SectionContentList>
		</SectionContent>
	</Section>

	<Section id="history">
		<SectionTitle title="History"><Icon path={mdiHistory} /></SectionTitle>
		<SectionContent>
			<SectionSubTitle>学歴</SectionSubTitle>
			<SectionContentList>
				{#each education as item (item.title)}
					<SectionContentListItem title={item.title}>{item.text}</SectionContentListItem>
				{/each}
			</SectionContentList>
		</SectionContent>
		<SectionContent align="right">
			<SectionSubTitle>職歴</SectionSubTitle>
			<SectionContentList>
				{#each employment as item (item.title)}
					<SectionContentListItem align="right" title={item.title}>
						{item.text}
					</SectionContentListItem>
				{/each}
			</SectionContentList>
		</SectionContent>
	</Section>

	<Section id="works">
		<SectionTitle title="Works"><Icon path={mdiBookOpen} /></SectionTitle>
		<SectionContent>
			<div class="works-heading">
				<SectionSubTitle>プロダクト</SectionSubTitle>
				<span>{works.length} projects</span>
			</div>
			<Works itemCount={works.length}>
				{#each works as work (work.title)}
					<WorkCard {...work} />
				{/each}
			</Works>
		</SectionContent>
		<SectionContent align="right">
			<SectionSubTitle>論文</SectionSubTitle>
			<PublicationList items={publications} align="right" />
		</SectionContent>
	</Section>

	<Section id="contact">
		<SectionTitle title="Contact"><Icon path={mdiMail} /></SectionTitle>
		<SectionContent>
			<SectionContentList>
				{#each contacts as contact (contact.title)}
					<SectionContentListItem title={contact.title}>
						{#if contact.links}
							{#each contact.links as link (link.title)}
								<IconLink href={link.href} withText>
									<Icon path={link.icon} />{link.title}
								</IconLink>
							{/each}
						{:else}
							<Icon path={mdiMail} />{contact.text}
						{/if}
					</SectionContentListItem>
				{/each}
			</SectionContentList>
		</SectionContent>
	</Section>
</SiteShell>

<style lang="scss">
	.works-heading {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1rem;

		span {
			color: #c8ccd4;
			font-size: 0.8rem;
			font-weight: 600;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			white-space: nowrap;
		}
	}

	@media (max-width: 640px) {
		.works-heading span {
			font-size: 0.7rem;
		}
	}
</style>
