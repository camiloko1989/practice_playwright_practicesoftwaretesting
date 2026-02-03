import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly login: Locator;

    constructor(page: Page) {
        this.page = page;
        this.login = page.getByRole('link', { name: 'Sign in' });
    }

    async goto() {
        await this.page.goto('/');
    }

}