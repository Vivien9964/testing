import { expect } from "@wdio/globals";
import ProductsPage from "../pages/Products.page.js";

describe("SauceDemo Products Page Validation Tests", () => {
  beforeEach(async () => {
    await ProductsPage.open();
  });

  it('should display "Products" text on banner', async () => {
    await expect(ProductsPage.banner).toHaveText("Products");
  });

  it("should display clickable cart icon", async () => {
    await expect(ProductsPage.cartIcon).toBeDisplayed();
    await expect(ProductsPage.cartIcon).toBeClickable();
  });

  it("should display correct number of products (6)", async () => {
    const productElements = await ProductsPage.productName;
    await expect(productElements).toBeElementsArrayOfSize(6);
  });

  it("should sort products by name A to Z", async () => {
    await ProductsPage.sortDropdown.selectByVisibleText("Name (A to Z)");
    await browser.pause(1000);

    const nameElements = await ProductsPage.productName;
    const names = [];

    for (let nameElement of nameElements) {
      names.push(await nameElement.getText());
    }

    const expectedOrder = [...names].sort();
    await expect(names).toEqual(expectedOrder);
  });

  it("should sort products by name Z to A", async () => {
    await ProductsPage.sortDropdown.selectByVisibleText("Name (Z to A)");
    await browser.pause(1000);

    const nameElements = await ProductsPage.productName;
    const names = [];

    for (let nameElement of nameElements) {
      names.push(await nameElement.getText());
    }

    const expectedOrder = [...names].sort().reverse();
    await expect(names).toEqual(expectedOrder);
  });

  it("should sort products by price, low to high", async () => {
    await ProductsPage.sortDropdown.selectByVisibleText("Price (low to high)");
    await browser.pause(1000);

    const priceElements = await ProductsPage.productPrice;
    const prices = [];

    for (let priceElement of priceElements) {
      prices.push(await priceElement.getText());
    }

    const expectedOrder = [...prices].sort((a, b) => a - b);
    await expect(prices).toEqual(expectedOrder);
  });

  it("should sort products by price, high to low", async () => {
    await ProductsPage.sortDropdown.selectByVisibleText("Price (high to low)");
    await browser.pause(1000);

    const priceElements = await ProductsPage.productPrice;
    const prices = [];

    for (let priceElement of priceElements) {
      prices.push(await priceElement.getText());
    }

    const expectedOrder = [...prices].sort((a, b) => b - a);
    await expect(prices).toEqual(expectedOrder);
  });

  it("should navigate to product details page for product ID 3", async () => {
    await expect(ProductsPage.productLink).toBeClickable();
    await ProductsPage.productLink.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/v1/inventory-item.html?id=3"
    );
  });

  it("should verify that each product card contains all required elements", async () => {
    const productCards = await ProductsPage.productCard;

    for (const card of productCards) {
      const image = await card.$(".inventory_item_img");
      const name = await card.$(".inventory_item_name");
      const price = await card.$(".inventory_item_price");
      const desc = await card.$(".inventory_item_desc");
      const button = await card.$(".btn_inventory");

      await expect(image).toBeDisplayed();
      await expect(name).toBeDisplayed();
      await expect(price).toBeDisplayed();
      await expect(desc).toBeDisplayed();
      await expect(button).toBeDisplayed();
    }
  });

  it("should update cart count when adding first product to cart", async () => {
    const firstProduct = (await ProductsPage.productCard)[0];
    const addToCartBtn = await firstProduct.$(".btn_inventory");
    const cartCount = await ProductsPage.cartCount;

    await expect(addToCartBtn).toBeDisplayed();
    await expect(addToCartBtn).toBeClickable();
    await addToCartBtn.click();

    await expect(addToCartBtn).toHaveText("REMOVE");
    await expect(cartCount).toBeDisplayed();
    await expect(cartCount).toHaveText("1");
  });

  it("should increase cart count when adding multiple products", async () => {
    await ProductsPage.addMultipleProductsToCart([1, 2]);

    const cartCount = await ProductsPage.cartCount;
    await expect(cartCount).toHaveText("2");
  });

  it("should update cart count when removing multiple products from cart", async () => {
    await ProductsPage.addMultipleProductsToCart([1, 2]);
    await ProductsPage.removeMultipleProductsFromCart([1]);

    const cartCount = await ProductsPage.cartCount;
    await expect(cartCount).toHaveText("1");
  });

  it("should verify product cart status correctly", async () => {
    await ProductsPage.addMultipleProductsToCart([0, 1, 2]);
    expect(await ProductsPage.isProductInCart(1)).toBe(true);
    expect(await ProductsPage.isProductInCart(3)).toBe(false);

    await ProductsPage.removeMultipleProductsFromCart([0, 1]);
    expect(await ProductsPage.isProductInCart(1)).toBe(false);
  });
});
