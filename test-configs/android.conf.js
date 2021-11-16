const {config} = require('./base.conf')

config.capabilities = [{
    "platformName": "Android",
    "appium:deviceName": "Emulator",
    "appium:automationName": "UiAutomator2",
    "appium:udid": "emulator-5554",
    // "appium:chromeOptions": {'androidPackage': 'com.google.android.gms'},
    // "appium:app":"app/me.nextplus.smsfreetext.phonecalls_2.8.2.01237.apk",
    "appium:appPackage": "me.nextplus.smsfreetext.phonecalls",
    "appium:appActivity": "com.nextplus.android.activity.SplashScreenActivity",
}]

exports.config = config