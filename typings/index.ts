import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Device Authentication
 * @description
 * This plugin provide API to enable device authentication screen like TouchId, FaceId or passcode
 *
 * @usage
 * ```typescript
 * import { DeviceAuthentication } from '@ionic-native/device-authentication';
 *
 *
 * constructor(private deviceAuthentication: DeviceAuthentication) { }
 *
 * ...
 *
 *
 * this.deviceAuthentication.runAuthentication('Subtitle')
 *     .then((isAuthenticated)=> console.log(isAuthenticated))
 *     .catch((errorMsg) => console.log('error: ' + errorMsg))
 *
 * ```
 */
@Plugin({
  pluginName: 'DeviceAuthentication',
  plugin: 'device-authentication-plugin', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.DeviceAuthentication', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class DeviceAuthentication extends IonicNativePlugin {

  /**
   * Run device authentication prompt. If FaceId/TouchId is set it shows prompt to use either one of them. If none of them are set it show passcode screen.
   * @param message {string} Message that is show in authentication prompt
   * @param arg2 {number} Another param to configure something
   * @return {Promise<boolean>} Returns a promise that resolves when user tried to authenticate
   * @throws {Promise<string>} Returns a promise that rejects when there are some errors. Returned string contains localized message
   */
  @Cordova()
  runAuthentication(message: string): Promise<boolean> {
    return;
  }

}
