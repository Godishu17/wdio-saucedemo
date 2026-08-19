import LoginPage from '../pageobjects/login.page.js'

describe('Sorting test', () => {

    it('products sorting', async () => {

        await LoginPage.open()

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        )

        await LoginPage.sortingDropdown.selectByAttribute('value', 'lohi')

        const priceValues = await LoginPage.productPrices.map(async (price) => {
            return parseFloat((await price.getText()).replace('$', ''))




            expect(priceValues).toEqual([...priceValues].sort((a, b) => a - b))

            await LoginPage.sortingDropdown.selectByAttribute('value', 'hilo')

            const highToLowPrices = await LoginPage.productPrices.map(async (price) => {
                return parseFloat((await price.getText()).replace('$', ''))
            })

            expect(highToLowPrices).toEqual(
                [...highToLowPrices].sort((a, b) => b - a)
            )

            await LoginPage.sortingDropdown.selectByAttribute('value', 'az')

            const productNames = await LoginPage.productNames.map(async (product) => {
                return await product.getText()
            })

            expect(productNames).toEqual(
                [...productNames].sort()
            )

            await LoginPage.sortingDropdown.selectByAttribute('value', 'za')

            const productNamesZA = await LoginPage.productNames.map(async (product) => {
                return await product.getText()
            })

            expect(productNamesZA).toEqual(
                [...productNamesZA].sort().reverse()
            )


        })

    })
})