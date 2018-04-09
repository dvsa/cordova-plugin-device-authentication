var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var DeviceAuthentication = (function (_super) {
    __extends(DeviceAuthentication, _super);
    function DeviceAuthentication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Run device authentication prompt. If FaceId/TouchId is set it shows prompt to use either one of them. If none of them are set it show passcode screen.
     * @param message {string} Message that is show in authentication prompt
     * @param arg2 {number} Another param to configure something
     * @return {Promise<boolean>} Returns a promise that resolves when user tried to authenticate
     * @throws {Promise<string>} Returns a promise that rejects when there are some errors. Returned string contains localized message
     */
    DeviceAuthentication.prototype.runAuthentication = function (message) {
        return;
    };
    DeviceAuthentication.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DeviceAuthentication.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], DeviceAuthentication.prototype, "runAuthentication", null);
    DeviceAuthentication = __decorate([
        Plugin({
            pluginName: 'DeviceAuthentication',
            plugin: 'device-authentication-plugin',
            pluginRef: 'cordova.plugins.DeviceAuthentication',
            repo: '',
            install: '',
            installVariables: [],
            platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], DeviceAuthentication);
    return DeviceAuthentication;
}(IonicNativePlugin));
export { DeviceAuthentication };
//# sourceMappingURL=index.js.map