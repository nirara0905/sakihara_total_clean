# デプロイ手順

## 使用サービス
- **GitHub** — コードの管理
- **Vercel** — ホスティング（Next.js と同じ開発元のため相性最高・無料枠あり）

---

## Step 1: GitHubにコードをあげる

### 1-1. GitHubでリポジトリを新規作成
1. [github.com](https://github.com) にログイン
2. 右上の「+」→「New repository」
3. Repository name を入力（例：`sakihara-total-clean`）
4. 「Private」を選択
5. 「Create repository」をクリック

### 1-2. ターミナルで実行
プロジェクトのフォルダで以下を順番に実行する。

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
git branch -M main
git push -u origin main
```

---

## Step 2: Vercelアカウント作成

1. [vercel.com](https://vercel.com) にアクセス
2. 「Sign Up」をクリック
3. 「Continue with GitHub」でGitHubアカウントと連携

---

## Step 3: Vercelにデプロイ

1. Vercelダッシュボードで「Add New Project」をクリック
2. 連携したGitHubのリポジトリ一覧が表示される
3. `sakihara-total-clean` の「Import」をクリック
4. 設定はデフォルトのまま「Deploy」をクリック
5. 数分後に公開URLが発行される（例：`https://sakihara-total-clean.vercel.app`）

---

## Step 4: 独自ドメインの設定（任意）

独自ドメイン（例：`sakihara-clean.com`）を使いたい場合：

1. Vercelダッシュボードのプロジェクトを開く
2. 「Settings」→「Domains」
3. ドメインを入力して「Add」
4. ドメイン管理会社（お名前.com・ムームードメインなど）でDNS設定を行う

---

## コードを更新したときの再デプロイ

GitHubに push するだけで **自動的に再デプロイ**されます。

```bash
git add .
git commit -m "更新内容のメモ"
git push
```

---

## トラブルシューティング

| 症状 | 対処 |
|------|------|
| pushできない | `git remote -v` でURLを確認 |
| Vercelでビルドエラー | `npm run build` をローカルで先に実行して確認 |
| 画像が表示されない | ファイル名の大文字・小文字を確認 |
