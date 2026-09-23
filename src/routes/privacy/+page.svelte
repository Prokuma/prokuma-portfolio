<script lang="ts">
	import { mdiInformation } from '@mdi/js';
	import Icon from '$lib/Icon.svelte';
	import Section from '$lib/Section.svelte';
	import SectionTitle from '$lib/SectionTitle.svelte';
	import SectionSubTitle from '$lib/SectionSubTitle.svelte';
	import SectionContent from '$lib/SectionContent.svelte';
	import SectionContentList from '$lib/SectionContentList.svelte';
	import SectionContentListItem from '$lib/SectionContentListItem.svelte';
	import SiteShell from '$lib/SiteShell.svelte';
	import { privacyItems, privacyNavigation } from '$lib/data/portfolio';
</script>

<svelte:head>
	<title>Privacy Policies</title>
</svelte:head>

<SiteShell navigation={privacyNavigation} copyrightYear={2024}>
	<Section id="privacy">
		<SectionTitle title="Privacy Policies"><Icon path={mdiInformation} /></SectionTitle>
		<SectionContent>
			<SectionSubTitle>Memo Counter</SectionSubTitle>
			<SectionContentList>
				{#each privacyItems as item (item)}
					<SectionContentListItem>- {item}</SectionContentListItem>
				{/each}
			</SectionContentList>
		</SectionContent>
	</Section>
</SiteShell>
