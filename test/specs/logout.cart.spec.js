import LoginPage from '../pageobjects/login.page.js'

describe('Logout and cart test', () => {

    it('cart item remains after logout and login', async () => {

        await LoginPage.open()

        // Login
        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        )

        // Add product to cart
        await LoginPage.addToCartButton.click()

        // Logout
        await LoginPage.burgerMenu.click()
        await LoginPage.logoutButton.click()

        // Login again
        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        )

        // Open cart
        await LoginPage.cartButton.click()

        // Check product
        await expect(LoginPage.cartItem).toHaveText('Sauce Labs Bike Light')
    })
})