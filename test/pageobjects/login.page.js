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

    get sortingDropdown(){
        return $('[data-test="product-sort-container"]')
    }

    get productNames() {
        return $$('[data-test="inventory-item-name"]')
    }

    get productPrices() {
        return $$('[data-test="inventory-item-price"]')
    }

    get twitterLink (){
        return $('[data-test="social-twitter"]')
    }

    get facebookLink() {
        return $('[data-test="social-facebook"]')
    }

    get linkedinLink() {
        return $('[data-test="social-linkedin"]')
    }

    get checkoutBtn() {
        return $('[data-test="checkout"]')
    }

    get firstNameInput() {
        return $('[data-test="firstName"]')
    }

    get lastNameInput() {
        return $('[data-test="lastName"]')
    }

    get postalCodeInput() {
        return $('[data-test="postalCode"]')
    }

    get continueBtn() {
        return $('[data-test="continue"]')
    }

    get finishBtn() {
        return $('[data-test="finish"]')
    }

    get backHomeBtn() {
        return $('[data-test="back-to-products"]')
    }

    get cartLink() {
        return $('[data-test="shopping-cart-link"]')
    }

    get checkoutTitle() {
        return $('[data-test="title"]')
    }

    get checkoutProductName() {
        return $('[data-test="inventory-item-name"]')
    }

    get checkoutProductPrice() {
        return $('[data-test="inventory-item-price"]')
    }

    get itemSubtotal() {
        return $('[data-test="subtotal-label"]')
    }

    get tax() {
        return $('[data-test="tax-label"]')
    }

    get total() {
        return $('[data-test="total-label"]')
    }

    get completeHeader() {
        return $('[data-test="complete-header"]')
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