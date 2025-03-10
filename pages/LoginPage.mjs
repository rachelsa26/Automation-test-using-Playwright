import { expect } from '@playwright/test'
import { BasePage } from '../pages/BasePage.mjs';

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginLink = page.locator("a[href='/login']");
        this.loginTitle = page.locator("div[class='login-form'] h2");
        this.emailInput = page.locator("[data-qa='login-email']");
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator("[data-qa='login-button']");
        this.loggedInText = page.getByText('Logged in as');
        this.loginErrorMessage = page.getByText('Your email or password is incorrect!');
        this.btnLogout = page.locator("a[href='/logout']");
    }

    async navigateToLogin() {
        await this.gotoPage('https://automationexercise.com');
        await this.loginLink.click();
        await this.checkPageInfo();
    }

    async login(email, password) {
        const textTitle = await this.loginTitle.textContent()
        console.log(`\n-------${textTitle}-----`);
        await this.emailInput.fill(email);
        console.log(`Input email: ${email}`)
        await this.passwordInput.fill(password);
        console.log(`Input password: ${password}`)
        await this.loginButton.click();
    }

    async verifyLogin(username) {
        await expect(this.loggedInText).toHaveText(`Logged in as ${username}`);
        await this.checkPageInfo();
        console.log(`Logged in as ${username}`)
    }
    async verifyLoginError() {
        await expect(this.loginErrorMessage).toBeVisible();
        const errorMessage = await this.loginErrorMessage.textContent();
        console.log(`Login error message: "${errorMessage}"`);
    }
    async logout(){
        await this.btnLogout.click();
        await this.checkPageInfo();
    }
}

export { LoginPage };
