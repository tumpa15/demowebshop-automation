
const BasePage = require('./BasePage');

class ProductPage extends BasePage {

    constructor(page) {
        super(page);

        // Product Category
       this.booksCategory = page.getByRole('link', { name: 'Books' }).first();

        // Product
        this.healthBook = page.getByAltText('Picture of Health Book');

        // Product Quantity
      this.quantityInput = page.locator('#addtocart_22_EnteredQuantity');

        // Product Details
        this.addToCartButton = page.locator('#add-to-cart-button-22');
      
        // Shopping Cart
      this.shoppingCart = page.locator('a.ico-cart').first();

      
    }

    async navigateToBooks() {
        await this.booksCategory.click();
    }

    async selectHealthBook() {
        await this.healthBook.click();
    }

      async updateQuantity(quantity) {
        await this.quantityInput.fill(String(quantity));
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openShoppingCart() {
    await this.shoppingCart.click();
}


}

module.exports = ProductPage;
