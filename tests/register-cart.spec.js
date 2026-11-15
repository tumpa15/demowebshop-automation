
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');

test('Q2 - Register, Login and Add Health Book to Cart', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    const email = `antara${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // 1. Open Website
    await page.goto('/register');

    // 2. Register New Customer
    await registerPage.registerCustomer(
        'Antara',
        'Aditya',
        email,
        password
    );

    await expect(registerPage.successMessage)
        .toContainText('Your registration completed');

    // 3. Login
    await page.goto('/login');

    await loginPage.login(email, password);

    await expect(page.locator('.ico-logout')).toBeVisible();

    // 4. Navigate to Books Category
    await productPage.navigateToBooks();

    // 5. Select Health Book
    await productPage.selectHealthBook();

    // 6. Add Product to Shopping Cart
    await productPage.addToCart();

    // Verify Add to Cart notification
    await expect(page.locator('.bar-notification.success'))
        .toBeVisible();

     // Open Shopping Cart
    await productPage.openShoppingCart();

    // Verify Product Name
    await expect(page.getByRole('link', { name: 'Health Book' }))
    .toBeVisible();

});
