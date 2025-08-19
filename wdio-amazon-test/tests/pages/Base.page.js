export default class BasePage {
    async open(path) {
        await browser.url(path);
    }

    async waitForPageLoad() {
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === 'complete',
            {
                timeout: 10000,
                timeoutMsg: 'Page did not load.'
            }
        );
    }
}
