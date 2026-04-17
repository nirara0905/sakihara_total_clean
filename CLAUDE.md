# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

沖縄の清掃会社「崎原総合クリーン」のウェブサイト制作プロジェクト。現在は初期セットアップ段階で、パンフレット画像（`崎原総合クリーン_A4_4P_パンフ-01.jpg` / `-02.jpg`）をデザインの参考素材として使用する。

提供サービス：ハウスクリーニング、定期清掃、リフォーム管理など。

## ルール

- 日本語で回答すること
- コードにはコメントをつけること

## 技術スタック（予定）

設定ファイルのパーミッションから、以下の構成を想定：

- **フロントエンド**: npm ベースのプロジェクト（React / Next.js など）
- **スタイリング**: Tailwind CSS（`npx tailwindcss init` が許可済み）

## 開発コマンド（プロジェクト初期化後）

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run lint     # Lint 実行
npm run test     # テスト実行
```
