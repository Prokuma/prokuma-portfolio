import {
	mdiBookOpen,
	mdiGithub,
	mdiHistory,
	mdiInformation,
	mdiMail,
	mdiPost,
	mdiTwitter
} from '@mdi/js';

export interface NavigationItem {
	id: string;
	title: string;
	icon: string;
}

export const portfolioNavigation: NavigationItem[] = [
	{ id: 'about', title: 'About', icon: mdiInformation },
	{ id: 'history', title: 'History', icon: mdiHistory },
	{ id: 'works', title: 'Works', icon: mdiBookOpen },
	{ id: 'contact', title: 'Contact', icon: mdiMail }
];

export const privacyNavigation: NavigationItem[] = [
	{ id: 'privacy', title: 'Privacy Policies', icon: mdiInformation }
];

export const profile = [
	{ title: '名前', text: '金 道鉉 (Dohyun Kim)' },
	{ title: '居住', text: '茨城県' },
	{ title: '出身', text: '大韓民国仁川広域市' },
	{ title: '語学', text: '韓国語(ネイティブ) / 日本語(JLPT N1) / 英語(研究できる程度)' },
	{
		title: '興味',
		text: 'コンピュータ・アーキテクチャ / 組込システム / FPGA / Webバックエンドなど'
	},
	{ title: '研究分野', text: 'コンピュータ・アーキテクチャ' }
];

export const profileLinks = [
	{ title: 'Qiita', href: 'https://qiita.com/Prokuma', icon: mdiPost },
	{ title: 'Blog', href: 'https://prokuma.hateblo.jp', icon: mdiPost },
	{ title: 'Prokuma', href: 'https://github.com/Prokuma', icon: mdiGithub }
];

export const skills = [
	{ title: '言語', text: 'C / Python / CUDA / Verilog / Go / TypeScript / Swift / Kotlin' },
	{ title: '分野', text: 'FPGA / 電子工作 / 機械学習 / Web / iOS / Android' },
	{
		title: 'ツール',
		text: 'Vim / Docker / Kubernetes / Git / Linux / Icarus Verilog / AWS / Firebase'
	},
	{ title: 'ライブラリ', text: 'Gin / GORM / OpenMP / PyTorch / Svelte / Nuxt.js / Next.js' }
];

export const education = [
	{ title: '199?年3月', text: '大韓民国京畿道高陽市生まれ' },
	{ title: '200?年?月', text: '仁川広域市へ移住' },
	{
		title: '2018年4月~2022年3月',
		text: '九州工業大学 情報工学部 知能情報工学科 学士（情報工学）'
	},
	{
		title: '2022年4月~2024年3月',
		text: '奈良先端科学技術大学院大学 先端科学技術研究科 博士前期課程 修士（工学）'
	},
	{
		title: '2024年4月~2026年3月',
		text: '奈良先端科学技術大学院大学 先端科学技術研究科 博士後期課程 博士（工学）'
	}
];

export const employment = [
	{ title: '2018年5月~2022年3月', text: '株式会社オプティム アルバイトスタッフ' },
	{ title: '2024年5月~2024年8月', text: 'mocomoco株式会社 リードエンジニア' },
	{ title: '2023年5月~2025年9月', text: '奈良先端科学技術大学院大学 リサーチアシスタント' },
	{ title: '2024年8月~2026年2月', text: 'mocomoco株式会社 取締役CTO' },
	{ title: '2026年4月~', text: '???' }
];

export const works = [
	{
		title: 'Setsuna',
		yearMonth: '2026/09~',
		imgSrc: '/dummy.svg',
		href: 'https://github.com/Prokuma/Setsuna',
		description: 'RISC-V RV64GCのVerilog実装を目標としています。',
		tags: ['Verilog', 'RISC-V']
	},
	{
		title: 'PyIMAX',
		yearMonth: '2025/01~2026/01',
		imgSrc: '/pyimax.png',
		href: 'https://github.com/NAIST-Archlab/PyIMAX',
		description: 'IMAXカーネルのPythonラッパーです。',
		tags: ['C', 'C++', 'Pybind11', 'Python', 'IMAX', 'Research']
	},
	{
		title: 'Portfolio Website',
		yearMonth: '2023/12~',
		imgSrc: '/works/portfolio.png',
		href: 'https://prokuma.dev',
		description: 'このサイトです。',
		tags: ['Svelte', 'TypeScript']
	},
	{
		title: 'PL Accounting',
		yearMonth: '2023/08~',
		imgSrc: '/works/placcounting.png',
		href: 'https://github.com/Prokuma/PLAccounting-Backend',
		description: '個人事業主向けの簡易会計ソフトウェアです。',
		tags: ['Go', 'Gin', 'GORM', 'Svelte', 'TypeScript']
	},
	{
		title: 'Status Screen',
		yearMonth: '2023/08~',
		imgSrc: '/works/status_screen.jpeg',
		href: 'https://qiita.com/Prokuma/items/74faf08a7b62093c9d49',
		description: '研究室に置いてあるステータスボードです。',
		tags: ['Android', 'Kotlin', 'Firebase', 'Nuxt.js', 'TypeScript']
	},
	{
		title: 'IMAX_GNN',
		yearMonth: '2023/01~',
		imgSrc: '/works/gcn.png',
		href: 'https://github.com/NAIST-Archlab/IMAX_GMN',
		description: '研究で書いたIMAX上で動くGNNの実装です。',
		tags: ['C', 'CUDA', 'GCN', 'IMAX', 'Research']
	},
	{
		title: 'Kasumi',
		yearMonth: '2022/08~',
		imgSrc: '/works/kasumi.png',
		href: 'https://github.com/Prokuma/Kasumi',
		description: 'RISC-V RV32IのVerilog実装です。',
		tags: ['Verilog', 'RISC-V']
	},
	{
		title: 'Ayumu',
		yearMonth: '2021/06',
		imgSrc: '/works/ayumu.avif',
		href: 'https://github.com/Prokuma/Ayumu',
		description: '初自前設計の自作CPUです。',
		tags: ['Verilog', 'CPU']
	},
	{
		title: 'Memo Counter',
		yearMonth: '2020/03',
		imgSrc: '/works/memo_counter.webp',
		href: 'https://play.google.com/store/apps/details?id=kr.prokuma.memocounter',
		description: '伝票が出ない居酒屋などで注文したものをメモしておくアプリです。',
		tags: ['Android', 'Kotlin']
	},
	{
		title: 'Contour Camera',
		yearMonth: '2018/09',
		imgSrc: '/works/contour_camera.jpeg',
		href: 'https://github.com/Prokuma/Contour-Camera',
		description: '輪郭検出機能を使った線画カメラアプリです。',
		tags: ['iOS', 'Swift', 'OpenCV']
	}
];

