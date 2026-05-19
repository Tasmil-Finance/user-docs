import sharp from "sharp";
import { readFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

function collectImageRefs(): string[] {
  const contentDir = join(__dirname, "..", "content", "docs");
  const paths = collectMdx(join(contentDir));
  const refs: Set<string> = new Set();

  for (const p of paths) {
    const text = readFileSync(p, "utf-8");
    // Match ![alt](/docs/...) markdown images
    const mdMatches = text.matchAll(/!\[.*?\]\((\/docs\/.*?\.png)\)/g);
    for (const m of mdMatches) refs.add(m[1]);
    // Match src="/docs/..." in JSX components (StepScreenshot, img, etc.)
    const srcMatches = text.matchAll(/src="(\/docs\/.*?\.png)"/g);
    for (const m of srcMatches) refs.add(m[1]);
  }

  return [...refs];
}

function collectMdx(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...collectMdx(full));
    else if (entry.name.endsWith(".mdx")) results.push(full);
  }
  return results;
}

function capitalizeFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function labelFromPath(url: string): string {
  // /docs/getting-started/first-deployment.png -> "First Deployment"
  const name = url.replace(/^\/docs\//, "").split("/").slice(1).join(" / ");
  const file = url.split("/").pop()!.replace(/\.png$/, "");
  return file
    .split("-")
    .map(capitalizeFirst)
    .join(" ");
}

async function main() {
  const refs = collectImageRefs();
  console.log(`Found ${refs.length} image refs`);

  for (const url of refs) {
    const filePath = join(PUBLIC_DIR, url);
    const dir = join(filePath, "..");
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

    if (existsSync(filePath)) {
      console.log(`  SKIP (exists): ${url}`);
      continue;
    }

    const label = labelFromPath(url);
    const svg = `<svg width="1200" height="700" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a2e"/>
  <rect x="2" y="2" width="1196" height="696" fill="none" stroke="#3a3a5e" stroke-width="1" rx="8"/>
  <text x="600" y="340" font-family="sans-serif" font-size="28" fill="#8888bb" text-anchor="middle">${label}</text>
  <text x="600" y="380" font-family="sans-serif" font-size="16" fill="#555577" text-anchor="middle">placeholder screenshot</text>
</svg>`;

    await sharp(Buffer.from(svg)).png().toFile(filePath);
    console.log(`  CREATED: ${url}`);
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
