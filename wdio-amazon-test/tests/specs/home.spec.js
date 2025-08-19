
import { expect } from '@wdio/globals';
import HomePage from '../pages/Home.page.js';

describe('Amazon Home Page Tests', () => {

    beforeEach(async () => {
        await HomePage.open();
    });

    it('should load Amazon homepage and verify URL and title', async () => {
        await expect(browser).toHaveUrl(expect.stringContaining('amazon'));
        await expect(browser).toHaveTitle(expect.stringContaining('Amazon'));  
    });

    it('should search for a product and display search results', async () => {
        await HomePage.searchForProduct('macbook');
        await expect(HomePage.searchResultText).toHaveText('"macbook"');
    });

    it('should handle auto-suggestions and navigate to search results', async () => {
        const suggestionText = await HomePage.selectFirstAutoSuggestion();
        
        const resultText = await HomePage.searchResultText.getText();
        const cleanedResult = resultText.replace(/"/g, '');

        await expect(cleanedResult).toBe(suggestionText);
    });

});