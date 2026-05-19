import { resolve } from "node:path";
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import { optimize } from "svgo";

const brandDir = resolve(import.meta.dirname ?? __dirname, "../public/brand");
const svgPath = resolve(brandDir, "logo.svg");

async function main() {
  // Optimize SVG
  const rawSvg = readFileSync(svgPath, "utf8");
  const { data: optimizedSvg } = optimize(rawSvg, { multipass: true });
  writeFileSync(svgPath, optimizedSvg);
  console.log("✓ Optimized logo.svg");

  // Generate icon PNGs
  const sizes = [16, 32, 180, 192, 512];
  for (const size of sizes) {
    await sharp(Buffer.from(optimizedSvg))
      .resize(size, size)
      .png()
      .toFile(resolve(brandDir, `icon-${size}.png`));
    console.log(`✓ icon-${size}.png`);
  }

  // Generate OG image
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <text x="50%" y="45%" text-anchor="middle" font-family="sans-serif" font-size="64" font-weight="bold" fill="white">Tasmil Finance</text>
  <text x="50%" y="58%" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#a3a3a3">AI-Managed DeFi Yield Vaults on Stellar</text>
</svg>`;

  await sharp(Buffer.from(ogSvg)).png().toFile(resolve(brandDir, "og-default.png"));
  console.log("✓ og-default.png");
}

main();
