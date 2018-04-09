# Typescript support
-----
For more info [SEE HERE](https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md)

## Ionic Native Plugin Wrapper
**index.ts** is already created. In order to be accessible via ionic-native it needs to placed [here](https://github.com/ionic-team/ionic-native/tree/master/src/%40ionic-native/plugins)**/device-authentication** folder and marged to ionic-native repo.

eg `src/@ionic-native/plugins/device-authentication/index.ts`

**Compliled version**
In folder **device-authentication** is already complied version of type definitions that can be used.
In order to use it.
1. copy **device-authentication** into your_project/node_modules/@ionic-native/
2. register DeviceAuthentication as provider in app.module.ts
3. inject provider via constructor

