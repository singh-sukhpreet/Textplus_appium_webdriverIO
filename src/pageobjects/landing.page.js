/**
 * This page contains specific selectors and methods for a Landing page
 */

import Utils from '../utilities//common.utils.js';
import allureReporter from '@wdio/allure-reporter';

class LandingPage {

    // locators on landing page
    get btnGetStarted() { return $('~social login'); }
    get btnSingIn() { return $('~username login'); }


    // operations on landing page
    async wait_to_displayed_landingPage() {
        // await this.btnGetStarted.waitForDisplayed({ timeout: 4000 });
        allureReporter.addStep('Wait until Get Started button is visisble')
        await this.btnGetStarted.waitForDisplayed();
        return this;
    }

    async click_GetStartedBtn() {
        allureReporter.addStep('Click Get Started Button')
        await this.btnGetStarted.click();
        if(await Utils.btnAllow.isExisting()){
            await Utils.click_btnAllow();
        }
        await browser.pause(2000);
        if(await Utils.btnAllow.isExisting()){
            await Utils.click_btnAllow();
        }
        return this;
    }

    async click_SignInBtn() {
        allureReporter.addStep('Click Sign In Button')
        await this.btnSingIn.click();
        if(await Utils.btnAllow.isExisting()){
            await Utils.click_btnAllow();
        }
        return this;
    }
}

export default new LandingPage();