
const BasePage = require('./BasePage');

class HomePage extends BasePage {

    constructor(page) {
        super(page);

        this.loginLink = page.locator('.ico-login');
        this.logoutLink = page.locator('.ico-logout');
        this.registerLink = page.locator('.ico-register');
        this.searchBox = page.locator('#small-searchterms');
        this.searchButton = page.locator('.search-box-button');
    }

    async openHomePage() {
        await this.navigateTo('/');
    }

    async clickLogin() {
        await this.loginLink.click();
    }

    async isLoggedIn() {
        return await this.logoutLink.isVisible();
    }
  
        async clickRegister() {
    await this.registerLink.click();
}

async searchProduct(productName) {
    await this.searchBox.fill(productName);
    await this.searchButton.click();
}

}

module.exports = HomePage;
