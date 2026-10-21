import { describe, expect, it } from "vitest";
import { readArchiveState, selectArchive } from "./archive-state";

describe("archive navigation", () => {
  const rows = Array.from({ length: 50 }, (_, index) => ({ id: index, category: index < 21 ? "meetings" : "academic", topics: index % 2 ? ["cities-housing"] : ["participation"] }));
  it("shows 12 results per page and caps out-of-range pages", () => {
    expect(selectArchive(rows, { category: "", topic: "", page: 1 }).visible.map((row) => row.id)).toEqual(Array.from({ length: 12 }, (_, i) => i));
    const result = selectArchive(rows, { category: "", topic: "", page: 99 });
    expect(result.page).toBe(5);
    expect(result.visible.map((row) => row.id)).toEqual([48, 49]);
  });
  it("combines category and topic filters and handles empty results", () => {
    const result = selectArchive(rows, { category: "meetings", topic: "cities-housing", page: 1 });
    expect(result.matches).toHaveLength(10);
    expect(result.matches.every((row) => row.id < 21 && row.id % 2 === 1)).toBe(true);
    expect(selectArchive(rows, { category: "missing", topic: "", page: 1 }).visible).toEqual([]);
  });
  it("restores shared URLs and ignores malformed or unknown values", () => {
    expect(readArchiveState(new URLSearchParams("category=meetings&topic=cities-housing&page=2"), ["meetings"], ["cities-housing"])).toEqual({ category: "meetings", topic: "cities-housing", page: 2 });
    for (const value of ["-1", "NaN", "Infinity", "2.5", "9999999999999999999999"]) {
      expect(readArchiveState(new URLSearchParams(`category=unknown&topic=unknown&page=${value}`), ["meetings"], ["cities-housing"])).toEqual({ category: "", topic: "", page: 1 });
    }
  });
});
