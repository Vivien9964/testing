import BasePage from './Base.page.js';

class ProductsPage extends BasePage {

    get banner() {
        return $('.product_label');
    }

    get cartIcon() {
        return $('svg[data-icon="shopping-cart"]');
    }

    get cartCount() {
        return $('.shopping_cart_badge');
    }

    get productsList() {
        return $('.inventory_list');
    }

    get productCard() {
        return $$('.inventory_item');
    }

    get productName() {
        return $$('.inventory_item_name');
    }

    get productLink() {
        return $('#item_3_title_link');
    }

    get productImage() {
        return $('.inventory_item_img');
    }

    get productPrice() {
        return $$('.inventory_item_price');
    }

    get productDescription() {
        return $('.inventory_item_desc');
    }

    get productBtn () {
        return $('.btn_inventory');
    }

    get sortDropdown() {
        return $('.product_sort_container');
    }


   async open() {
       await super.open('https://www.saucedemo.com/v1/inventory.html');
    }

    // Method to return 'Add to cart' button for given card
    async addToCartButtonFromCard(index) {
        const product = (await this.productCard)[index];
        return await product.$('.btn_inventory');
    }

    // Method to return 'Remove button' for given card
    async removeBtnFromCard(index) {
        const product = (await this.productCard)[index];
        return await product.$('.btn_inventory');
    }

    // Method to add multiple products to cart dynamically, using promises
    async addMultipleProductsToCart(productIndices) {
        const promises = productIndices.map(async (index) => {
            const addToCartBtn = await this.addToCartButtonFromCard(index);
            return addToCartBtn.click();
        });

        await Promise.all(promises);
    }

    // Method to remove multiple products from cart dynamically
    async removeMultipleProductsFromCart(productIndices) {
        const promises = productIndices.map(async (index) => {
            const removeBtn = await this.removeBtnFromCard(index);
            return removeBtn.click();
        });

        await Promise.all(promises);
    }


    async isProductInCart(index) {
        const button = await this.addToCartButtonFromCard(index);
        const buttonText = await button.getText();
        return buttonText.toLowerCase().includes('remove');

    }
 
}

export default new ProductsPage();