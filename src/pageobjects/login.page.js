/**
 * This page containing specific selectors and methods for a Login page
 */

 import Utils from '../utilities//common.utils.js';
 import allureReporter from '@wdio/allure-reporter';

class LoginPage {
    /**
     * define selectors using getter methods
     */
     get inputUsername() {
        const selectorAndroid = '//*[@text="Email, phone, or username"]'
        const selectorIOS = '~UserCredentialField'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }
    
    get inputPassword() {
        const selectorAndroid = '//*[@text="Password"]'
        const selectorIOS = '~PasswordField'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }
    
    get btnLogIn() {
        const selectorAndroid = '//*[@text="LOG IN"]'
        const selectorIOS = '~LoginButton'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        $(selector).waitForDisplayed({ timeout: 3000 });
        return $(selector)
    }

    get verifyLoginError() {
        const selectorAndroid = '//*[@text="Log In Error"]'
        const selectorIOS = 'UIATarget.localTarget().frontMostApp().mainWindow().buttons()[0]'
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selectorType}=${selector}`)
    }

    get btnOK() {
        const selectorAndroid = '//*[@text="OK"]'
        const selectorIOS = 'UIATarget.localTarget().frontMostApp().mainWindow().buttons()[0]'
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(`${selectorType}=${selector}`)
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login (username, password) {
        allureReporter.addStep(`Input Username as ${username}`)
        await browser.pause(2000);
        if(await Utils.btnAllow.isExisting()){
            allureReporter.addStep('Allow the app to access Device Location')
            await Utils.click_btnAllow();
        }
        await this.inputUsername.waitForDisplayed()
        await this.inputUsername.setValue(username);
        allureReporter.addStep('Input Password')
        await this.inputPassword.setValue(password);
        browser.takeScreenshot();
        allureReporter.addStep('Click Log In Button')
        await this.btnLogIn.click();
        await browser.pause(3000);
        if(await Utils.btnAllow.isExisting()){
            allureReporter.addStep('Allow the app to access contacts')
            await Utils.click_btnAllow();
        }
    }
}

export default new LoginPage();
