import { describe, it, expect } from "vitest";
import { specialties } from "@/data/specialties";
import { approaches } from "@/data/approaches";

describe("specialties data integrity", () => {
  it("has entries", () => {
    expect(specialties.length).toBeGreaterThan(0);
  });

  it("has unique slugs", () => {
    const slugs = specialties.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has all three languages for every title/tag/summary", () => {
    for (const s of specialties) {
      expect(s.titleEs, `${s.slug} titleEs`).toBeTruthy();
      expect(s.titleEn, `${s.slug} titleEn`).toBeTruthy();
      expect(s.titlePt, `${s.slug} titlePt`).toBeTruthy();
      expect(s.tagEs && s.tagEn && s.tagPt, `${s.slug} tags`).toBeTruthy();
      expect(s.summaryEs && s.summaryEn && s.summaryPt, `${s.slug} summaries`).toBeTruthy();
    }
  });

  it("has non-empty body paragraphs and methods in every language", () => {
    for (const s of specialties) {
      expect(s.bodyEs.length, `${s.slug} bodyEs`).toBeGreaterThan(0);
      expect(s.bodyEn.length, `${s.slug} bodyEn`).toBeGreaterThan(0);
      expect(s.bodyPt.length, `${s.slug} bodyPt`).toBeGreaterThan(0);
      expect(s.methodsEs.length, `${s.slug} methodsEs`).toBeGreaterThan(0);
    }
  });
});

describe("approaches data integrity", () => {
  it("has unique slugs", () => {
    const slugs = approaches.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has all three languages for every title/summary/desc", () => {
    for (const a of approaches) {
      expect(a.titleEs && a.titleEn && a.titlePt, `${a.slug} titles`).toBeTruthy();
      expect(a.summaryEs && a.summaryEn && a.summaryPt, `${a.slug} summaries`).toBeTruthy();
      expect(a.descEs && a.descEn && a.descPt, `${a.slug} descs`).toBeTruthy();
    }
  });

  it("references an icon name", () => {
    for (const a of approaches) {
      expect(a.icon, `${a.slug} icon`).toBeTruthy();
    }
  });
});
