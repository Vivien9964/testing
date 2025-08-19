import BasePage from './Base.page.js';

class ProductPage extends BasePage {

    get firstProduct() {
        return $('.s-product-image-container');
    }

    get addToCartButton() {
        return $('#add-to-cart-button');
    }

    get addedToCartMessage() {
        return $('h1.sw-atc-text');
    }

    get productPrice() {
        return $('.a-price .a-offscreen');
    }

    get subTotal() {
        return $('#sw-subtotal span[class="a-offscreen"]');
    }

    async selectFirstProduct() {
        await this.firstProduct.click();
        await this.waitForPageLoad();
    }

    async getProductPrice() {
        return await browser.execute(() => {
            return document.querySelector('.a-price .a-offscreen').textContent;
        });
    }

    async addToCart() {
        await this.addToCartButton.click();
        await expect(this.addedToCartMessage).toHaveText('Added to cart');
    }

    async getSubTotal() {
        return await browser.execute(() => {
            return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent;
        });
    }

}

export default new ProductPage();
