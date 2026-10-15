import { describe, expect, it } from "vitest";
import { exactEditorialDate, editorialRssDate } from "./editorial-dates";

describe("editorial date precision", () => {
  it("preserves exact calendar dates, including leap days", () => {
    expect(exactEditorialDate("2026-09-24")).toBe("2026-09-24");
    expect(exactEditorialDate("2028-02-29")).toBe("2028-02-29");
    expect(editorialRssDate("2026-09-24")).toBe("Thu, 24 Sep 2026 12:00:00 GMT");
  });

  it.each(["2026-10", "2026", "", "2026-02-29", "2026-09-31", "2026-13-01", "invalid"])(
    "does not fabricate an exact date from %j", (value) => {
      expect(exactEditorialDate(value)).toBeUndefined();
      expect(editorialRssDate(value)).toBeUndefined();
    },
  );
});
