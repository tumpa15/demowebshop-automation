
const BasePage = require('./BasePage');

class CartPage extends BasePage {

    constructor(page) {
        super(page);

        // Cart Page Elements
        this.cartTitle = page.locator('.page-title');

        // Cart Items
        // this.cartItems = page.locator('.cart-item-row');

        // Product Quantity
        this.quantityInput = page.locator('.qty-input');

        // Update Shopping Cart
        this.updateCartButton = page.locator('[name="updatecart"]');

        // Remove Product
        this.removeCheckbox = page.locator('[name="removefromcart"]');

        // Checkout
        this.termsCheckbox = page.locator('#termsofservice');
        this.checkoutButton = page.locator('#checkout');
    }

    async updateQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
        await this.updateCartButton.click();
    }

    async removeProduct() {
        await this.removeCheckbox.check();
        await this.updateCartButton.click();
    }

    async acceptTerms() {

    console.log(
        'Terms checkbox count:',
        await this.termsCheckbox.count()
    );

    console.log(
        'Current URL:',
        this.page.url()
    );

    await this.termsCheckbox.waitFor({
        state: 'visible',
        timeout: 10000
    });

    await this.termsCheckbox.check();
}

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

}

module.exports = CartPage;
