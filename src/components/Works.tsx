import Image from "next/image";
import styles from "./Works.module.css";

/**
 * 施工事例データ
 * - src: public/images/ 以下のパス
 * - label: 写真に表示する工事名（ファイル名から「_番号」を除いた名称）
 *
 * 写真が増えたらここにオブジェクトを追加するだけでOK
 */
const WORKS = [
  { src: "/images/ウッドデッキ工事_92692499_0.jpg",  label: "ウッドデッキ工事" },
  { src: "/images/ガーデニング施工_3.jpg",            label: "ガーデニング" },
  { src: "/images/リフォーム工事_92700701_0.jpg",     label: "リフォーム工事" },
  { src: "/images/リフォーム工事_92708889_0.jpg",     label: "リフォーム工事" },
  { src: "/images/リフォーム工事_92708891_0.jpg",     label: "リフォーム工事" },
  { src: "/images/伐採_92692496_0.jpg",               label: "伐採" },
  { src: "/images/内部解体工事_92741654_0.jpg",       label: "内部解体工事" },
  { src: "/images/剪定工事_92782599_0.jpg",           label: "剪定工事" },
  { src: "/images/外壁塗装工事_92741667_0.jpg",       label: "外壁塗装工事" },
  { src: "/images/爆裂補修工事_92700718_0.jpg",       label: "爆裂補修工事" },
  { src: "/images/草刈工事_92692520_0.jpg",           label: "草刈工事" },
  { src: "/images/草刈工事_92708951_0.jpg",           label: "草刈工事" },
  { src: "/images/遮熱塗装工事_92774432_0.jpg",       label: "遮熱塗装工事" },
  { src: "/images/防水工事_92708928_0.jpg",           label: "防水工事" },
];

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.inner}>
        {/* セクション見出し */}
        <p className={styles.sectionLabel}>Works</p>
        <h2 className={styles.sectionTitle}>施工事例</h2>

        {/* フラットな写真グリッド */}
        <div className={styles.grid}>
          {WORKS.map((work) => (
            <div key={work.src} className={styles.card}>
              {/* 写真 */}
              <Image
                src={work.src}
                alt={work.label}
                fill
                className={styles.photo}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              {/* ホバー時に表示されるラベル */}
              <span className={styles.label}>{work.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
