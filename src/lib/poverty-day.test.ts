import { describe, expect, it } from "vitest";
import { editorialItems, itemsFor, itemsForPage, localizedPathsFor, staticPages, type EditorialItem } from "../data/content";
import { povertyDayCopy, povertyDayTopic } from "../data/povertyDay2026";
import { locales } from "../data/site";

describe("Day against poverty thematic collection", () => {
  for (const locale of locales) {
    it(`publishes one translated video in ${locale} with a dedicated thematic page`, () => {
      const page = staticPages.find((entry) => entry.id === `poverty-day-${locale}`)!;
      expect(page.path).toBe(povertyDayCopy[locale].path);
      const { featuredItem, items } = itemsForPage(page);
      expect(featuredItem?.id).toBe(`poverty-day-video-2026-${locale}`);
      expect(featuredItem?.date).toBe("2026-10-17");
      expect(featuredItem?.type).toBe("media");
      expect(featuredItem?.video).toMatchObject({ width: 1920, height: 1080 });
      expect(featuredItem?.video?.src).toMatch(/^https:\/\/pub-.*\.r2\.dev\/videos\/day-against-poverty-2026-10-17-[a-f0-9]{12}\.mp4$/);
      expect(items).toEqual([]);
      expect(itemsFor(locale, "news")).toContainEqual(featuredItem);
      expect(featuredItem?.category).toBe("resources");
      expect(itemsFor(locale, "media")).not.toContainEqual(featuredItem);
      expect(localizedPathsFor(page, staticPages)).toEqual(Object.fromEntries(locales.map((language) => [language, povertyDayCopy[language].path])));
    });

    it(`includes future tagged activities without duplicating the featured video in ${locale}`, () => {
      const page = staticPages.find((entry) => entry.id === `poverty-day-${locale}`)!;
      const featured = editorialItems.find((entry) => entry.id === page.featuredItemId)!;
      const activity: EditorialItem = { ...featured, id: `future-activity-${locale}`, type: "event", date: "2026-10-20", video: undefined };
      const unrelated: EditorialItem = { ...activity, id: `unrelated-${locale}`, topics: ["cities-housing"] };
      const otherLocale = { ...activity, id: "other-language", locale: locales.find((language) => language !== locale)! };
      const selected = itemsForPage(page, [unrelated, otherLocale, featured, activity]);
      expect(selected.featuredItem).toEqual(featured);
      expect(selected.items).toEqual([activity]);
      expect(selected.items.every((entry) => entry.topics?.includes(povertyDayTopic))).toBe(true);
      expect(itemsForPage({ ...page, featuredItemId: "missing" }, [activity]).items).toEqual([activity]);
    });
  }
});
