<script lang="ts">
    import Background from "$lib/Background.svelte";
    import Section from "$lib/Section.svelte";
    import SectionTitle from "$lib/SectionTitle.svelte";
    import SectionContent from "$lib/SectionContent.svelte";
	import Navigator from "$lib/Navigator.svelte";
    import PostIcon from 'svelte-material-icons/Post.svelte';
    import TwitterIcon from 'svelte-material-icons/Twitter.svelte';
    import GitHubIcon from 'svelte-material-icons/GitHub.svelte';
</script>

<Background />
<main>
    <div class="hero-placeholder"></div>
    <div class="content">
        <Section>
            <SectionTitle>About</SectionTitle>
            <SectionContent>
                <p>
                    <b>名前: </b>
                    金 道鉉(キム・ドヒョン、Dohyun Kim)
                </p>
                <p>
                    <b>出身: </b>
                    大韓民国仁川広域市
                </p>
                <p>
                    <b>所属: </b>
                    奈良先端科学技術大学院大学先端科学技術研究科
                </p>
                <p>
                    <b>興味: </b>
                    コンピュータ・アーキテクチャ、組込システム、FPGA、Webバックエンド、スマートフォンアプリ
                </p>
                <p>
                    <b>リンク: </b>
                    <a href="https://prokuma.hateblo.jp" class="icon-link">
                        <PostIcon />
                    </a>
                    <a href="https://github.com/Prokuma" class="icon-link">
                        <GitHubIcon />
                    </a>
                    <a href="https://twitter.com/ProkumaDev" class="icon-link">
                        <TwitterIcon />
                    </a>
                </p>
            </SectionContent>
        </Section>
        <Section>
            <SectionTitle>History</SectionTitle>
            <SectionContent>
                <p><b>学歴</b></p>
                <p>
                    <b>1999年3月  </b>
                    大韓民国京畿道高陽市 出生
                </p>
                <p>
                    <b>20??年?月  </b>
                    仁川広域市へ移住
                </p>
                <p>
                    <b>2015年3月~2018年2月  </b>
                    仁川松都高等学校
                </p>
                <p>
                    <b>2018年4月~2022年3月  </b>
                    九州工業大学 情報工学部 知能情報工学科
                </p>
                <p>
                    <b>2022年4月~2024年3月  </b>
                    奈良先端科学技術大学院大学 先端科学技術研究科 博士前期課程
                </p>
                <p>
                    <b>2024年4月~  </b>
                    奈良先端科学技術大学院大学 先端科学技術研究科 博士後期課程
                </p>
                <p><b>職歴</b></p>
                <p>
                    <b>2014年2月~2015年12月  </b>
                    起業したが一身上の都合により廃業
                </p>
                <p>
                    <b>2018年5月~2022年3月  </b>
                    株式会社オプティム アルバイトスタッフ
                    <SectionContent>
                        <p>- 技術調査/プログラミングなど</p>
                    </SectionContent>
                </p>
                <p>
                    <b>2023年8月~  </b>
                    個人事業主開業（ソフトウェア開発など）
                </p>
            </SectionContent>
        </Section>
    </div>
</main>

<Navigator />

<style lang="scss">
    main {
        position :relative;
        margin: 0 auto;
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
    }

    .icon-link {
        color: #000000;
        text-decoration: none;
        margin: 0 0.1rem;
        padding: 0.1rem;
        vertical-align: middle;
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