import LoginPage from '../pageobjects/login.page.js'

describe('Login test', () => {
    it ('valid login', async () => {
        await LoginPage.open()

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        )

        const url = await browser.getUrl()

        console.log(url)

        if (url.includes('inventory')) {
            console.log('LOGIN SUCCESS')
        }
        await browser.pause(5000)


    })
})