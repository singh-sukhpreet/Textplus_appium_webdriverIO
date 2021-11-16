# Textplus Automation Framework
This is an test automation framework to run User Interface test cases on Textplus mobile application

## prerequisites

1. Install the LTS version of [NODE.js](https://nodejs.org/en/)
2. Install Appium on a local machine [here](./docs/APPIUM.md)
3. Setting up Android and iOS on a local machine [here](./docs/ANDROID_IOS_SETUP.md)
4. Install the app on the Virtual/Real Devices [here](./app)
5. For IOS Read Devices only, Install Webdriver Agent either using [Appium](https://appium.io/docs/en/drivers/ios-xcuitest-real-devices/#appium-xcuitest-driver-real-device-setup) or [Github-WebdriverAgent](https://github.com/facebookarchive/WebDriverAgent)

## Installation

1. Clone git repository - `git clone {URL}`
2. Go to the project folder and install dependencies - `npm install`

## Running Tests

Execute the following commands

### Executing the full test suite on locally plugged real/emulator device

- IOS     `npx wdio test-configs/ios.conf.js` located at [ios.conf.js](./test-configs/ios.conf.js)
- Andriod `npx wdio test-configs/android.conf.js` located at [android.conf.js](./test-configs/android.conf.js) 

### Executing the specific test suite on locally plugged real/emulator device

- IOS     `npx wdio test-configs/ios.conf.js --spec ./src/tests/landing.test.js`
- Andriod `npx wdio test-configs/android.conf.js --spec ./src/tests/landing.test.js`

### Executing the full test suite parallelly on locally plugged real/emulator device

Open two instaces of appium server on any available ports such as 
1. `appium -p 6000`
2. `appium -p 7000`
3. `npx wdio test-configs/parallel.conf.js`


## Extending Test suites with more test cases

This framework follows the concepts of page object model. 
- All the test files are located in src/tests folder such as [landing.test.js](./src/tests/landing.test.js)
- All the page object files are located in src/pages folder such as [login.page.js](./src/pageobjects/login.page.js)
- All the test data files are located in src/resources folder such as [test_data.js](./src/resources/test_data.js)
- All the utilities files are located in src/utilities folder such as [common.utils.js](./src/utilities/common.utils.js)
- All the configs files are located in test-configs folder such as [ios.conf.js](./test-configs/ios.conf.js)

## To generate allure reports

execute `allure open`

## Architecture based on
- **WebdriverIO:** `7.16.6`
- **Appium:** `1.22.0`
- **Allure:** `7.16.6`
- **browserstack-service:** `7.16.6`
- **mocha:** `7.16.6`
- **chai:** `4.3.4`
