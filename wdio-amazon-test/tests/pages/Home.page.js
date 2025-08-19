import BasePage from './Base.page.js';

class HomePage extends BasePage {

    get searchInput() {
        return $('#twotabsearchtextbox');
    }

    get searchButton() {
        return $('#nav-search-submit-button');
    }

    get searchResultText() {
        return $('.a-color-state.a-text-bold');
    }

    get suggestionPane() {
        return $('.left-pane-results-container');
    }

    get firstSuggestion() {
        return this.suggestionPane.$('div');
    }

    async open() {
        await super.open('https://amazon.com');
        await this.waitForPageLoad();
    }

    async searchForProduct(searchTerm) {
        await this.searchInput.setValue(searchTerm);
        await this.searchButton.click();
        await this.waitForPageLoad();
    }

    async selectFirstAutoSuggestion() {
        await this.searchInput.click();
        await expect(this.suggestionPane).toBeDisplayed();
        await browser.keys('ArrowDown');
        const suggestionText = await this.firstSuggestion.getText();
        await browser.keys('Enter');
        await this.waitForPageLoad();
        return suggestionText;
    }

}

export default new HomePage();
