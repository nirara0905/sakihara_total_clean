import Image from "next/image";
import styles from "./Reasons.module.css";

/* 各カードのデータ */
const REASONS = [
  {
    number: "1",
    title: "価格",
    description: "全て自社施工だから、高い作業品質と低価格を実現しています。",
    icon: "/images/reasons_price_icon.png",
    panel: "/images/reasons_price.jpg",
  },
  {
    number: "2",
    title: "技術",
    description: "業界10年以上の植木職人が施工いたします。",
    icon: "/images/reasons_skill_icon.png",
    panel: "/images/reasons_skill.jpg",
  },
  {
    number: "3",
    title: "管理",
    description: "弊社に管理もお任せください。お庭・植木を美しく保ちます。",
    icon: "/images/reasons_management_icon.png",
    panel: "/images/reasons_management.jpg",
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className={styles.reasons}>
      <div className={styles.inner}>
        {/* SVG見出し */}
        <div className={styles.titleWrapper}>
          <Image
            src="/images/reasons_text.svg"
            alt="選ばれる3つの理由"
            width={436}
            height={50}
            className={styles.titleImage}
          />
        </div>

        {/* 3枚カード */}
        <div className={styles.grid}>
          {REASONS.map((reason) => (
            <div key={reason.number} className={styles.card}>

              {/* 左上：数字バッジ */}
              <div className={styles.numberBadge}>{reason.number}</div>

              {/* 右上：アイコン（はみ出し） */}
              <div className={styles.iconWrapper}>
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  fill
                  className={styles.iconImage}
                  sizes="88px"
                />
              </div>

              {/* 緑パネル：比率そのままで画像表示 */}
              <div className={styles.panel}>
                <Image
                  src={reason.panel}
                  alt={reason.title}
                  width={800}
                  height={800}
                  className={styles.panelImage}
                />
              </div>

              {/* 説明文 */}
              <p className={styles.description}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
