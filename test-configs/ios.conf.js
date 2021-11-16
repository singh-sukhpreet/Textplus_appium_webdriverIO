const {config} = require('./base.conf')

config.capabilities = [{
    "platformName": "iOS",
    "appium:deviceName": "iPhone 11 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": "/Users/sukhpreetsingh/learning/Appium/framework_textplus/app/nextplus.app",
    // "appium:bundleId": "me.nextplus.smsfreetext.phonecalls",
    // iphone 11 pro udid's 
    "appium:udid": "9953473F-FE95-4451-B112-B4212D240425"
    // iphone 13 pro udid's 
    // "appium:udid": "AD77D8FD-FC82-47A4-A9A8-29BDD26ED0B4",
}]

exports.config = config