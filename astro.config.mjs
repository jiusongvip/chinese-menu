import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.chinese-menus.com",
  trailingSlash: "always",
  build: {
    // Inline the small bundled CSS so it stops render-blocking the critical path.
    inlineStylesheets: "always",
  },
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
