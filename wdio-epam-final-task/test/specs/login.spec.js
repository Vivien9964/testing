
import { expect } from '@wdio/globals';

describe('SauceLabs Website Navigation and Login Tests', () => {

    it('should navigate from homepage to login form', async () => {
        await browser.url('https://saucelabs.com/');
        
        const menuBtn = await $('button[aria-label="open drawer"]');
        const signInLink = await $('=Sign in');
        
        await menuBtn.click();
        await signInLink.click();
        
        await expect(browser).toHaveUrl(expect.stringContaining('accounts.saucelabs.com'));
    });

    it('should validate login button behavior with empty credentials', async () => {
        await browser.url('https://accounts.saucelabs.com/am/XUI/#login/');

        const loginUsername = await $('#idToken1');
        const loginPassword = await $('#idToken2');
        const loginBtn = await $('#loginButton_0');

        // Add values and then clear to test empty state
        await loginUsername.setValue('justauser123');
        await loginPassword.setValue('password789');
        await loginUsername.clearValue();
        await loginPassword.clearValue();

        // Attempt to click login button with empty fields
        await loginBtn.click();

        // Verify button states
        const isLoginBtnEnabled = await loginBtn.isEnabled();
        const isLoginBtnClickable = await loginBtn.isClickable();
        
        await expect(isLoginBtnEnabled).toBe(false);
        await expect(isLoginBtnClickable).toBe(false);
    });

});