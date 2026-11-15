
const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const SearchPage = require('../pages/SearchPage');
const ProductPage = require('../pages/ProductPage');

test('Verify product search and add product to cart', async ({ page }) => {

    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);

    // 1. Open Home Page
    await homePage.openHomePage();

    // 2. Search Product
    await homePage.searchProduct('Health Book');

    // 3. Verify Search URL
    await expect(page).toHaveURL(/search/);

    // 4. Verify Product in Search Results
    const isDisplayed = await searchPage.isProductDisplayed('Health Book');

    expect(isDisplayed).toBeTruthy();

    // 5. Open Product
    await searchPage.openProduct('Health Book');

    // 6. Verify Product Details
    await expect(page.locator('.product-name'))
        .toContainText('Health Book');

    // 7. Increase Quantity
    await productPage.updateQuantity(2);

    await expect(productPage.quantityInput).toHaveValue('2');

    // 8. Add to Cart
    await productPage.addToCart();

    // 9. Verify Success Notification
    await expect(
        page.locator('.bar-notification.success')
    ).toBeVisible();

    // 10. Open Shopping Cart
    await productPage.openShoppingCart();

    // 11. Verify Shopping Cart
    await expect(page).toHaveURL(/cart/);

 });

