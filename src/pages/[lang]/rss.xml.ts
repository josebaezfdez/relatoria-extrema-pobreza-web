import { itemsFor } from "@/data/content";
import { SITE_URL, type Locale } from "@/data/site";

export function getStaticPaths() {
  return [{ params: { lang: "es" } }, { params: { lang: "en" } }];
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
  const locale = (params.lang === "en" ? "en" : "es") as Locale;
  const items = itemsFor(locale);
  const title = locale === "es" ? "Actualidad de la Relatoría" : "Special Rapporteur news";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${SITE_URL}/${locale}/</link>
    <description>${escapeXml(locale === "es" ? "Informes, visitas y actividades del mandato." : "Reports, visits and mandate activities.")}</description>
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
