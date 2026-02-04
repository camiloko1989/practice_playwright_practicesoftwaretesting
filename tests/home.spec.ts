import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('Successful search', async ({ page }) => {
  let homePage = new HomePage(page);
    await homePage.goto();
    await homePage.searchInput.fill('Hammer');
    await homePage.searchInput.press('Enter');
    await expect(homePage.product).toBeVisible();
    await expect(homePage.product).toContainText('Hammer');
});

