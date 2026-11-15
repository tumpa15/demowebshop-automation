
const BasePage = require('./BasePage');

class RegisterPage extends BasePage {

    constructor(page) {
        super(page);

        this.genderFemale = page.locator('#gender-female');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');

        this.registerButton = page.locator('#register-button');
        this.successMessage = page.locator('.result');
    }

    async registerCustomer(firstName, lastName, email, password) {

        await this.genderFemale.check();

        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);

        await this.registerButton.click();
    }
}

module.exports = RegisterPage;
