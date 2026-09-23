# Prokuma Portfolio

SvelteKit + Svelte + TypeScriptで構築し、静的HTMLとしてNetlifyに公開するポートフォリオです。

## 開発環境

Node.js 24 LTSを使用します。Voltaを使う場合は`package.json`の指定が自動適用されます。nvmを使う場合は`nvm install && nvm use`を実行してください。

```sh
npm ci
npm run dev
```

## 変更の確認

```sh
npm run check
npm run lint
npm run build
npm run preview
```

整形には`npm run format`を使用します。ビルド成果物は`build/`に出力されます。
トップページ`/`とプライバシーポリシー`/privacy`を確認してください。

## CIと公開

- PRでは依存のクリーンインストール、型チェック、Lint、静的ビルドを実行します。本番デプロイは実行しません。
- mainへのpushでは同じ検証が成功したあと、固定バージョンのNetlify CLIで`build/`を本番公開します。
- GitHub ActionsのSecretsに`NETLIFY_SITE_ID`と`NETLIFY_AUTH_TOKEN`が必要です。
- Node.jsのメジャーバージョンは`.nvmrc`、`package.json`、`netlify.toml`で揃えてください。
- Netlify側でもGit連携による自動公開を有効にしている場合は、二重公開を避けるため公開経路を確認してください。

## 依存関係の更新

`package-lock.json`を必ずコミットし、CIとローカルでは`npm ci`を使用します。
SvelteKit・Svelte・Vite・`@sveltejs/vite-plugin-svelte`は互換性を確認して一緒に更新し、上記の検証を実行してください。
アイコンには`@mdi/js`と`src/lib/Icon.svelte`を使用しています。

## サイト内容の更新

プロフィール、スキル、学歴、職歴、作品、論文、連絡先は`src/lib/data/portfolio.ts`で管理しています。項目を追加・修正するとトップページに反映されます。各情報に使う画像は`static/`以下に置き、作品の`imgSrc`は`/works/ファイル名`の形式で指定します。

トップページのセクションを増減するときは、`portfolioNavigation`と`src/routes/+page.svelte`の`Section`を同時に更新します。`Section`の`id`はナビ項目の`id`と一致させます。privacyページのナビ項目は`privacyNavigation`で管理します。
