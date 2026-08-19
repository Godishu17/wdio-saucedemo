class LoginPage {
    get usernameInput() {
        return $('//input[@id="user-name"]')
    }

    get passwordInput() {
        return $('//input[@id="password"]')
    }

    get loginButton() {
        return $('//input[@id="login-button"]')
    }

    get burgerMenu()    {
        return $('//button[@id="react-burger-menu-btn"]')
    }

    get logoutButton()          {
        return $('//a[@id="logout_sidebar_link"]')
    }

    get addToCartButton() {
        return $('[data-test="add-to-cart-sauce-labs-bike-light"]')
    }

    get cartButton(){
        return $('[data-test="shopping-cart-link"]')
    }

    get cartItem(){
        return $('[data-test="inventory-item-name"]')
    }


    async open() {
        await browser.url('https://www.saucedemo.com')
    }

    async login(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }
}

export default new LoginPage()