import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://srextremepovertyhr.org",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es-ES", en: "en" },
      },
      filter: (page) => !page.includes("/preview/"),
    }),
  ],
});
