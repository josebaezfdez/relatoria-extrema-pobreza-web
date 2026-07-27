import { describe, expect, it } from "vitest";
import { editorialItems, staticPages } from "../data/content";

describe("bilingual content contract", () => {
  it("has a reciprocal alternate for every editorial item", () => {
    for (const item of editorialItems) {
      const alternate = editorialItems.find((candidate) => candidate.path === item.alternatePath);
      expect(alternate, `Missing alternate for ${item.path}`).toBeTruthy();
      expect(alternate?.alternatePath).toBe(item.path);
      expect(alternate?.locale).not.toBe(item.locale);
    }
  });

  it("has unique public paths", () => {
    const paths = [...staticPages.map((page) => page.path), ...editorialItems.map((item) => item.path)];
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("uses locale-prefixed canonical paths", () => {
    for (const path of [...staticPages, ...editorialItems].map((entry) => entry.path)) {
      expect(path).toMatch(/^\/(es|en)\//);
      expect(path).toMatch(/\/$/);
    }
  });
});
