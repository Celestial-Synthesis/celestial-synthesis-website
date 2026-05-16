import { expect, test } from "@playwright/test";

const flowrUrl = "http://flowr.celestialsynthesis.com/";

test.describe("FlowR external destination", () => {
  test("points public FlowR links to the external FlowR site", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("link", { name: "FlowR" }).first(),
    ).toHaveAttribute("href", flowrUrl);
    await expect(
      page.getByRole("link", { name: "Explore FlowR" }).first(),
    ).toHaveAttribute("href", flowrUrl);
    await expect(
      page.getByRole("link", { name: "Learn More About FlowR" }),
    ).toHaveAttribute("href", flowrUrl);

    await page.goto("/about");
    await expect(
      page.getByRole("link", { name: "Explore FlowR" }),
    ).toHaveAttribute("href", flowrUrl);

    await page.goto("/contact");
    await expect(
      page.getByRole("link", { name: "Explore FlowR" }),
    ).toHaveAttribute("href", flowrUrl);
    await expect(
      page.getByRole("link", { name: "Open FlowR Page" }),
    ).toHaveAttribute("href", flowrUrl);

    await page.goto("/products");
    await expect(
      page.locator(".product-card").getByRole("link", { name: /FlowR/ }),
    ).toHaveAttribute("href", flowrUrl);
  });

  test("does not serve removed local FlowR pages", async ({ page }) => {
    for (const route of [
      "/product/flowr",
      "/product/flow-r",
      "/product/flowr/privacy",
      "/product/flowr/terms",
      "/product/flowr/playground",
      "/product/flowr/playground/forms",
      "/product/flowr/playground/conditions",
    ]) {
      const response = await page.goto(route);

      expect(response?.status(), `${route} should be removed`).toBe(404);
    }
  });

  test("serves robots.txt and sitemap.xml for crawl discovery", async ({
    request,
  }) => {
    const robotsResponse = await request.get("/robots.txt");
    expect(robotsResponse.ok()).toBe(true);
    expect(robotsResponse.headers()["content-type"]).toMatch(/text\/plain/);
    const robots = await robotsResponse.text();
    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
    expect(robots).toContain(
      "Sitemap: https://celestialsynthesis.com/sitemap.xml",
    );

    const sitemapResponse = await request.get("/sitemap.xml");
    expect(sitemapResponse.ok()).toBe(true);
    expect(sitemapResponse.headers()["content-type"]).toMatch(/xml/);
    const sitemap = await sitemapResponse.text();
    expect(sitemap).toContain("<loc>https://celestialsynthesis.com/</loc>");
    expect(sitemap).toContain(
      "<loc>https://celestialsynthesis.com/about</loc>",
    );
    expect(sitemap).toContain(
      "<loc>https://celestialsynthesis.com/products</loc>",
    );
    expect(sitemap).toContain(
      "<loc>https://celestialsynthesis.com/contact</loc>",
    );
    expect(sitemap).not.toContain("/product/flowr");
    expect(sitemap).not.toContain("/product/flow-r");
  });
});
