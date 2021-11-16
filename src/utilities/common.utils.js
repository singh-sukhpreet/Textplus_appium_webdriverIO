/**
 * This is the helper class which contains common operations to execute on different pages
 */
 import allureReporter from '@wdio/allure-reporter';

class CommonUtilities {
    
    get btnAllow() {
        const selectorAndroid = '//*[@text="ALLOW"]'
        const selectorIOS = '~Allow'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }

    get btnContinue() {
        const selectorAndroid = '//*[@text="Continue"]'
        const selectorIOS = '~Continue'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }

    async click_btnAllow() {
        await this.btnAllow.waitForDisplayed({ timeout: 2000 });
        await this.btnAllow.click();
    }

    async click_btnContinue() {
        await this.btnContinue.waitForDisplayed({ timeout: 2000 });
        await this.btnContinue.click();
    }

    async customAllureReporter(id=null, severity=null, issue=null) {
        if(id!=null){
            allureReporter.addTestId(id);
        }
        if(severity!=null){
            allureReporter.addSeverity(severity);
        }
        if(issue!=null){
            allureReporter.addIssue(issue);
        }
    }

}
module.exports = new CommonUtilities();