<script lang="ts">
    import Background from "$lib/Background.svelte";
    import Section from "$lib/Section.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";
    import SectionContent from "$lib/SectionContent.svelte";
	import Navigator from "$lib/Navigator.svelte";
    import PostIcon from 'svelte-material-icons/Post.svelte';
    import TwitterIcon from 'svelte-material-icons/Twitter.svelte';
    import GitHubIcon from 'svelte-material-icons/GitHub.svelte';
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

<Background />
<main>
    <div class="hero-placeholder"></div>
    <div class="content">
        <Section>
            <SectionTitle title="About"><InformationIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>情報</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem title="名前">金 道鉉(キム・ドヒョン/Dohyun Kim)</SectionContentListItem>
                    <SectionContentListItem title="居住">奈良県奈良市</SectionContentListItem>
                    <SectionContentListItem title="出身">大韓民国仁川広域市</SectionContentListItem>
                    <SectionContentListItem title="所属">奈良先端科学技術大学院大学先端科学技術研究科</SectionContentListItem>
                    <SectionContentListItem title="興味">コンピュータ・アーキテクチャ、組込システム、FPGA、Webバックエンドなど</SectionContentListItem>
                    <SectionContentListItem title="リンク">
                        <IconLink href="https://qiita.com/Prokuma" withText={true}>
                            <PostIcon />Qiita
                        </IconLink>
                        <IconLink href="https://prokuma.hateblo.jp" withText={true}>
                            <PostIcon />Hatena Blog
                        </IconLink>
                        <IconLink href="https://github.com/Prokuma" withText={true}>
                            <GitHubIcon />Prokuma
                        </IconLink>
                        <IconLink href="https://twitter.com/ProkumaDev" withText={true}>
                            <TwitterIcon />ProkumaDev
                        </IconLink>
                    </SectionContentListItem>
                </SectionContentList>
                <br />
                <SectionSubTitle>スキル</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem title="言語">C / Python / CUDA / Verilog / Go / TypeScript / Swift / Kotlin</SectionContentListItem>
                    <SectionContentListItem title="分野">FPGA / 電子工作 / 機械学習 / Web / iOS / Android</SectionContentListItem>
                    <SectionContentListItem title="ライブラリ">Gin / GORM / OpenMP / PyTorch / Svelte / Nuxt.js</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle title="History"><HistoryIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>学歴</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem title="1999年3月">大韓民国京畿道高陽市生まれ</SectionContentListItem>
                    <SectionContentListItem title="20??年?月">仁川広域市へ移住</SectionContentListItem>
                    <SectionContentListItem title="2015年3月~2018年2月">仁川松都高等学校</SectionContentListItem>
                    <SectionContentListItem title="2018年4月~2022年3月">九州工業大学 情報工学部 知能情報工学科</SectionContentListItem>
                    <SectionContentListItem title="2022年4月~2024年3月">奈良先端科学技術大学院大学 先端科学技術研究科 博士前期課程</SectionContentListItem>
                    <SectionContentListItem title="2024年4月~">奈良先端科学技術大学院大学 先端科学技術研究科 博士後期課程</SectionContentListItem>
                </SectionContentList>
                <br/>
                <SectionSubTitle>職歴</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem title="2014年2月~2015年12月">個人事業主（ソフトウェア開発など）</SectionContentListItem>
                    <SectionContentListItem title="2018年5月~2022年3月">株式会社オプティム アルバイトスタッフ</SectionContentListItem>
                    <SectionContentListItem title="2023年5月~">奈良先端科学技術大学院大学 リサーチアシスタント</SectionContentListItem>
                    <SectionContentListItem title="2023年8月~">個人事業主開業（ソフトウェア開発など）</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle title="Works"><BookOpenIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>プロダクト</SectionSubTitle>
                <Works>
                    <WorkCard
                        title="Prokuma.dev"
                        href="https://prokuma.dev"
                        description="このサイトです。"
                    />
                    <WorkCard
                        title="Kasumi"
                        href="https://github.com/Prokuma/Kasumi"
                        description="RISC-V RV32IのVerilog実装です。"
                    />
                    <WorkCard
                        title="IMAX2_GCN"
                        href="https://github.com/NAIST-Archlab/IMAX2_GCN"
                        description="研究で書いたIMAX上で動くGCNの実装です。"
                    />
                </Works>
                <br />
                <SectionSubTitle>論文</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem>
                        <IconLink href="https://ken.ieice.org/ken/paper/20230804cCvO/" withText={true}>
                            <PostIcon /> (査読なし) リニアアレイ型CGRA向けCGN 実装方法の検討と評価, “<b>金 道鉉</b>、中島康彦”, CPSY2023, Aug, (2023).
                        </IconLink>
                    </SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle title="Contact"><MailIcon /></SectionTitle>
            <SectionContent>
                <SectionContentList>
                    <SectionContentListItem title="Twitter">
                        <IconLink href="https://twitter.com/ProkumaDev" withText={true}><TwitterIcon />ProkumaDev</IconLink>
                        <IconLink href="https://twitter.com/ProkumaH" withText={true}><TwitterIcon />ProkumaH</IconLink>
                    </SectionContentListItem>
                    <SectionContentListItem title="メールアドレス">prokuma [a.t.] prokuma.dev ([at]を@に置き換えてください)</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <div class="hero-placeholder">
            <div class="footer">
                <p>© 2023 Prokuma All rights reserved</p>
        </div>
    </div>
</main>

<Navigator />

<style lang="scss">
    main {
        position :relative;
        margin: 0 auto;
        color: white;
    }

    @media (min-width: 640px) {
        main {
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