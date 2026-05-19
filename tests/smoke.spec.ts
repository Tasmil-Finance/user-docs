import { test, expect } from "@playwright/test";

// All 36 documentation routes across the 6 pillars
const docsRoutes = [
  // Top-level
  "/docs",
  // Introduction
  "/docs/introduction",
  "/docs/introduction/what-and-why",
  "/docs/introduction/supported",
  // Getting Started
  "/docs/getting-started",
  "/docs/getting-started/set-up-wallet",
  "/docs/getting-started/create-and-fund-vault",
  "/docs/getting-started/see-it-working",
  // Using the App (top-level)
  "/docs/using-the-app",
  "/docs/using-the-app/chat",
  "/docs/using-the-app/prompt-recipes",
  // Using the App > Aggregate
  "/docs/using-the-app/aggregate",
  "/docs/using-the-app/aggregate/swap",
  "/docs/using-the-app/aggregate/bridge",
  // Using the App > Farming
  "/docs/using-the-app/farming",
  "/docs/using-the-app/farming/smart-wallet-mode",
  "/docs/using-the-app/farming/deposit-mode",
  "/docs/using-the-app/farming/custom-mode",
  // Using the App > Portfolio
  "/docs/using-the-app/portfolio",
  "/docs/using-the-app/portfolio/performance-and-history",
  "/docs/using-the-app/portfolio/multi-asset",
  // How It Works
  "/docs/how-it-works",
  "/docs/how-it-works/vaults-and-presets",
  "/docs/how-it-works/strategies",
  "/docs/how-it-works/rebalance-engine",
  "/docs/how-it-works/ai-and-tools",
  "/docs/how-it-works/fees-and-yield",
  // Trust & Safety
  "/docs/trust-and-safety",
  "/docs/trust-and-safety/what-the-bot-can-do",
  "/docs/trust-and-safety/risks",
  "/docs/trust-and-safety/audits-and-addresses",
  "/docs/trust-and-safety/privacy",
  // Reference
  "/docs/reference",
  "/docs/reference/faq",
  "/docs/reference/glossary",
  "/docs/reference/troubleshooting",
  "/docs/reference/changelog",
  "/docs/reference/roadmap",
  "/docs/reference/sdk",
];

test("home page loads and shows Tasmil Finance", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("body")).toContainText("Tasmil Finance");
});

test("/docs loads and shows heading", async ({ page }) => {
  await page.goto("/docs");
  await expect(page.locator("h1")).toBeVisible();
});

test("/docs/getting-started loads", async ({ page }) => {
  await page.goto("/docs/getting-started");
  await expect(page).toHaveURL(/getting-started/);
  await expect(page.locator("h1")).toBeVisible();
});

test("navigation works", async ({ page }) => {
  await page.goto("/docs");
  const link = page.locator('a[href*="/docs/getting-started"]').first();
  await link.click();
  await expect(page).toHaveURL(/getting-started/);
});

test("search button is visible on docs pages", async ({ page }) => {
  await page.goto("/docs");
  await expect(
    page.locator('button[aria-label*="Search"], [data-search]').first(),
  ).toBeVisible();
});

test("dark theme class is present on html", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("mobile viewport works", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/docs");
  await expect(page.locator("h1")).toBeVisible();
});

test("/sitemap.xml returns 200", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
});

test("/llms.txt returns 200 with Tasmil Finance content", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.status()).toBe(200);
  expect(await res.text()).toContain("Tasmil Finance");
});

for (const route of docsRoutes) {
  test(`${route} returns 200 and renders h1`, async ({ page }) => {
    const res = await page.goto(route);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
  });
}
