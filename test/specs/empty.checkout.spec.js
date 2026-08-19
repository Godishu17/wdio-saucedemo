import LoginPage from '../pageobjects/login.page.js'

describe('Checkout without products', () => {

    it('should not allow checkout without products', async () => {

        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')

        await LoginPage.cartLink.click()

        await LoginPage.checkoutBtn.click()

        await expect(LoginPage.checkoutTitle).not.toBeDisplayed()

    })

})