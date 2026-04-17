import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

/* 会社概要データ */
const COMPANY_INFO = [
  { label: "会社名", value: "(株)崎原総合クリーン" },
  { label: "設立", value: "2018年" },
  { label: "代表取締役", value: "崎原 修平" },
  { label: "所在地", value: "〒904-0105 北谷町吉原966-20-3F" },
  { label: "FAX", value: "098-989-4467" },
  { label: "事業内容", value: "ガーデニング全般\nリフォーム工事 塗装工事 外構工事\nハウスクリーニング 定期清掃\n美容サロン運営" },
];

const PHONE = "098-989-4467";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* 上段：ロゴ + 会社情報 */}
        <div className={styles.top}>
          {/* ロゴ */}
          <div className={styles.logoArea}>
            <Image
              src="/images/logo_whilte.svg"
              alt="崎原総合クリーン"
              width={260}
              height={55}
            />
            <p className={styles.tagline}>より良いお住いのお手伝いをします</p>
          </div>

          {/* 会社概要 */}
          <dl className={styles.info}>
            {COMPANY_INFO.map(({ label, value }) => (
              /* Fragment に key を付ける */
              <React.Fragment key={label}>
                <dt className={styles.infoLabel}>{label}</dt>
                <dd className={styles.infoValue}>{value}</dd>
              </React.Fragment>
            ))}
            {/* 電話番号はタップで発信できるリンクに */}
            <dt className={styles.infoLabel}>電話番号</dt>
            <dd className={styles.infoValue}>
              <a href={`tel:${PHONE.replace(/-/g, "")}`} className={styles.infoPhone}>
                {PHONE}
              </a>
            </dd>
          </dl>
        </div>

        {/* コピーライト */}
        <p className={styles.bottom}>
          © {new Date().getFullYear()} 崎原総合クリーン All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
