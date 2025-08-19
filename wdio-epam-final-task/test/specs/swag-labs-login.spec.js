import { expect } from '@wdio/globals';
import LoginPage from '../pages/Login.page.js';

describe('SauceDemo Login Tests', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should display error message when submitting empty credentials', async () => {
        await LoginPage.loginBtn.click();
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('Username is required'));
    });

    it('should display error message when password is missing', async () => {
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.loginBtn.click();
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('Password is required'));
    });

    it('should successfully login with valid credentials and redirect to inventory page', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl(expect.stringContaining('inventory.html'));
        await expect(browser).toHaveTitle('Swag Labs');
    });

    it('should display error message for locked out user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('locked out'));
    });

    it('should display error message for invalid credentials', async () => {
        await LoginPage.login('invalid_user', 'wrong_password');
        await expect(LoginPage.errorMsg).toHaveText(expect.stringContaining('Username and password do not match'));
    });

});
