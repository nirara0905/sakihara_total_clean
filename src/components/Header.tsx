"use client";

/* ハンバーガーの開閉にstateを使うためClient Component */
import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

/* ナビゲーションリンクの定義 */
const NAV_LINKS = [
  { label: "事業紹介", href: "#services" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "施工事例", href: "#works" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* ロゴ：クリックでページトップへ */}
        <a href="#" className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="崎原総合クリーン"
            width={200}
            height={43}
            priority
          />
        </a>

        {/* デスクトップ：ナビゲーション / スマホ：ハンバーガー開閉 */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setIsOpen(false)} /* スマホでリンク押したら閉じる */
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ハンバーガーボタン（スマホのみ表示） */}
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          <span className={`${styles.bar} ${isOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${isOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${isOpen ? styles.barBot : ""}`} />
        </button>
      </div>
    </header>
  );
}
