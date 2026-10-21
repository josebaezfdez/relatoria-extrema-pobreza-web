import { describe, expect, it } from "vitest";
import { editorialItems, staticPages, itemsForPage, localizedPathsFor, type EditorialItem } from "../data/content";
import { categories, topics, classification, editorialKey, classifyEditorialItem, formatsFor, relatedItems } from "../data/editorial-taxonomy";
import { locales } from "../data/site";

describe("editorial taxonomy", () => {
  it("classifies all 50 multilingual pieces with the agreed distribution", () => {
    expect(Object.keys(classification)).toHaveLength(50);
    for (const locale of locales) {
      const items = editorialItems.filter((item) => item.locale === locale);
      expect(items).toHaveLength(50);
      expect(items.reduce<Record<string, number>>((counts, item) => { counts[item.category!] = (counts[item.category!] || 0) + 1; return counts; }, {})).toEqual({ meetings: 21, academic: 17, culture: 2, press: 6, reports: 2, statements: 1, resources: 1 });
      for (const item of items) {
        expect(categories[item.category!][locale]).toBeTruthy();
        expect(item.topics?.every((topic) => topics[topic][locale])).toBe(true);
        for (const language of locales) {
          const translation = editorialItems.find((candidate) => candidate.path === localizedPathsFor(item, editorialItems)[language])!;
          expect(translation.category).toBe(item.category);
          expect(translation.topics).toEqual(item.topics);
        }
      }
    }
  });

  it("keeps existing archives consistent with the resolved collection", () => {
    for (const locale of locales) {
      const media = staticPages.find((page) => page.id === `media-${locale}`)!;
      const events = staticPages.find((page) => page.id === `events-${locale}`)!;
      expect(itemsForPage(media).items).toHaveLength(6);
      expect(itemsForPage(events).items).toHaveLength(40);
      expect(itemsForPage(media).items.every((item) => item.category === "press")).toBe(true);
    }
  });

  it("does not invent classifications for unknown CMS content or overwrite its fields", () => {
    const unknown = { ...editorialItems[0], id: "unknown-es", translation_group: "unknown", category: undefined };
    expect(classifyEditorialItem(unknown)).toEqual(unknown);
    const invalidMetadata = { ...unknown, category: "unknown-category", topics: ["unknown-topic", "cities-housing"] } as unknown as EditorialItem;
    expect(classifyEditorialItem(invalidMetadata)).toMatchObject({ id: unknown.id, category: undefined, topics: ["cities-housing"], body: unknown.body });
  });

  it("only shows formats backed by actual resources", () => {
    const sample = { ...editorialItems[0], video: undefined, audio: undefined, download: undefined, links: [] };
    expect(formatsFor(sample)).toEqual([]);
    expect(formatsFor({ ...sample, links: [{ label: "UN Web TV", href: "https://webtv.un.org/en/asset/recording" }] })).toEqual(["video"]);
    expect(formatsFor({ ...sample, video: { title: "Video", src: "/video.mp4" }, audio: { label: "Audio", href: "/audio.mp3" }, links: [{ label: "Report", href: "/report.pdf?download=1" }] })).toEqual(["video", "audio", "document"]);
  });

  it("relates topics without repeating translations or the original piece", () => {
    const item = editorialItems.find((candidate) => candidate.id === "cities-poverty-es")!;
    const related = relatedItems(item, [...editorialItems, ...editorialItems]);
    expect(related).toHaveLength(3);
    expect(new Set(related.map(editorialKey)).size).toBe(3);
    expect(related.every((candidate) => candidate.locale === "es" && candidate.id !== item.id && candidate.topics?.some((topic) => item.topics?.includes(topic)))).toBe(true);
    expect(relatedItems({ ...item, topics: [] }, editorialItems)).toEqual([]);
  });
});
