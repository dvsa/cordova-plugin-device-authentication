var exec = require('cordova/exec');

exports.runAuthentication = function(message, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'DeviceAuthentication', 'runAuthentication', [message]);
};
