import { describe, expect, it } from "vitest";
import { editorialItems, itemsFor, localizedPathsFor, staticPages } from "../data/content";
import { locales } from "../data/site";

describe("multilingual content contract", () => {
  it("has Spanish, English and French versions for every editorial item", () => {
    for (const item of editorialItems) {
      const localizedPaths = localizedPathsFor(item, editorialItems);
      for (const locale of locales) {
        const alternate = editorialItems.find((candidate) => candidate.path === localizedPaths[locale]);
        expect(alternate, `Missing ${locale} translation for ${item.id}`).toBeTruthy();
        expect(alternate?.locale).toBe(locale);
      }
    }
  });

  it("has Spanish, English and French versions for every static page", () => {
    for (const page of staticPages) {
      const localizedPaths = localizedPathsFor(page, staticPages);
      for (const locale of locales) {
        const alternate = staticPages.find((candidate) => candidate.path === localizedPaths[locale]);
        expect(alternate, `Missing ${locale} translation for ${page.id}`).toBeTruthy();
        expect(alternate?.locale).toBe(locale);
      }
    }
  });

  it("has unique public paths", () => {
    const paths = [...staticPages.map((page) => page.path), ...editorialItems.map((item) => item.path)];
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("uses locale-prefixed canonical paths", () => {
    for (const entry of [...staticPages, ...editorialItems]) {
      expect(entry.path).toMatch(new RegExp(`^/${entry.locale}/`));
      expect(entry.path).toMatch(/^\/(es|en|fr)\//);
      expect(entry.path).toMatch(/\/$/);
    }
  });

  it("keeps the visits archive empty while showing visits in the news archive", () => {
    for (const locale of locales) {
      const visitsPage = staticPages.find((page) => page.id === `visits-${locale}`);
      expect(visitsPage?.listing).toBeUndefined();
      expect(visitsPage?.body).toContain(locale === "es" ? "Próximamente" : locale === "en" ? "Coming soon" : "Bientôt disponible");
      expect(itemsFor(locale, "news").some((item) => item.type === "visit")).toBe(true);
    }
  });
});
