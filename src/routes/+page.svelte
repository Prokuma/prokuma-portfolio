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
    <title>Prokuma | Dohyun Kim</title>
</svelte:head>

<Background />
<div class="content-container">
    <div class="hero-placeholder"></div>
    <div class="content">
        <Section>
            <SectionTitle title="About"><InformationIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>情報</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem title="名前">金 道鉉 (Dohyun Kim)</SectionContentListItem>
                    <SectionContentListItem title="居住">奈良県奈良市</SectionContentListItem>
                    <SectionContentListItem title="出身">大韓民国仁川広域市</SectionContentListItem>
                    <SectionContentListItem title="所属">奈良先端科学技術大学院大学 先端科学技術研究科</SectionContentListItem>
                    <SectionContentListItem title="語学">韓国語(ネイティブ) / 日本語(JLPT N1) / 英語(研究できる程度)</SectionContentListItem>
                    <SectionContentListItem title="興味">コンピュータ・アーキテクチャ / 組込システム / FPGA / Webバックエンドなど</SectionContentListItem>
                    <SectionContentListItem title="研究分野">コンピュータ・アーキテクチャ</SectionContentListItem>
                    <SectionContentListItem title="リンク集">
                        <IconLink href="https://qiita.com/Prokuma" withText={true}>
                            <PostIcon />Qiita
                        </IconLink>
                        <IconLink href="https://prokuma.hateblo.jp" withText={true}>
                            <PostIcon />Blog
                        </IconLink>
                        <IconLink href="https://github.com/Prokuma" withText={true}>
                            <GitHubIcon />Prokuma
                        </IconLink>
                    </SectionContentListItem>
                </SectionContentList>
            </SectionContent>
            <br />
            <SectionContent align="right">
                <SectionSubTitle>スキル</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem align="right" title="言語">C / Python / CUDA / Verilog / Go / TypeScript / Swift / Kotlin</SectionContentListItem>
                    <SectionContentListItem align="right" title="分野">FPGA / 電子工作 / 機械学習 / Web / iOS / Android</SectionContentListItem>
                    <SectionContentListItem align="right" title="ツール">Vim / Docker / Git / Linux / Icarus Verilog / Firebase</SectionContentListItem>
                    <SectionContentListItem align="right" title="ライブラリ">Gin / GORM / OpenMP / PyTorch / Svelte / Nuxt.js / Next.js</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle title="History"><HistoryIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>学歴</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem title="199?年3月">大韓民国京畿道高陽市生まれ</SectionContentListItem>
                    <SectionContentListItem title="200?年?月">仁川広域市へ移住</SectionContentListItem>
                    <SectionContentListItem title="2018年4月~2022年3月">九州工業大学 情報工学部 知能情報工学科</SectionContentListItem>
                    <SectionContentListItem title="2022年4月~2024年3月">奈良先端科学技術大学院大学 先端科学技術研究科 博士前期課程</SectionContentListItem>
                    <SectionContentListItem title="2024年4月~">奈良先端科学技術大学院大学 先端科学技術研究科 博士後期課程</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
            <br/>
            <SectionContent align="right">
                <SectionSubTitle>職歴</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem align="right" title="2014年2月~2015年12月">個人事業主(ソフトウェア開発など)</SectionContentListItem>
                    <SectionContentListItem align="right" title="2018年5月~2022年3月">株式会社オプティム アルバイトスタッフ</SectionContentListItem>
                    <SectionContentListItem align="right" title="2024年5月~2024年8月">mocomoco株式会社 リードエンジニア</SectionContentListItem>
                    <SectionContentListItem align="right" title="2023年5月~">奈良先端科学技術大学院大学 リサーチアシスタント</SectionContentListItem>
                    <SectionContentListItem align="right" title="2024年8月~">mocomoco株式会社 取締役CTO</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle title="Works"><BookOpenIcon /></SectionTitle>
            <SectionContent>
                <SectionSubTitle>プロダクト</SectionSubTitle>
                <Works>
                    <WorkCard
                        title="ggml-imax（開発中）"
                        yearMonth="2024/03~"
                        imgSrc="/dummy.svg"
                        href="https://github.com/NAIST-Archlab/ggml-imax"
                        description="開発中のggmlのIMAX実装です。"
                        tags={["C", "ggml", "IMAX", "Research"]}
                    />
                    <WorkCard
                        title="Portfolio Website"
                        yearMonth="2023/12~"
                        imgSrc="/works/portfolio.png"
                        href="https://prokuma.dev"
                        description="このサイトです。"
                        tags={["Svelte", "TypeScript"]} 
                    />
                    <WorkCard
                        title="PL Accounting"
                        yearMonth="2023/08~"
                        imgSrc="/works/placcounting.png"
                        href="https://github.com/Prokuma/PLAccounting-Backend"
                        description="個人事業主向けの簡易会計ソフトウェアです。"
                        tags={["Go", "Gin", "GORM", "Svelte", "TypeScript"]} 
                    />
                    <WorkCard
                        title="Status Screen"
                        yearMonth="2023/08~"
                        imgSrc="/works/status_screen.jpeg"
                        href="https://qiita.com/Prokuma/items/74faf08a7b62093c9d49"
                        description="研究室に置いてあるステータスボードです。"
                        tags={["Android", "Kotlin", "Firebase", "Nuxt.js", "TypeScript"]}
                    />
                    <WorkCard
                        title="IMAX_GNN"
                        yearMonth="2023/01~"
                        imgSrc="/works/gcn.png"
                        href="https://github.com/NAIST-Archlab/IMAX_GMN"
                        description="研究で書いたIMAX上で動くGNNの実装です。"
                        tags={["C", "CUDA", "GCN", "IMAX", "Research"]}
                    />
                    <WorkCard
                        title="Kasumi"
                        yearMonth="2022/08~"
                        imgSrc="/works/kasumi.png"
                        href="https://github.com/Prokuma/Kasumi"
                        description="RISC-V RV32IのVerilog実装です。"
                        tags={["Verilog", "RISC-V"]}
                    />
                    <WorkCard
                        title="Ayumu"
                        yearMonth="2021/06"
                        imgSrc="/works/ayumu.avif"
                        href="https://github.com/Prokuma/Ayumu"
                        description="初自前設計の自作CPUです。"
                        tags={["Verilog", "CPU"]}
                    />
                    <WorkCard
                        title="Memo Counter"
                        yearMonth="2020/03"
                        imgSrc="/works/memo_counter.webp"
                        href="https://play.google.com/store/apps/details?id=kr.prokuma.memocounter"
                        description="伝票が出ない居酒屋などで注文したものをメモしておくアプリです。"
                        tags={["Android", "Kotlin"]}
                    />
                    <WorkCard
                        title="Contour Camera"
                        yearMonth="2018/09"
                        imgSrc="/works/contour_camera.jpeg"
                        href="https://github.com/Prokuma/Contour-Camera"
                        description="輪郭検出機能を使った線画カメラアプリです。"
                        tags={["iOS", "Swift", "OpenCV"]}
                    />
                </Works>
            </SectionContent>
            <br />
            <SectionContent align="right">
                <SectionSubTitle>論文</SectionSubTitle>
                <SectionContentList>
                    <SectionContentListItem>
                        <IconLink href="https://ieeexplore.ieee.org/document/10531184" withText={true}>
                            <PostIcon /> <b>D.Kim</b>, K.Asahina, Y.Kan, R.Zhang, Y.Nakashima: "Power-Efficient Acceleration of GCNs on CGLAs", Cool Chips 27, Apr, (2024).
                        </IconLink>
                    </SectionContentListItem>
                    <SectionContentListItem>
                        <IconLink href="https://ken.ieice.org/ken/paper/20230804cCvO/" withText={true}>
                            <PostIcon /> (査読なし) リニアアレイ型CGRA向けGCN実装方法の検討と評価, <b>金 道鉉</b>, 中島康彦, CPSY2023, Aug, (2023).
                        </IconLink>
                    </SectionContentListItem>
                </SectionContentList>
            </SectionContent>
        </Section>

        <Section>
            <SectionTitle title="Contact"><MailIcon /></SectionTitle>
            <SectionContent>
                <SectionContentList>
                    <SectionContentListItem title="GitHub">
                        <IconLink href="https://github.com/Prokuma" withText={true}>
                            <GitHubIcon />Prokuma
                        </IconLink>
                    </SectionContentListItem>
                    <SectionContentListItem title="X">
                        <IconLink href="https://twitter.com/ProkumaDev" withText={true}><TwitterIcon />ProkumaDev</IconLink>
                        <IconLink href="https://twitter.com/ProkumaH" withText={true}><TwitterIcon />ProkumaH</IconLink>
                    </SectionContentListItem>
                    <SectionContentListItem title="Email"><MailIcon />prokuma [a.t.] prokuma.dev ([at]を@に置き換えてください)</SectionContentListItem>
                </SectionContentList>
            </SectionContent>
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