import { itemsFor } from "@/data/content";
import { locales, SITE_URL, type Locale } from "@/data/site";

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET({ params }: { params: { lang?: string } }) {
  const locale = (locales.includes(params.lang as Locale) ? params.lang : "es") as Locale;
  const items = itemsFor(locale);
  const copy = {
    es: {
      title: "Actualidad de la Relatoría",
      description: "Informes, visitas y actividades del mandato.",
    },
    en: {
      title: "Special Rapporteur news",
      description: "Reports, visits and mandate activities.",
    },
    fr: {
      title: "Actualités de la Rapporteuse spéciale",
      description: "Rapports, visites et activités du mandat.",
    },
  }[locale];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(copy.title)}</title>
    <link>${SITE_URL}/${locale}/</link>
    <description>${escapeXml(copy.description)}</description>
    <language>${locale}</language>
    ${items.map((item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE_URL}${item.path}</link>
      <guid>${SITE_URL}${item.path}</guid>
      <pubDate>${new Date(`${item.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(item.summary)}</description>
    </item>`).join("")}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
