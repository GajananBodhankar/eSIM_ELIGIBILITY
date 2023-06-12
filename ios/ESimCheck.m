#import "ESimCheck.h"
#import <CoreTelephony/CTCellularPlanProvisioning.h>
#import <React/RCTLog.h>
@implementation ESimCheck
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(eSimChecK:(RCTResponseSenderBlock)callback)
{
  CTCellularPlanProvisioning * temp=[[CTCellularPlanProvisioning alloc]init];
  callback(@[@(temp.supportsCellularPlan)]);
  
  RCTLogInfo(@(temp.supportsCellularPlan));
}
@end

// //  RNHello.h //  ReactNativeDemo // // ... by Gajanan BODHANKAR
