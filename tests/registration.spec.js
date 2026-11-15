const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');

test('Verify successful customer registration', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const email = `antara${Date.now()}@gmail.com`;

    await page.goto('https://demowebshop.tricentis.com/register');

    await registerPage.registerCustomer(
        'Antara',
        'Aditya',
         email,
        'Test@12345'
    );

    await expect(registerPage.successMessage).toBeVisible();

    await expect(registerPage.successMessage)
        .toContainText('Your registration completed');
});