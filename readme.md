# cordova-plugin-device-authentication
-----

Provide API to show device authentication prompt (FaceID, TouchID, Passcode)

## Description
This plugin uses [LAPolicyDeviceOwnerAuthentication](https://developer.apple.com/documentation/localauthentication/lapolicy/lapolicydeviceownerauthentication?language=objc)

According to Apple documentation:

> If Touch ID or Face ID is available, enrolled and not disabled, the user is asked for that first. Otherwise, they are asked to enter the device passcode. If the device passcode is not enabled, policy evaluation fails. Passcode authentication is disabled after 6 unsuccessful attempts, with progressively increasing delays between them.

## Usage
```sh
ionic cordova plugin add https://github.com/dvsa/cordova-plugin-device-authentication
```

JS
```js
cordova.plugins.DeviceAuthentication.runAuthentication('Prompt msg', this.successCB, this.failureCB)
```
Where:

**successCB** takes boolean params that determines if authentication passed or not

**failureCB** is called when for some reason it os can't show Authentication prompt (eg. not set)

[Typescript support](https://github.com/dvsa/cordova-plugin-device-authentication/tree/master/typings)
