// Post-build sitemap fix (technology-seo-check skill, rule 9):
// @astrojs/sitemap forces a trailing slash on the root URL (new URL().toString()),
// but the homepage canonical must be the bare domain https://www.chinese-menu.com.
// This script rewrites <loc>https://www.chinese-menu.com/</loc> → <loc>https://www.chinese-menu.com</loc>
// in every generated sitemap-*.xml file.
import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const homeUrl = "https://www.chinese-menu.com";
const files = fs
  .readdirSync(distDir)
  .filter((f) => f.startsWith("sitemap") && f.endsWith(".xml"));

let changed = 0;
for (const file of files) {
  const filePath = path.join(distDir, file);
  const xml = fs.readFileSync(filePath, "utf8");
  const fixed = xml.replaceAll(
    `<loc>${homeUrl}/</loc>`,
    `<loc>${homeUrl}</loc>`
  );
  if (fixed !== xml) {
    fs.writeFileSync(filePath, fixed);
    changed++;
    console.log(`fix-sitemap-home: ${file} — homepage loc without trailing slash`);
  }
}
console.log(
  changed > 0
    ? `fix-sitemap-home: done (${changed} file(s) updated)`
    : "fix-sitemap-home: no homepage loc found"
);
