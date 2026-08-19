import LoginPage from '../pageobjects/login.page.js'

describe('Social links test', () => {

    it('social links', async () => {

        await LoginPage.open()

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        )

        // Twitter

        await LoginPage.twitterLink.click()

        // проверяем новую вкладку
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])

        expect(await browser.getUrl()).toBe(
            'https://x.com/saucelabs'
        )

        await browser.closeWindow()
        await browser.switchToWindow(handles[0])

        // Facebook

        await LoginPage.facebookLink.click()

        const handles2 = await browser.getWindowHandles()
        await browser.switchToWindow(handles2[1])

        expect(await browser.getUrl()).toBe(
            'https://www.facebook.com/saucelabs'
        )

        await browser.closeWindow()
        await browser.switchToWindow(handles2[0])

        // LinkedIn

        await LoginPage.linkedinLink.click()

        const handles3 = await browser.getWindowHandles()
        await browser.switchToWindow(handles3[1])

        expect(await browser.getUrl()).toBe(
            'https://www.linkedin.com/company/sauce-labs/'
        )
    })
})