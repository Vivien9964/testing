import BasePage from './Base.page.js';


class LoginPage extends BasePage{


    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    get errorMsg() {
        return $('h3[data-test="error"]');
    }

    async open() {
      await super.open('https://www.saucedemo.com/v1/index.html');
    }
}

export default new LoginPage();