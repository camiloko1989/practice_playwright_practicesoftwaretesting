import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { RegistrationPage } from '../pages/registration.page';

test('go to login', async ({ page }) => {
  let homePage = new HomePage(page);
  await homePage.goto();
  await homePage.login.click();
  let loginPage = new LoginPage(page);
  await expect(loginPage.userNameInput).toBeVisible();
});

test('Go to registration from login', async ({ page }) => {
  let homePage = new HomePage(page);
  await homePage.goto();
  await homePage.login.click();
  let loginPage = new LoginPage(page);
  await loginPage.registerLink.click();
  let registrationPage = new RegistrationPage(page);
  await expect(registrationPage.firstNameLabel).toBeVisible();

});

test('Register new user', async ({ page }) => {
  let homePage = new HomePage(page);
  await homePage.goto();
  await homePage.login.click();
  let loginPage = new LoginPage(page);
  await loginPage.registerLink.click();
  let registrationPage = new RegistrationPage(page);
  await expect(registrationPage.firstNameLabel).toBeVisible();
  await registrationPage.firstNameInput.fill('John');
  await registrationPage.lastNameInput.fill('Doe');
  await registrationPage.dobInput.fill('1990-01-01');
  await registrationPage.streetInput.fill('123 Main St');
  await registrationPage.postalCodeInput.fill('12345');
  await registrationPage.cityInput.fill('Anytown');  
  await registrationPage.stateInput.fill('Anystate');
  await registrationPage.countryDropdown.selectOption('CO');
  await registrationPage.phoneInput.fill('5551234');
  const uniqueEmail = `user${Date.now()}@example.com`;
  await registrationPage.emailInput.fill(uniqueEmail);
  await registrationPage.passwordInput.fill('SecurePassweird123!');
  await registrationPage.registerButton.click();
  await expect(loginPage.userNameInput).toBeVisible();
});