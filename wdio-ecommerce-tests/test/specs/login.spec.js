import { expect } from '@wdio/globals';
import LoginPage from '../pages/Login.page.js';

describe('SauceDemo Login Validation Tests', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should display "Username is required" error when submitting with empty credentials', async () => {
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('Username is required'));
    });

    it('should display "Password is required" error when username is provided but password is empty', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('Password is required'));
    });

    it('should successfully navigate to products page with valid credentials', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.inputPassword.setValue('secret_sauce');
        await LoginPage.btnLogin.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/v1/inventory.html');
    });

    it('should display "locked out" error when using locked out user credentials', async () => {
        await LoginPage.inputUsername.setValue('locked_out_user');
        await LoginPage.inputPassword.setValue('secret_sauce');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('user has been locked out'));
    });

});