
import { type Locator, type Page } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly firstNameLabel: Locator;
  readonly lastNameInput: Locator;
  readonly dobInput: Locator;
  readonly streetInput: Locator;
  readonly cityInput: Locator;
  readonly postalCodeInput: Locator;
  readonly stateInput: Locator;
  readonly countryDropdown: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly seePasswordButton: Locator;
  readonly registerButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First name *');
        this.firstNameLabel = page.getByText('First Name');
        this.lastNameInput = page.getByPlaceholder('Last name *');
        this.dobInput = page.getByPlaceholder('YYYY-MM-DD');
        this.streetInput = page.getByPlaceholder('Your Street *');
        this.cityInput = page.getByPlaceholder('Your City *');        
        this.postalCodeInput = page.getByPlaceholder('Your Postcode *');
        this.stateInput = page.getByPlaceholder('Your State *');
        this.countryDropdown = page.getByTestId('country');
        this.phoneInput = page.getByPlaceholder('Your phone *');
        this.emailInput = page.getByPlaceholder('Your email *');
        this.passwordInput = page.getByPlaceholder('Your password');   
        this.seePasswordButton = page.locator('button[aria-label="See password"]');     
        this.registerButton = page.getByRole('button', { name: 'Register' });
        }

    async goto() {
        await this.page.goto('/auth/register');     
    }   

}