export const publications = [
	{
		href: 'https://doi.org/10.1587/transinf.2026pap0002',
		year: 2026,
		venue: 'IEICE Transactions',
		highlight: 'D. Kim',
		text: 'K. Asahina, D. Kim and Y. Nakashima, "IMAX-SpMM: An Energy-Efficient and Dataflow-Optimized SpMM Kernel on CGLA for GNNs", IEICE Trans., Vol.E110-D,No.01,pp.-,Jun. (2026)'
	},
	{
		href: 'https://ieeexplore.ieee.org/document/11048859',
		year: 2025,
		venue: 'IEEE Access',
		highlight: 'D. Kim',
		text: 'D. Kim and Y. Nakashima, "Optimizing Matrix-Vector Operations with CGLA for High-Performance Approximate k-NN Search," IEEE Access, Aug, (2025).'
	},
	{
		href: 'https://ieeexplore.ieee.org/document/10968638',
		year: 2025,
		venue: 'ICMLAS 2025',
		highlight: 'D. Kim',
		text: 'K. Asahina, D. Kim, T. Akabe, V. T. Duong Le, Y. Nakashima: "Energy-Efficient SpMM Kernels for GATs and GCNs on a CGLA", ICMLAS 2025, Mar, (2025).'
	},
	{
		href: 'https://ieeexplore.ieee.org/document/10531184',
		year: 2024,
		venue: 'Cool Chips 27',
		highlight: 'D.Kim',
		text: 'D.Kim, K.Asahina, Y.Kan, R.Zhang, Y.Nakashima: "Power-Efficient Acceleration of GCNs on CGLAs", Cool Chips 27, Apr, (2024).'
	},
	{
		href: 'https://2025.ieeeasru.org/',
		year: 2025,
		venue: 'ASRU 2025',
		highlight: 'Dohyun Kim',
		text: 'Shusuke Komatsu, Kazuyo Onishi, Koki Tanaka, Dohyun Kim and Koichiro Yoshino: "Efficient ASR Domain Adaptation with Long Noun Phrases: Harnessing the Linguistic Characteristics of Japanese", ASRU 2025, Dec, (2025).'
	},
	{
		href: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/P5-14.pdf',
		year: 2025,
		venue: 'NLP2025',
		highlight: '金 道鉉',
		text: '(査読なし) 合成単語データを用いた低コスト高品質な音声認識のドメイン適応, 小松 秀輔, 大西 一誉, 田中 康紀, 金 道鉉, 吉野 幸一郎, NLP2025, Mar, (2025).'
	},
	{
		href: 'https://ken.ieice.org/ken/paper/20230804cCvO/',
		year: 2023,
		venue: 'CPSY2023',
		highlight: '金 道鉉',
		text: '(査読なし) リニアアレイ型CGRA向けGCN実装方法の検討と評価, 金 道鉉, 中島康彦, CPSY2023, Aug, (2023).'
	}
];

export const contacts = [
	{
		title: 'GitHub',
		links: [{ title: 'Prokuma', href: 'https://github.com/Prokuma', icon: mdiGithub }]
	},
	{
		title: 'X',
		links: [
			{ title: 'ProkumaDev', href: 'https://twitter.com/ProkumaDev', icon: mdiTwitter },
			{ title: 'ProkumaH', href: 'https://twitter.com/ProkumaH', icon: mdiTwitter }
		]
	},
	{ title: 'Email', text: 'prokuma [a.t.] prokuma.dev ([at]を@に置き換えてください)' }
];

export const privacyItems = [
	'ストレージ（データベースの生成・修正など）',
	'送信情報: なし',
	'ユーザのデータ収集は一切行っておりません',
	'データは端末に保存されますが、アプリの作成者が閲覧することはできません',
	'ローカルで完結するアプリです'
];
