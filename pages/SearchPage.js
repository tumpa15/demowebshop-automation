
const BasePage = require('./BasePage');

class SearchPage extends BasePage {

    constructor(page) {
        super(page);

        this.searchResultItems = page.locator('.product-item');
        this.productTitles = page.locator('.product-title a');
    }

    async isProductDisplayed(productName) {
        const product = this.productTitles.filter({
            hasText: productName
        });

        return await product.isVisible();
    }

    async openProduct(productName) {
        const product = this.productTitles.filter({
            hasText: productName
        });

        await product.click();
    }
}

module.exports = SearchPage;
