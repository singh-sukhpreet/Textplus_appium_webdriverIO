import LandingPage from  '../pageobjects/landing.page.js';
import LoginPage from  '../pageobjects/login.page.js';
import Dashboard from '../pageobjects/dashboard.page.js';
import {VALID_CREDS, GOOGLE_CREDS} from '../resources/test_data.js'
import Signup from '../pageobjects/signup.page.js';
import Utils from '../utilities//common.utils.js';

describe(`Landing Page Test cases on ${browser.capabilities.deviceName}` , async () => {
    
    it('As a customer, I can login with correct credentials', async () => {
      Utils.customAllureReporter('002','blocker', 'issue-03');
      (await LandingPage.wait_to_displayed_landingPage()).click_SignInBtn();
      const {username, password} = VALID_CREDS
      await LoginPage.login(username,password);
      await Dashboard.verify_login();
    });
    
    // it('As a customer, I can SingUp using google account', async () => {
    //   await (await LandingPage.wait_to_displayed_landingPage()).
    //   click_GetStartedBtn();
    //   const {email, password} = GOOGLE_CREDS
    //   await Signup.SignUpUsingGoogle(email,password);
    //   // // await Dashboard.verify_login();
    // });

})