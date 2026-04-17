import Image from "next/image";
import styles from "./Contact.module.css";

const LINE_URL = "https://line.me/R/ti/p/@863tvbmd";
const PHONE = "098-989-4467";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        {/* セクション見出し */}
        <p className={styles.sectionLabel}>Contact</p>
        <h2 className={styles.sectionTitle}>お問い合わせ</h2>
        <p className={styles.lead}>
          清掃・ガーデニング・建築に関するご相談は
          <br />
          お気軽にLINEまたはお電話にてお問い合わせください。
        </p>

        {/* LINEボタン */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.lineButton}
        >
          <svg
            className={styles.lineIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
          LINEで無料相談
        </a>

        {/* QRコード + 電話番号 */}
        <div className={styles.subContact}>
          {/* QRコード */}
          <div className={styles.qrWrapper}>
            <Image
              src="/images/lineQR.jpg"
              alt="LINE QRコード"
              width={100}
              height={100}
              className={styles.qrImage}
            />
            <span className={styles.qrCaption}>QRコードでも追加できます</span>
          </div>

          {/* 縦の区切り線 */}
          <div className={styles.divider} aria-hidden="true" />

          {/* 電話番号 */}
          <div className={styles.phoneWrapper}>
            <span className={styles.phoneLabel}>お電話でのお問い合わせ</span>
            <a href={`tel:${PHONE.replace(/-/g, "")}`} className={styles.phoneNumber}>
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
