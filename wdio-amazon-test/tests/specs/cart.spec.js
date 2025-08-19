import { expect } from '@wdio/globals';
import HomePage from '../pages/Home.page.js';
import ProductPage from '../pages/Product.page.js';
import CartPage from '../pages/Cart.page.js';

describe('Amazon Shopping Cart Flow Tests', () => {

    let expectedPrice;

    before(async () => {
        await HomePage.open();
        await HomePage.searchForProduct('spooky ghost mug');
    });

    it('should add product to cart and verify price consistency', async () => {
        await ProductPage.selectFirstProduct();
        
        expectedPrice = await ProductPage.getProductPrice();
        await ProductPage.addToCart();

        const subTotal = await ProductPage.getSubTotal();
        await expect(subTotal).toEqual(expectedPrice);
    });

    it('should update cart quantity and verify price change', async () => {
        await CartPage.openCart();
        await CartPage.increaseQuantity();

        const updatedSubTotal = await CartPage.getUpdatedSubTotal();
        await expect(updatedSubTotal).not.toEqual(expectedPrice);
    });
       
});
