
const { test, expect } = require('@playwright/test');

const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

test('Verify product quantity update in shopping cart', async ({ page }) => {

    // Create Page Objects
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to Homepage
    await productPage.navigateTo();

    // Step 2: Navigate to Books Category
    await productPage.navigateToBooks();

    // Step 3: Select Health Book
    await productPage.selectHealthBook();

    // Step 4: Update Product Quantity
    await productPage.updateQuantity(1);

    // Step 5: Add Product to Cart
    await productPage.addToCart();

    // Step 6: Open Shopping Cart
    await productPage.openShoppingCart();

    // Step 7: Verify Cart Quantity
    await expect(cartPage.quantityInput).toHaveValue('1');

    // Step 8: Update Cart Quantity
    await cartPage.updateQuantity(2);

    // Step 9: Verify Updated Quantity
    await expect(cartPage.quantityInput).toHaveValue('2');

});
