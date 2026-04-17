/**
 * 施工事例画像の最適化スクリプト
 * - public/images/works_src/ に元の高解像度画像を入れてから実行
 * - 800×600px（4:3）にリサイズ＆トリミングして public/images/ に出力
 * - ファイル名はそのまま維持
 *
 * 使い方:
 *   node scripts/optimize-works.mjs
 */

import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

/* スクリプトの場所を基準に絶対パスを解決 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, "..");

const SRC_DIR  = path.join(ROOT, "public/images/works_src");   // 元画像の置き場
const OUT_DIR  = path.join(ROOT, "public/images");             // 出力先
const WIDTH    = 800;
const HEIGHT   = 600;

/* works_src フォルダがなければ作成 */
if (!existsSync(SRC_DIR)) {
  await mkdir(SRC_DIR, { recursive: true });
  console.log(`📁 ${SRC_DIR} を作成しました。元画像をここに入れてください。`);
  process.exit(0);
}

const files = (await readdir(SRC_DIR)).filter((f) =>
  /\.(jpe?g|png|webp|heic)$/i.test(f)
);

if (files.length === 0) {
  console.log(`⚠️  ${SRC_DIR} に画像が見つかりません。`);
  process.exit(0);
}

console.log(`🔄 ${files.length} 枚の画像を最適化します...\n`);

for (const file of files) {
  const srcPath = path.join(SRC_DIR, file);
  /* 拡張子を .jpg に統一して出力 */
  const outName = path.basename(file, path.extname(file)) + ".jpg";
  const outPath = path.join(OUT_DIR, outName);

  await sharp(srcPath)
    .resize(WIDTH, HEIGHT, {
      fit: "cover",          /* 4:3にトリミング（中央基準） */
      position: "center",
    })
    .jpeg({ quality: 85 })   /* 画質85%で圧縮 */
    .toFile(outPath);

  const srcStat  = (await import("fs")).statSync(srcPath);
  const outStat  = (await import("fs")).statSync(outPath);
  const ratio    = ((1 - outStat.size / srcStat.size) * 100).toFixed(0);

  console.log(`✅ ${file}`);
  console.log(`   ${(srcStat.size / 1024 / 1024).toFixed(1)}MB → ${(outStat.size / 1024).toFixed(0)}KB (${ratio}% 削減)\n`);
}

console.log("🎉 最適化完了！");
