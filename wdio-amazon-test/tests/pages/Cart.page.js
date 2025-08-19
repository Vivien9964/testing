import BasePage from './Base.page.js';

class CartPage extends BasePage {

    get cartIcon() {
        return $('#nav-cart');
    }

    get increaseQuantityButton() {
        return $('.a-icon-small-add');
    }

    get cartSubTotal() {
        return $('.sc-price');
    }

    async openCart() {
        await this.cartIcon.click();
        await this.waitForPageLoad();
    }

    async increaseQuantity() {
        await this.increaseQuantityButton.click();
        await browser.pause(2000);
    }

    async getUpdatedSubTotal() {
        return await browser.execute(() => {
            return document.querySelector('.sc-price').textContent;
        });
    }

}

export default new CartPage();
