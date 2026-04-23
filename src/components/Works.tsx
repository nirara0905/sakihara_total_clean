import styles from "./Works.module.css";
import WorksGallery from "./WorksGallery";

/**
 * 施工事例データ
 * - src   : アフター写真のパス
 * - label : 工事名ラベル
 * - before: ビフォー写真のパス（ない場合は null）
 *
 * before画像を追加したら before フィールドにパスを設定するだけでモーダルが有効になる
 */
const WORKS = [
  {
    src:    "/images/ウッドデッキ工事_92692499_0.jpg",
    label:  "ウッドデッキ工事",
    before: "/images/ウッドデッキ工事_92692499_before.jpg",
  },
  {
    src:    "/images/リフォーム工事_92700701_0.jpg",
    label:  "リフォーム工事",
    before: "/images/リフォーム工事_92700701_before.jpg",
  },
  {
    src:    "/images/リフォーム工事_92708889_0.jpg",
    label:  "リフォーム工事",
    before: "/images/リフォーム工事_92708889_before.jpg",
  },
  {
    src:    "/images/リフォーム工事_92708891_0.jpg",
    label:  "リフォーム工事",
    before: "/images/リフォーム工事_92708891_before.jpg",
  },
  {
    src:    "/images/内部解体工事_92741654_0.jpg",
    label:  "内部解体工事",
    before: "/images/内部解体工事_92741654_before.jpg",
  },
  {
    src:    "/images/剪定工事_92782599_0.jpg",
    label:  "剪定工事",
    before: "/images/剪定工事_92782599_before.jpg",
  },
  {
    src:    "/images/外壁塗装工事_92741667_0.jpg",
    label:  "外壁塗装工事",
    before: "/images/外壁塗装工事_92741667_before.jpg",
  },
  {
    src:    "/images/爆裂補修工事_92700718_0.jpg",
    label:  "爆裂補修工事",
    before: "/images/爆裂補修工事_92700718_before.jpg",
  },
  {
    src:    "/images/草刈工事_92692520_0.jpg",
    label:  "草刈工事",
    before: "/images/草刈工事_92692520_before.jpg",
  },
  {
    src:    "/images/草刈工事_92708951_0.jpg",
    label:  "草刈工事",
    before: "/images/草刈工事_92708951_before.jpg",
  },
  {
    src:    "/images/遮熱塗装工事_92774432_0.jpg",
    label:  "遮熱塗装工事",
    before: "/images/遮熱塗装工事_92774432_before.jpg",
  },
  {
    src:    "/images/防水工事_92708928_0.jpg",
    label:  "防水工事",
    before: "/images/防水工事_92708928_before.jpg",
  },
  {
    src:    "/images/外構工事_01.jpg",
    label:  "外構工事",
    before: "/images/外構工事_01_before.jpg",
  },
];

export default function Works() {
  return (
    <section id="works" className={styles.works}>
      <div className={styles.inner}>
        {/* セクション見出し */}
        <p className={styles.sectionLabel}>Works</p>
        <h2 className={styles.sectionTitle}>施工事例</h2>

        {/* インタラクティブなギャラリー（Client Component） */}
        <WorksGallery works={WORKS} />
      </div>
    </section>
  );
}
