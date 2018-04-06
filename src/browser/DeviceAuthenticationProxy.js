var DeviceAuthentication = {
    runAuthentication: function(message, successCallback, errorCallback) {
        console.error('Device Authentication plugin do not support browser platform');
    }
};

module.exports = DeviceAuthentication;

require('cordova/exec/proxy').add('DeviceAuthentication', module.exports);
