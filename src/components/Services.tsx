import Image from "next/image";
import styles from "./Services.module.css";

/* 事業データ */
const SERVICES = [
  {
    en: "Gardening",
    ja: "ガーデニング事業",
    image: "/images/services_gardening.jpg",
    alt: "ガーデニング施工の様子",
    items: ["庭木の剪定・植栽", "草刈・除草", "剪採・筑根", "雑草対策・管理作業"],
  },
  {
    en: "Construction",
    ja: "建築事業",
    image: "/images/services_construction.jpg",
    alt: "建築・リフォームの施工例",
    items: ["リフォーム工事", "外構工事", "塗装工事"],
  },
  {
    en: "Cleaning",
    ja: "清掃事業",
    image: "/images/services_cleaning.jpg",
    alt: "ハウスクリーニングの様子",
    items: ["ハウスクリーニング", "定期清掃"],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        {/* セクション見出し */}
        <p className={styles.sectionLabel}>Services</p>
        <h2 className={styles.sectionTitle}>事業紹介</h2>

        {/* 3事業カードグリッド */}
        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.en} className={styles.card}>
              {/* サムネイル画像：fillで親要素に合わせてトリミング */}
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className={styles.thumbnail}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* テキストエリア */}
              <div className={styles.cardBody}>
                <p className={styles.cardEn}>{service.en}</p>
                <h3 className={styles.cardTitle}>{service.ja}</h3>
                <ul className={styles.cardList}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
