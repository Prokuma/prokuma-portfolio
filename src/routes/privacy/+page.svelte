
<script lang="ts">
    import Background from "$lib/Background.svelte";
    import Section from "$lib/Section.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";
    import SectionContent from "$lib/SectionContent.svelte";
	import Navigator from "$lib/Navigator.svelte";
    import PostIcon from 'svelte-material-icons/Post.svelte';
    import TwitterIcon from 'svelte-material-icons/Twitter.svelte';
    import GitHubIcon from 'svelte-material-icons/Github.svelte';
	import SectionContentList from "$lib/SectionContentList.svelte";
    import SectionContentListItem from "$lib/SectionContentListItem.svelte";
    import InformationIcon from 'svelte-material-icons/Information.svelte';
    import HistoryIcon from 'svelte-material-icons/History.svelte';
    import BookOpenIcon from 'svelte-material-icons/BookOpen.svelte';
    import MailIcon from 'svelte-material-icons/Mail.svelte';
	import IconLink from "$lib/IconLink.svelte";
	import SectionSubTitle from "$lib/SectionSubTitle.svelte";
	import Works from "$lib/Works.svelte";
	import WorkCard from "$lib/WorkCard.svelte";
</script>

<svelte:head>
    <title>Privacy Policies</title>
</svelte:head>

<Background />
<div class="content-container">
    <div class="content">
        <Section>
            <SectionTitle title="Privacy Policies"><InformationIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>Memo Counter</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem>- ストレージ（データベースの生成・修正など）</SectionContentListItem>
                    <SectionContentListItem>- 送信情報: なし</SectionContentListItem>
                    <SectionContentListItem>- ユーザのデータ収集は一切行っておりません</SectionContentListItem>
                    <SectionContentListItem>- データは端末に保存されますが、アプリの作成者が閲覧することはできません</SectionContentListItem>
                    <SectionContentListItem>- ローカルで完結するアプリです</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
            <br />
        </Section>

        <div class="hero-placeholder">
            <div class="footer">
                <p>© 2024 Prokuma All rights reserved</p>
            </div>
        </div>
    </div>
</div>

<Navigator />

<style lang="scss">
    .content-container {
        position :relative;
        margin: 0 auto;
        color: white;
        max-width: 1500px;
    }

    @media (max-width: 640px) {
        .content-container {
            max-width: none;
        }
    }

    .hero-placeholder {
        position: relative;
        display: flex;
        justify-content: center;
        min-height: 100vh;
        .footer {
			position: absolute;
			bottom: 0;
			margin-bottom: 1rem;
			text-align: center;
		}
    }

    .content {
        padding: 3rem;
        min-height: 200vh;
    }

    @media (max-width: 639px) {
        .content {
            padding: 0;
        }
    }
</style>