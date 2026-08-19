import LoginPage from '../pageobjects/login.page.js'

describe('Valid Checkout', () => {

    it('should complete checkout successfully', async () => {

        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')

        // Добавляем первый товар
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        // Открываем корзину
        await LoginPage.cartLink.click()

        // Checkout
        await LoginPage.checkoutBtn.click()

        // Заполняем данные
        await LoginPage.firstNameInput.setValue('John')
        await LoginPage.lastNameInput.setValue('Doe')
        await LoginPage.postalCodeInput.setValue('12345')

        // Continue
        await LoginPage.continueBtn.click()

        // Проверяем Overview
        await expect(LoginPage.checkoutTitle).toHaveText('Checkout: Overview')

        // Проверяем товар
        await expect(LoginPage.checkoutProductName).toHaveText('Sauce Labs Bike Light')
        await expect(LoginPage.checkoutProductPrice).toHaveText('$9.99')

        // Проверяем сумму
        await expect(LoginPage.itemSubtotal).toHaveText('Item total: $9.99')

        const subtotalText = await LoginPage.itemSubtotal.getText()
        const taxText = await LoginPage.tax.getText()
        const totalText = await LoginPage.total.getText()

        const subtotal = parseFloat(subtotalText.replace('Item total: $', ''))
        const tax = parseFloat(taxText.replace('Tax: $', ''))
        const total = parseFloat(totalText.replace('Total: $', ''))

        expect(total).toBeCloseTo(subtotal + tax, 2)

        // Finish
        await LoginPage.finishBtn.click()

        await expect(LoginPage.completeHeader).toHaveText('Thank you for your order!')

        // Проверяем завершение заказа
        await expect(LoginPage.backHomeBtn).toBeDisplayed()
    })
})