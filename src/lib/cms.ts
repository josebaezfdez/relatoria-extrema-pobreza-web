import { editorialItems, staticPages, type EditorialItem, type StaticPage } from "@/data/content";
import type { Locale } from "@/data/site";

interface CmsCollection<T> {
  items: T[];
  source: "wordpress" | "local";
}

const endpoint = import.meta.env.CMS_API_URL?.replace(/\/$/, "");

async function request<T>(path: string): Promise<T | null> {
  if (!endpoint) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 2_000);
  try {
    const response = await fetch(`${endpoint}${path}`, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`CMS request failed: ${response.status}`);
    return (await response.json()) as T;
  } catch (error) {
    console.warn("Using local editorial seed because the CMS is unavailable.", error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function getEditorialItems(locale: Locale): Promise<CmsCollection<EditorialItem>> {
  const remote = await request<{ items: EditorialItem[] }>(`/content?locale=${locale}`);
  if (remote?.items?.length) return { items: remote.items, source: "wordpress" };
  return { items: editorialItems.filter((item) => item.locale === locale), source: "local" };
}

export async function getStaticPages(locale: Locale): Promise<CmsCollection<StaticPage>> {
  const remote = await request<{ items: StaticPage[] }>(`/pages?locale=${locale}`);
  if (remote?.items?.length) return { items: remote.items, source: "wordpress" };
  return { items: staticPages.filter((page) => page.locale === locale), source: "local" };
}
