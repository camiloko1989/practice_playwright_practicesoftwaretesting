import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly login: Locator;
    readonly searchInput: Locator;
    readonly product: Locator;


    constructor(page: Page) {
        this.page = page;
        this.login = page.getByRole('link', { name: 'Sign in' });
        this.searchInput = page.getByTestId('search-query');
        this.product = page.getByTestId('product-name').first();
    }

    async goto() {
        await this.page.goto('/');
    }

}