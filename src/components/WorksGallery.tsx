"use client";

/* モーダルの開閉にstateを使うためClient Component */
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./WorksGallery.module.css";

type Work = {
  src: string;
  label: string;
  before: string | null; /* before画像がない場合はnull */
};

export default function WorksGallery({ works }: { works: Work[] }) {
  const [selected, setSelected] = useState<Work | null>(null);

  /* ESCキーでモーダルを閉じる */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelected(null);
  }, []);

  useEffect(() => {
    if (selected) {
      document.addEventListener("keydown", handleKeyDown);
      /* モーダル表示中はスクロールを無効化 */
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, handleKeyDown]);

  return (
    <>
      {/* 写真グリッド */}
      <div className={styles.grid}>
        {works.map((work) => (
          <div
            key={work.src}
            className={styles.card}
            onClick={() => work.before && setSelected(work)}
          >
            <Image
              src={work.src}
              alt={work.label}
              fill
              className={styles.photo}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            {/* ホバー時のラベル */}
            <span className={styles.label}>{work.label}</span>
            {/* before画像がある場合のバッジ */}
            {work.before && (
              <span className={styles.beforeBadge}>BEFORE を見る</span>
            )}
          </div>
        ))}
      </div>

      {/* モーダル */}
      {selected?.before && (
        /* オーバーレイクリックで閉じる */
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()} /* モーダル内クリックは閉じない */
          >
            {/* ヘッダー：BEFOREラベル + 閉じるボタン（常に表示） */}
            <div className={styles.modalHeader}>
              <span className={styles.modalLabel}>BEFORE</span>
              <button
                className={styles.closeButton}
                onClick={() => setSelected(null)}
                aria-label="閉じる"
              >
                ✕
              </button>
            </div>
            {/* before画像 */}
            <Image
              src={selected.before}
              alt={`${selected.label} ビフォー`}
              width={860}
              height={645}
              className={styles.modalImage}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
