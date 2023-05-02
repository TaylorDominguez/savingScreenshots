import dynamicPage from "../pageobjects/dynamic_loading.page.js";

describe('dynamic_loading application', () => {
    it('should click the button', async () => {
        await dynamicPage.open()
        
        await browser.saveScreenshot('test/screenshots/openScreenshot.png')
        await dynamicPage.startButton.click()
        await dynamicPage.helloWorld.waitForExist()
        await expect (dynamicPage.helloWorld).toHaveTextContaining(
            'Hello World!'
        )
        await browser.saveScreenshot('test/screenshots/startScreenshot2.png')
    })
})