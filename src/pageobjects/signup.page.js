/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUp {
    /**
     * define selectors using getter methods
     */
     get btnGoogle() {
        const selectorAndroid = "//*[@text='Sign in with Google']"
        const selectorIOS = '~LoginButton'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        $(selector).waitForDisplayed({ timeout: 3000 });
        return $(selector)
    }

    get inputGoogleEmail() {
        return $('(//input)[1]')
    }

    get btnNext() {
        return $("//span[text()='Next']")
    }

    get inputGooglePassword() {
        return $('//*[@id="password"]/div[1]/div/div[1]/input')
    }

    // operations related to signup page
    
    async SignUpUsingGoogle(email,password) {
        await this.btnGoogle.click();
        if (driver.isAndroid) {
            await browser.pause(10000);
        }
        let contexts = await driver.getContexts();
        console.log("abc "+ contexts);
        await driver.switchContext(contexts[1]);
        await this.inputGoogleEmail.waitForDisplayed({ timeout: 3000 });
        await this.inputGoogleEmail.setValue(email);
        await this.btnNext.click();
        await this.inputGooglePassword.setValue(password);
        await this.btnNext.click();
    }
}

export default new SignUp()
