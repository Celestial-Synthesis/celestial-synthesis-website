import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("uses the Netlify forwarded country header in the visitor-country API", async ({
    request,
  }) => {
    const response = await request.get("/api/visitor-country", {
      headers: {
        "x-netlify-country-code": "MY",
      },
    });

    expect(response.ok()).toBe(true);
    await expect(response.headers()["content-type"]).toMatch(
      /application\/json/,
    );
    await expect(response.json()).resolves.toEqual({ countryCode: "MY" });
  });

  test("renders successfully with the hero content in production-like routing", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", {
        name: "Celestial Synthesis",
      }),
    ).toBeVisible();
    await expect(page.locator(".hero-copy .lead .lead-line")).toHaveCount(2);
    await expect(page.getByText("Where boundless imagination")).toBeVisible();
    await expect(page.getByText("becomes precise solutions.")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Talk To Our Team" }).first(),
    ).toBeVisible();
    await expect(
      page.getByAltText("Website and product planning illustration"),
    ).toHaveAttribute("src", "/images/header/website-illustration.webp");
    await expect(
      page.getByAltText("Business systems and SaaS illustration"),
    ).toHaveAttribute(
      "src",
      "/images/header/business-system-illustration.webp",
    );
    await expect(
      page.getByRole("heading", {
        name: "We can help you turn AI from a buzzword into a useful business capability.",
      }),
    ).toBeVisible();
    await expect(page.locator(".ai-feature")).toHaveCount(3);
    await expect(
      page.getByRole("heading", {
        name: "AI-powered automation with human checks",
      }),
    ).toBeVisible();
    await expect(
      page.locator(".home").evaluate((element) => {
        const sections = Array.from(element.querySelectorAll("section"));
        return sections.findIndex((section) => section.classList.contains("audience")) <
          sections.findIndex((section) => section.classList.contains("ai-solutions"));
      }),
    ).resolves.toBe(true);
    await expect(
      page.locator(".ai-solutions").evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
      }),
    ).resolves.toBe("rgb(238, 245, 253)");
    await expect(
      page.locator(".audience").evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
      }),
    ).resolves.toBe("rgb(255, 255, 255)");
    await expect(page.locator(".audience-note")).toHaveCount(3);
    await expect(page.locator(".audience-item__kicker")).toHaveCount(3);
    await expect(page.locator(".audience-item__kicker").nth(0)).toHaveText(
      "Visibility",
    );
    await expect(page.locator(".audience-item__kicker").nth(1)).toHaveText(
      "Operations",
    );
    await expect(page.locator(".audience-item__kicker").nth(2)).toHaveText(
      "New Product",
    );
    await expect(page).toHaveTitle("Celestial Synthesis | Software Company");
  });

  test("routes the floating WhatsApp contact to the MY number for Malaysian visitors", async ({
    page,
  }) => {
    await page.route("**/api/visitor-country", async (route) => {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({ countryCode: "MY" }),
      });
    });

    await page.goto("/");

    const contactLink = page.getByRole("link", {
      name: "Contact us on WhatsApp",
    });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute(
      "href",
      "https://wa.me/60166823630?text=Hi%20Celestial%20Synthesis%2C%20I%20would%20like%20to%20ask%20about%20an%20IT%20or%20software%20solution.",
    );
    await expect(contactLink).toHaveAttribute("data-country-code", "MY");
  });

  test("routes the floating WhatsApp contact to the SG number for non-Malaysian visitors", async ({
    page,
  }) => {
    await page.route("**/api/visitor-country", async (route) => {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({ countryCode: "US" }),
      });
    });

    await page.goto("/");

    const contactLink = page.getByRole("link", {
      name: "Contact us on WhatsApp",
    });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute(
      "href",
      "https://wa.me/6594869825?text=Hi%20Celestial%20Synthesis%2C%20I%20would%20like%20to%20ask%20about%20an%20IT%20or%20software%20solution.",
    );
    await expect(contactLink).toHaveAttribute("data-country-code", "SG");
  });

  test("highlights team credentials on the about page", async ({ page }) => {
    await page.goto("/about");

    await expect(
      page.getByRole("heading", {
        name: "A team shaped by strong academic grounding and high-scale product work.",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "NUS graduates with Master's degrees",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Experience from the largest ecommerce platform in Southeast Asia and large-scale mobile products",
      }),
    ).toBeVisible();
  });

  test("shows direct WhatsApp links on the contact page", async ({ page }) => {
    await page.goto("/contact");

    await expect(
      page.getByRole("link", { name: "WhatsApp SG: +65 9486 9825" }),
    ).toHaveAttribute(
      "href",
      "https://wa.me/6594869825?text=Hi%20Celestial%20Synthesis,%20I%20would%20like%20to%20ask%20about%20an%20IT%20or%20software%20solution.",
    );
    await expect(
      page.getByRole("link", { name: "WhatsApp MY: +60 1668 23630" }),
    ).toHaveAttribute(
      "href",
      "https://wa.me/60166823630?text=Hi%20Celestial%20Synthesis,%20I%20would%20like%20to%20ask%20about%20an%20IT%20or%20software%20solution.",
    );
  });

  test("keeps the site width fixed and centered on ultra-wide screens", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Celestial Synthesis",
      }),
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
