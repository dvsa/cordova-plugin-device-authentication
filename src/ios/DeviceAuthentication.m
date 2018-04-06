/********* DeviceAuthentication.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import <LocalAuthentication/LocalAuthentication.h>

@interface DeviceAuthentication : CDVPlugin {
  
}

- (void)runAuthentication:(CDVInvokedUrlCommand *)command;
@end

@implementation DeviceAuthentication

- (void)runAuthentication:(CDVInvokedUrlCommand *)command {
    if([command.arguments count] == 0) {
        CDVPluginResult *result = [CDVPluginResult
                                   resultWithStatus:CDVCommandStatus_ERROR
                                   messageAsString: @"Reason not passed"];
        
        return [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
    
    LAContext *myContext = [[LAContext alloc] init];
    NSError *authError = nil;
    NSString *myLocalizedReasonString = [command.arguments objectAtIndex:0];
    
    if (![myContext canEvaluatePolicy:LAPolicyDeviceOwnerAuthentication error:&authError]) {
        CDVPluginResult *result = [CDVPluginResult
                                   resultWithStatus:CDVCommandStatus_ERROR
                                   messageAsString: authError.localizedDescription];
        
        return [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
    }
    
    [myContext evaluatePolicy:LAPolicyDeviceOwnerAuthentication
              localizedReason:myLocalizedReasonString
                        reply:^(BOOL success, NSError *error) {
                            CDVPluginResult *result = [CDVPluginResult
                                          resultWithStatus:CDVCommandStatus_OK
                                          messageAsBool:success];
                            
                            [self.commandDelegate
                             sendPluginResult:result
                             callbackId:command.callbackId];
                        }];
}

@end
