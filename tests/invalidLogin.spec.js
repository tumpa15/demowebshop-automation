
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Verify error message for invalid login', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    // Step 1: Open homepage
    await homePage.openHomePage();

    // Step 2: Navigate to login page
    await homePage.clickLogin();

    // Step 3: Enter invalid credentials
    await loginPage.login(
        'invalid.user@example.com',
        'WrongPassword123!'
    );

    // Step 4: Verify error message
    await expect(loginPage.errorMessage).toBeVisible();

    await expect(loginPage.errorMessage)
        .toContainText('Login was unsuccessful');

    // Step 5: Verify user is not logged in
    await expect(homePage.logoutLink).toBeHidden();

});
