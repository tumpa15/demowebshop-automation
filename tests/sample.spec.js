
const { test, expect } = require('@playwright/test');

test('Verify Demo Web Shop homepage', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await expect(page).toHaveTitle(/Demo Web Shop/);
});
