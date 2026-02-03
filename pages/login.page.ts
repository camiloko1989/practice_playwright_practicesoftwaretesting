import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly seePasswordButton: Locator;
  readonly loginButton: Locator;
  readonly registerLink: Locator;
  readonly forgotPasswordLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByPlaceholder('Your email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.seePasswordButton = page.locator('body > app-root > div > app-login > div > div > div > form > div:nth-child(2) > app-password-input > div > div > button');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.registerLink = page.getByRole('link', { name: 'Register your account' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot password?' });
    }

    async goto() {
        await this.page.goto('/auth/login');
    }   

}