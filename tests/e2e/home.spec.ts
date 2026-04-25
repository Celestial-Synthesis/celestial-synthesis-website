import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders successfully with the hero content in production-like routing", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { name: "Celestial Synthesis" }),
    ).toBeVisible();
    await expect(
      page.getByText("Where boundless imagination becomes precise solutions."),
    ).toBeVisible();
    await expect(page).toHaveTitle("Celestial Synthesis | Software Company");
  });

  test("keeps the site width fixed and centered on ultra-wide screens", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Celestial Synthesis" }),
    ).toBeVisible();

    const headerMetrics = await page.locator("#header").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const inner = element.querySelector(".header-inner");
      const innerRect = inner?.getBoundingClientRect();

      return {
        width: Math.round(rect.width),
        left: Math.round(rect.left),
        rightGap: Math.round(window.innerWidth - rect.right),
        innerWidth: innerRect ? Math.round(innerRect.width) : null,
      };
    });

    const layoutMetrics = await page
      .locator("#site-wrapper")
      .evaluate((element) => {
        const rect = element.getBoundingClientRect();

        return {
          width: Math.round(rect.width),
          left: Math.round(rect.left),
          rightGap: Math.round(window.innerWidth - rect.right),
          fontSize: getComputedStyle(document.documentElement).fontSize,
        };
      });

    const heroMetrics = await page.locator(".home").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const sectionInner = element.querySelector(".section-inner");
      const sectionInnerRect = sectionInner?.getBoundingClientRect();

      return {
        width: Math.round(rect.width),
        left: Math.round(rect.left),
        rightGap: Math.round(window.innerWidth - rect.right),
        sectionInnerWidth: sectionInnerRect
          ? Math.round(sectionInnerRect.width)
          : null,
      };
    });

    expect(layoutMetrics.width).toBe(1920);
    expect(
      Math.abs(layoutMetrics.left - layoutMetrics.rightGap),
    ).toBeLessThanOrEqual(1);
    expect(layoutMetrics.fontSize).toBe("15px");

    expect(headerMetrics.width).toBe(2560);
    expect(headerMetrics.left).toBe(0);
    expect(headerMetrics.rightGap).toBe(0);
    expect(headerMetrics.innerWidth).not.toBeNull();
    expect(headerMetrics.innerWidth).toBeLessThan(headerMetrics.width);

    expect(heroMetrics.width).toBe(2560);
    expect(heroMetrics.left).toBe(0);
    expect(heroMetrics.rightGap).toBe(0);
    expect(heroMetrics.sectionInnerWidth).not.toBeNull();
    expect(heroMetrics.sectionInnerWidth).toBeLessThan(layoutMetrics.width);
  });
});
