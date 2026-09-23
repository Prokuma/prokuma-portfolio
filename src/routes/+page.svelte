<script lang="ts">
	import { mdiMail, mdiPost, mdiHistory, mdiBookOpen, mdiInformation } from '@mdi/js';
	import Icon from '$lib/Icon.svelte';
	import IconLink from '$lib/IconLink.svelte';
	import Section from '$lib/Section.svelte';
	import SectionTitle from '$lib/SectionTitle.svelte';
	import SectionSubTitle from '$lib/SectionSubTitle.svelte';
	import SectionContent from '$lib/SectionContent.svelte';
	import SectionContentList from '$lib/SectionContentList.svelte';
	import SectionContentListItem from '$lib/SectionContentListItem.svelte';
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
			<SectionSubTitle>プロダクト</SectionSubTitle>
			<Works>
				{#each works as work (work.title)}
					<WorkCard {...work} />
				{/each}
			</Works>
		</SectionContent>
		<SectionContent align="right">
			<SectionSubTitle>論文</SectionSubTitle>
			<SectionContentList>
				{#each publications as publication (publication.href)}
					<SectionContentListItem>
						<IconLink href={publication.href} withText>
							<Icon path={mdiPost} />
							{@const parts = publication.text.split(publication.highlight)}
							{parts[0]}<b>{publication.highlight}</b>{parts.slice(1).join(publication.highlight)}
						</IconLink>
					</SectionContentListItem>
				{/each}
			</SectionContentList>
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
