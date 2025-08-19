import BasePage from "./Base.page.js";

class LoginPage extends BasePage {

    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get loginBtn() {
        return $('#login-button');
    }

    get errorMsg() {
        return $('h3[data-test="error"]');
    }

    get pageTitle() {
        return browser.getTitle();
    }

    async open() {
        await super.open('https://www.saucedemo.com/v1/');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

}

export default new LoginPage();

