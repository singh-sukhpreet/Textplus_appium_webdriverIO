/**
 * sub page containing specific selectors and methods for a specific page
 */

import allureReporter from '@wdio/allure-reporter';

class Dashboard {
   
    // selectors related to dashboard page

    get tabBar() {
        const selectorAndroid = "//android.widget.HorizontalScrollView[@index='1']"
        const selectorIOS = '~Tab Bar'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }

    // operations related to dashboard page
    
    async verify_login() {
        allureReporter.addStep('Verifying Top Navigation is visible after login')
        await browser.pause(2000);
        browser.takeScreenshot();
        await expect(this.tabBar).toBeDisplayed({ message: 'Login is not successful!', wait: 1000})
    } 
}

export default new Dashboard();