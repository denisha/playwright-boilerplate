import { test, expect } from '@playwright/test';

test.describe('Suite:', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Verify title low-level', async ({ page }) => {
    // Expect a title "to contain" a substring.
    expect(await page.title()).toContain('Playwright');
  });
});
