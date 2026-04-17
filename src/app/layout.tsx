import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

/* Noto Sans JP を Google Fonts から読み込む */
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "崎原総合クリーン | 清掃・ガーデニング・建築",
  description:
    "より良いお住いのお手伝いをします。ハウスクリーニング・ガーデニング・建築リフォームなら崎原総合クリーンにお任せください。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
