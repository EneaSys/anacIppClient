# ItalianPpApi.ProcurementLotResourceApi

All URIs are relative to *https://api-gest.eneasys.net/ipp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countProcurementLotsUsingGET**](ProcurementLotResourceApi.md#countProcurementLotsUsingGET) | **GET** /api/procurement-lots/count | countProcurementLots
[**createProcurementLotUsingPOST**](ProcurementLotResourceApi.md#createProcurementLotUsingPOST) | **POST** /api/procurement-lots | createProcurementLot
[**deleteProcurementLotUsingDELETE**](ProcurementLotResourceApi.md#deleteProcurementLotUsingDELETE) | **DELETE** /api/procurement-lots/{id} | deleteProcurementLot
[**getAllProcurementLotsUsingGET**](ProcurementLotResourceApi.md#getAllProcurementLotsUsingGET) | **GET** /api/procurement-lots | getAllProcurementLots
[**getProcurementLotUsingGET**](ProcurementLotResourceApi.md#getProcurementLotUsingGET) | **GET** /api/procurement-lots/{id} | getProcurementLot
[**updateProcurementLotUsingPUT**](ProcurementLotResourceApi.md#updateProcurementLotUsingPUT) | **PUT** /api/procurement-lots | updateProcurementLot

<a name="countProcurementLotsUsingGET"></a>
# **countProcurementLotsUsingGET**
> &#x27;Number&#x27; countProcurementLotsUsingGET(opts)

countProcurementLots

### Example
```javascript
import ItalianPpApi from 'italian_pp_api';
let defaultClient = ItalianPpApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: UserInterface
let UserInterface = defaultClient.authentications['UserInterface'];
UserInterface.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ItalianPpApi.ProcurementLotResourceApi();
let opts = { 
  'baseAmountEquals': 1.2, // Number | 
  'baseAmountGreaterThan': 1.2, // Number | 
  'baseAmountGreaterThanOrEqual': 1.2, // Number | 
  'baseAmountIn': [3.4], // [Number] | 
  'baseAmountLessThan': 1.2, // Number | 
  'baseAmountLessThanOrEqual': 1.2, // Number | 
  'baseAmountNotEquals': 1.2, // Number | 
  'baseAmountSpecified': true, // Boolean | 
  'cigContains': "cigContains_example", // String | 
  'cigDoesNotContain': "cigDoesNotContain_example", // String | 
  'cigEquals': "cigEquals_example", // String | 
  'cigIn': ["cigIn_example"], // [String] | 
  'cigNotEquals': "cigNotEquals_example", // String | 
  'cigSpecified': true, // Boolean | 
  'cpvCodeContains': "cpvCodeContains_example", // String | 
  'cpvCodeDoesNotContain': "cpvCodeDoesNotContain_example", // String | 
  'cpvCodeEquals': "cpvCodeEquals_example", // String | 
  'cpvCodeIn': ["cpvCodeIn_example"], // [String] | 
  'cpvCodeNotEquals': "cpvCodeNotEquals_example", // String | 
  'cpvCodeSpecified': true, // Boolean | 
  'descriptionContains': "descriptionContains_example", // String | 
  'descriptionDoesNotContain': "descriptionDoesNotContain_example", // String | 
  'descriptionEquals': "descriptionEquals_example", // String | 
  'descriptionIn': ["descriptionIn_example"], // [String] | 
  'descriptionNotEquals': "descriptionNotEquals_example", // String | 
  'descriptionSpecified': true, // Boolean | 
  'idEquals': 789, // Number | 
  'idGreaterThan': 789, // Number | 
  'idGreaterThanOrEqual': 789, // Number | 
  'idIn': [3.4], // [Number] | 
  'idLessThan': 789, // Number | 
  'idLessThanOrEqual': 789, // Number | 
  'idNotEquals': 789, // Number | 
  'idSpecified': true, // Boolean | 
  'ippLotCategoryCodeContains': "ippLotCategoryCodeContains_example", // String | 
  'ippLotCategoryCodeDoesNotContain': "ippLotCategoryCodeDoesNotContain_example", // String | 
  'ippLotCategoryCodeEquals': "ippLotCategoryCodeEquals_example", // String | 
  'ippLotCategoryCodeIn': ["ippLotCategoryCodeIn_example"], // [String] | 
  'ippLotCategoryCodeNotEquals': "ippLotCategoryCodeNotEquals_example", // String | 
  'ippLotCategoryCodeSpecified': true, // Boolean | 
  'ippLotTypeCodeContains': "ippLotTypeCodeContains_example", // String | 
  'ippLotTypeCodeDoesNotContain': "ippLotTypeCodeDoesNotContain_example", // String | 
  'ippLotTypeCodeEquals': "ippLotTypeCodeEquals_example", // String | 
  'ippLotTypeCodeIn': ["ippLotTypeCodeIn_example"], // [String] | 
  'ippLotTypeCodeNotEquals': "ippLotTypeCodeNotEquals_example", // String | 
  'ippLotTypeCodeSpecified': true, // Boolean | 
  'istatCodeContains': "istatCodeContains_example", // String | 
  'istatCodeDoesNotContain': "istatCodeDoesNotContain_example", // String | 
  'istatCodeEquals': "istatCodeEquals_example", // String | 
  'istatCodeIn': ["istatCodeIn_example"], // [String] | 
  'istatCodeNotEquals': "istatCodeNotEquals_example", // String | 
  'istatCodeSpecified': true, // Boolean | 
  'nutsCodeContains': "nutsCodeContains_example", // String | 
  'nutsCodeDoesNotContain': "nutsCodeDoesNotContain_example", // String | 
  'nutsCodeEquals': "nutsCodeEquals_example", // String | 
  'nutsCodeIn': ["nutsCodeIn_example"], // [String] | 
  'nutsCodeNotEquals': "nutsCodeNotEquals_example", // String | 
  'nutsCodeSpecified': true, // Boolean | 
  'offerExpiryDateEquals': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateGreaterThan': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateGreaterThanOrEqual': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0DayOfMonth': 56, // Number | 
  'offerExpiryDateIn0DayOfWeek': "offerExpiryDateIn0DayOfWeek_example", // String | 
  'offerExpiryDateIn0DayOfYear': 56, // Number | 
  'offerExpiryDateIn0Hour': 56, // Number | 
  'offerExpiryDateIn0Minute': 56, // Number | 
  'offerExpiryDateIn0Month': "offerExpiryDateIn0Month_example", // String | 
  'offerExpiryDateIn0MonthValue': 56, // Number | 
  'offerExpiryDateIn0Nano': 56, // Number | 
  'offerExpiryDateIn0OffsetId': "offerExpiryDateIn0OffsetId_example", // String | 
  'offerExpiryDateIn0OffsetRulesFixedOffset': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0DayOfMonthIndicator': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0DayOfWeek': "offerExpiryDateIn0OffsetRulesTransitionRules0DayOfWeek_example", // String | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeHour': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeMinute': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeNano': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeSecond': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0MidnightEndOfDay': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0Month': "offerExpiryDateIn0OffsetRulesTransitionRules0Month_example", // String | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0TimeDefinition': "offerExpiryDateIn0OffsetRulesTransitionRules0TimeDefinition_example", // String | 
  'offerExpiryDateIn0OffsetRulesTransitions0DateTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0OffsetRulesTransitions0DateTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationNano': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationNegative': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationSeconds': 789, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DateBased': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DurationEstimated': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0TimeBased': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationZero': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0Gap': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0Instant': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0OffsetRulesTransitions0Overlap': true, // Boolean | 
  'offerExpiryDateIn0OffsetTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0Second': 56, // Number | 
  'offerExpiryDateIn0Year': 56, // Number | 
  'offerExpiryDateIn0ZoneId': "offerExpiryDateIn0ZoneId_example", // String | 
  'offerExpiryDateIn0ZoneRulesFixedOffset': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0DayOfMonthIndicator': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0DayOfWeek': "offerExpiryDateIn0ZoneRulesTransitionRules0DayOfWeek_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeHour': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeMinute': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeNano': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeSecond': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0MidnightEndOfDay': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0Month': "offerExpiryDateIn0ZoneRulesTransitionRules0Month_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterId': "offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeId': "offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetId': "offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0TimeDefinition': "offerExpiryDateIn0ZoneRulesTransitionRules0TimeDefinition_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitions0DateTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0ZoneRulesTransitions0DateTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationNano': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationNegative': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationSeconds': 789, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DateBased': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DurationEstimated': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0TimeBased': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationZero': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0Gap': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0Instant': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterId': "offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeId': "offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0Overlap': true, // Boolean | 
  'offerExpiryDateLessThan': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateLessThanOrEqual': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateNotEquals': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateSpecified': true, // Boolean | 
  'procurementIdEquals': 789, // Number | 
  'procurementIdGreaterThan': 789, // Number | 
  'procurementIdGreaterThanOrEqual': 789, // Number | 
  'procurementIdIn': [3.4], // [Number] | 
  'procurementIdLessThan': 789, // Number | 
  'procurementIdLessThanOrEqual': 789, // Number | 
  'procurementIdNotEquals': 789, // Number | 
  'procurementIdSpecified': true, // Boolean | 
  'securityAmountEquals': 1.2, // Number | 
  'securityAmountGreaterThan': 1.2, // Number | 
  'securityAmountGreaterThanOrEqual': 1.2, // Number | 
  'securityAmountIn': [3.4], // [Number] | 
  'securityAmountLessThan': 1.2, // Number | 
  'securityAmountLessThanOrEqual': 1.2, // Number | 
  'securityAmountNotEquals': 1.2, // Number | 
  'securityAmountSpecified': true // Boolean | 
};
apiInstance.countProcurementLotsUsingGET(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAmountEquals** | **Number**|  | [optional] 
 **baseAmountGreaterThan** | **Number**|  | [optional] 
 **baseAmountGreaterThanOrEqual** | **Number**|  | [optional] 
 **baseAmountIn** | [**[Number]**](Number.md)|  | [optional] 
 **baseAmountLessThan** | **Number**|  | [optional] 
 **baseAmountLessThanOrEqual** | **Number**|  | [optional] 
 **baseAmountNotEquals** | **Number**|  | [optional] 
 **baseAmountSpecified** | **Boolean**|  | [optional] 
 **cigContains** | **String**|  | [optional] 
 **cigDoesNotContain** | **String**|  | [optional] 
 **cigEquals** | **String**|  | [optional] 
 **cigIn** | [**[String]**](String.md)|  | [optional] 
 **cigNotEquals** | **String**|  | [optional] 
 **cigSpecified** | **Boolean**|  | [optional] 
 **cpvCodeContains** | **String**|  | [optional] 
 **cpvCodeDoesNotContain** | **String**|  | [optional] 
 **cpvCodeEquals** | **String**|  | [optional] 
 **cpvCodeIn** | [**[String]**](String.md)|  | [optional] 
 **cpvCodeNotEquals** | **String**|  | [optional] 
 **cpvCodeSpecified** | **Boolean**|  | [optional] 
 **descriptionContains** | **String**|  | [optional] 
 **descriptionDoesNotContain** | **String**|  | [optional] 
 **descriptionEquals** | **String**|  | [optional] 
 **descriptionIn** | [**[String]**](String.md)|  | [optional] 
 **descriptionNotEquals** | **String**|  | [optional] 
 **descriptionSpecified** | **Boolean**|  | [optional] 
 **idEquals** | **Number**|  | [optional] 
 **idGreaterThan** | **Number**|  | [optional] 
 **idGreaterThanOrEqual** | **Number**|  | [optional] 
 **idIn** | [**[Number]**](Number.md)|  | [optional] 
 **idLessThan** | **Number**|  | [optional] 
 **idLessThanOrEqual** | **Number**|  | [optional] 
 **idNotEquals** | **Number**|  | [optional] 
 **idSpecified** | **Boolean**|  | [optional] 
 **ippLotCategoryCodeContains** | **String**|  | [optional] 
 **ippLotCategoryCodeDoesNotContain** | **String**|  | [optional] 
 **ippLotCategoryCodeEquals** | **String**|  | [optional] 
 **ippLotCategoryCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippLotCategoryCodeNotEquals** | **String**|  | [optional] 
 **ippLotCategoryCodeSpecified** | **Boolean**|  | [optional] 
 **ippLotTypeCodeContains** | **String**|  | [optional] 
 **ippLotTypeCodeDoesNotContain** | **String**|  | [optional] 
 **ippLotTypeCodeEquals** | **String**|  | [optional] 
 **ippLotTypeCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippLotTypeCodeNotEquals** | **String**|  | [optional] 
 **ippLotTypeCodeSpecified** | **Boolean**|  | [optional] 
 **istatCodeContains** | **String**|  | [optional] 
 **istatCodeDoesNotContain** | **String**|  | [optional] 
 **istatCodeEquals** | **String**|  | [optional] 
 **istatCodeIn** | [**[String]**](String.md)|  | [optional] 
 **istatCodeNotEquals** | **String**|  | [optional] 
 **istatCodeSpecified** | **Boolean**|  | [optional] 
 **nutsCodeContains** | **String**|  | [optional] 
 **nutsCodeDoesNotContain** | **String**|  | [optional] 
 **nutsCodeEquals** | **String**|  | [optional] 
 **nutsCodeIn** | [**[String]**](String.md)|  | [optional] 
 **nutsCodeNotEquals** | **String**|  | [optional] 
 **nutsCodeSpecified** | **Boolean**|  | [optional] 
 **offerExpiryDateEquals** | **Date**|  | [optional] 
 **offerExpiryDateGreaterThan** | **Date**|  | [optional] 
 **offerExpiryDateGreaterThanOrEqual** | **Date**|  | [optional] 
 **offerExpiryDateIn0DayOfMonth** | **Number**|  | [optional] 
 **offerExpiryDateIn0DayOfWeek** | **String**|  | [optional] 
 **offerExpiryDateIn0DayOfYear** | **Number**|  | [optional] 
 **offerExpiryDateIn0Hour** | **Number**|  | [optional] 
 **offerExpiryDateIn0Minute** | **Number**|  | [optional] 
 **offerExpiryDateIn0Month** | **String**|  | [optional] 
 **offerExpiryDateIn0MonthValue** | **Number**|  | [optional] 
 **offerExpiryDateIn0Nano** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetId** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesFixedOffset** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0DayOfMonthIndicator** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0DayOfWeek** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeHour** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeMinute** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeSecond** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0MidnightEndOfDay** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0Month** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0TimeDefinition** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DateTimeAfter** | **Date**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DateTimeBefore** | **Date**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationNegative** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DateBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DurationEstimated** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0TimeBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationZero** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0Gap** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0Instant** | **Date**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0Overlap** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0Second** | **Number**|  | [optional] 
 **offerExpiryDateIn0Year** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesFixedOffset** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0DayOfMonthIndicator** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0DayOfWeek** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeHour** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeMinute** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeSecond** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0MidnightEndOfDay** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0Month** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0TimeDefinition** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DateTimeAfter** | **Date**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DateTimeBefore** | **Date**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationNegative** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DateBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DurationEstimated** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0TimeBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationZero** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0Gap** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0Instant** | **Date**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0Overlap** | **Boolean**|  | [optional] 
 **offerExpiryDateLessThan** | **Date**|  | [optional] 
 **offerExpiryDateLessThanOrEqual** | **Date**|  | [optional] 
 **offerExpiryDateNotEquals** | **Date**|  | [optional] 
 **offerExpiryDateSpecified** | **Boolean**|  | [optional] 
 **procurementIdEquals** | **Number**|  | [optional] 
 **procurementIdGreaterThan** | **Number**|  | [optional] 
 **procurementIdGreaterThanOrEqual** | **Number**|  | [optional] 
 **procurementIdIn** | [**[Number]**](Number.md)|  | [optional] 
 **procurementIdLessThan** | **Number**|  | [optional] 
 **procurementIdLessThanOrEqual** | **Number**|  | [optional] 
 **procurementIdNotEquals** | **Number**|  | [optional] 
 **procurementIdSpecified** | **Boolean**|  | [optional] 
 **securityAmountEquals** | **Number**|  | [optional] 
 **securityAmountGreaterThan** | **Number**|  | [optional] 
 **securityAmountGreaterThanOrEqual** | **Number**|  | [optional] 
 **securityAmountIn** | [**[Number]**](Number.md)|  | [optional] 
 **securityAmountLessThan** | **Number**|  | [optional] 
 **securityAmountLessThanOrEqual** | **Number**|  | [optional] 
 **securityAmountNotEquals** | **Number**|  | [optional] 
 **securityAmountSpecified** | **Boolean**|  | [optional] 

### Return type

**&#x27;Number&#x27;**

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createProcurementLotUsingPOST"></a>
# **createProcurementLotUsingPOST**
> ProcurementLotDTO createProcurementLotUsingPOST(body)

createProcurementLot

### Example
```javascript
import ItalianPpApi from 'italian_pp_api';
let defaultClient = ItalianPpApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: UserInterface
let UserInterface = defaultClient.authentications['UserInterface'];
UserInterface.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ItalianPpApi.ProcurementLotResourceApi();
let body = new ItalianPpApi.ProcurementLotDTO(); // ProcurementLotDTO | procurementLotDTO

apiInstance.createProcurementLotUsingPOST(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProcurementLotDTO**](ProcurementLotDTO.md)| procurementLotDTO | 

### Return type

[**ProcurementLotDTO**](ProcurementLotDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteProcurementLotUsingDELETE"></a>
# **deleteProcurementLotUsingDELETE**
> deleteProcurementLotUsingDELETE(id)

deleteProcurementLot

### Example
```javascript
import ItalianPpApi from 'italian_pp_api';
let defaultClient = ItalianPpApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: UserInterface
let UserInterface = defaultClient.authentications['UserInterface'];
UserInterface.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ItalianPpApi.ProcurementLotResourceApi();
let id = 789; // Number | id

apiInstance.deleteProcurementLotUsingDELETE(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllProcurementLotsUsingGET"></a>
# **getAllProcurementLotsUsingGET**
> [ProcurementLotDTO] getAllProcurementLotsUsingGET(opts)

getAllProcurementLots

### Example
```javascript
import ItalianPpApi from 'italian_pp_api';
let defaultClient = ItalianPpApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: UserInterface
let UserInterface = defaultClient.authentications['UserInterface'];
UserInterface.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ItalianPpApi.ProcurementLotResourceApi();
let opts = { 
  'baseAmountEquals': 1.2, // Number | 
  'baseAmountGreaterThan': 1.2, // Number | 
  'baseAmountGreaterThanOrEqual': 1.2, // Number | 
  'baseAmountIn': [3.4], // [Number] | 
  'baseAmountLessThan': 1.2, // Number | 
  'baseAmountLessThanOrEqual': 1.2, // Number | 
  'baseAmountNotEquals': 1.2, // Number | 
  'baseAmountSpecified': true, // Boolean | 
  'cigContains': "cigContains_example", // String | 
  'cigDoesNotContain': "cigDoesNotContain_example", // String | 
  'cigEquals': "cigEquals_example", // String | 
  'cigIn': ["cigIn_example"], // [String] | 
  'cigNotEquals': "cigNotEquals_example", // String | 
  'cigSpecified': true, // Boolean | 
  'cpvCodeContains': "cpvCodeContains_example", // String | 
  'cpvCodeDoesNotContain': "cpvCodeDoesNotContain_example", // String | 
  'cpvCodeEquals': "cpvCodeEquals_example", // String | 
  'cpvCodeIn': ["cpvCodeIn_example"], // [String] | 
  'cpvCodeNotEquals': "cpvCodeNotEquals_example", // String | 
  'cpvCodeSpecified': true, // Boolean | 
  'descriptionContains': "descriptionContains_example", // String | 
  'descriptionDoesNotContain': "descriptionDoesNotContain_example", // String | 
  'descriptionEquals': "descriptionEquals_example", // String | 
  'descriptionIn': ["descriptionIn_example"], // [String] | 
  'descriptionNotEquals': "descriptionNotEquals_example", // String | 
  'descriptionSpecified': true, // Boolean | 
  'idEquals': 789, // Number | 
  'idGreaterThan': 789, // Number | 
  'idGreaterThanOrEqual': 789, // Number | 
  'idIn': [3.4], // [Number] | 
  'idLessThan': 789, // Number | 
  'idLessThanOrEqual': 789, // Number | 
  'idNotEquals': 789, // Number | 
  'idSpecified': true, // Boolean | 
  'ippLotCategoryCodeContains': "ippLotCategoryCodeContains_example", // String | 
  'ippLotCategoryCodeDoesNotContain': "ippLotCategoryCodeDoesNotContain_example", // String | 
  'ippLotCategoryCodeEquals': "ippLotCategoryCodeEquals_example", // String | 
  'ippLotCategoryCodeIn': ["ippLotCategoryCodeIn_example"], // [String] | 
  'ippLotCategoryCodeNotEquals': "ippLotCategoryCodeNotEquals_example", // String | 
  'ippLotCategoryCodeSpecified': true, // Boolean | 
  'ippLotTypeCodeContains': "ippLotTypeCodeContains_example", // String | 
  'ippLotTypeCodeDoesNotContain': "ippLotTypeCodeDoesNotContain_example", // String | 
  'ippLotTypeCodeEquals': "ippLotTypeCodeEquals_example", // String | 
  'ippLotTypeCodeIn': ["ippLotTypeCodeIn_example"], // [String] | 
  'ippLotTypeCodeNotEquals': "ippLotTypeCodeNotEquals_example", // String | 
  'ippLotTypeCodeSpecified': true, // Boolean | 
  'istatCodeContains': "istatCodeContains_example", // String | 
  'istatCodeDoesNotContain': "istatCodeDoesNotContain_example", // String | 
  'istatCodeEquals': "istatCodeEquals_example", // String | 
  'istatCodeIn': ["istatCodeIn_example"], // [String] | 
  'istatCodeNotEquals': "istatCodeNotEquals_example", // String | 
  'istatCodeSpecified': true, // Boolean | 
  'nutsCodeContains': "nutsCodeContains_example", // String | 
  'nutsCodeDoesNotContain': "nutsCodeDoesNotContain_example", // String | 
  'nutsCodeEquals': "nutsCodeEquals_example", // String | 
  'nutsCodeIn': ["nutsCodeIn_example"], // [String] | 
  'nutsCodeNotEquals': "nutsCodeNotEquals_example", // String | 
  'nutsCodeSpecified': true, // Boolean | 
  'offerExpiryDateEquals': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateGreaterThan': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateGreaterThanOrEqual': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0DayOfMonth': 56, // Number | 
  'offerExpiryDateIn0DayOfWeek': "offerExpiryDateIn0DayOfWeek_example", // String | 
  'offerExpiryDateIn0DayOfYear': 56, // Number | 
  'offerExpiryDateIn0Hour': 56, // Number | 
  'offerExpiryDateIn0Minute': 56, // Number | 
  'offerExpiryDateIn0Month': "offerExpiryDateIn0Month_example", // String | 
  'offerExpiryDateIn0MonthValue': 56, // Number | 
  'offerExpiryDateIn0Nano': 56, // Number | 
  'offerExpiryDateIn0OffsetId': "offerExpiryDateIn0OffsetId_example", // String | 
  'offerExpiryDateIn0OffsetRulesFixedOffset': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0DayOfMonthIndicator': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0DayOfWeek': "offerExpiryDateIn0OffsetRulesTransitionRules0DayOfWeek_example", // String | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeHour': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeMinute': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeNano': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeSecond': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0MidnightEndOfDay': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0Month': "offerExpiryDateIn0OffsetRulesTransitionRules0Month_example", // String | 
  'offerExpiryDateIn0OffsetRulesTransitionRules0TimeDefinition': "offerExpiryDateIn0OffsetRulesTransitionRules0TimeDefinition_example", // String | 
  'offerExpiryDateIn0OffsetRulesTransitions0DateTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0OffsetRulesTransitions0DateTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationNano': 56, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationNegative': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationSeconds': 789, // Number | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DateBased': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DurationEstimated': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0TimeBased': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0DurationZero': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0Gap': true, // Boolean | 
  'offerExpiryDateIn0OffsetRulesTransitions0Instant': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0OffsetRulesTransitions0Overlap': true, // Boolean | 
  'offerExpiryDateIn0OffsetTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0Second': 56, // Number | 
  'offerExpiryDateIn0Year': 56, // Number | 
  'offerExpiryDateIn0ZoneId': "offerExpiryDateIn0ZoneId_example", // String | 
  'offerExpiryDateIn0ZoneRulesFixedOffset': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0DayOfMonthIndicator': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0DayOfWeek': "offerExpiryDateIn0ZoneRulesTransitionRules0DayOfWeek_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeHour': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeMinute': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeNano': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeSecond': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0MidnightEndOfDay': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0Month': "offerExpiryDateIn0ZoneRulesTransitionRules0Month_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterId': "offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeId': "offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetId': "offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitionRules0TimeDefinition': "offerExpiryDateIn0ZoneRulesTransitionRules0TimeDefinition_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitions0DateTimeAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0ZoneRulesTransitions0DateTimeBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationNano': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationNegative': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationSeconds': 789, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DateBased': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DurationEstimated': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0TimeBased': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0DurationZero': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0Gap': true, // Boolean | 
  'offerExpiryDateIn0ZoneRulesTransitions0Instant': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterId': "offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeId': "offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeId_example", // String | 
  'offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeTotalSeconds': 56, // Number | 
  'offerExpiryDateIn0ZoneRulesTransitions0Overlap': true, // Boolean | 
  'offerExpiryDateLessThan': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateLessThanOrEqual': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateNotEquals': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'offerExpiryDateSpecified': true, // Boolean | 
  'page': 56, // Number | Page number of the requested page
  'procurementIdEquals': 789, // Number | 
  'procurementIdGreaterThan': 789, // Number | 
  'procurementIdGreaterThanOrEqual': 789, // Number | 
  'procurementIdIn': [3.4], // [Number] | 
  'procurementIdLessThan': 789, // Number | 
  'procurementIdLessThanOrEqual': 789, // Number | 
  'procurementIdNotEquals': 789, // Number | 
  'procurementIdSpecified': true, // Boolean | 
  'securityAmountEquals': 1.2, // Number | 
  'securityAmountGreaterThan': 1.2, // Number | 
  'securityAmountGreaterThanOrEqual': 1.2, // Number | 
  'securityAmountIn': [3.4], // [Number] | 
  'securityAmountLessThan': 1.2, // Number | 
  'securityAmountLessThanOrEqual': 1.2, // Number | 
  'securityAmountNotEquals': 1.2, // Number | 
  'securityAmountSpecified': true, // Boolean | 
  'size': 56, // Number | Size of a page
  'sort': ["sort_example"] // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
};
apiInstance.getAllProcurementLotsUsingGET(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAmountEquals** | **Number**|  | [optional] 
 **baseAmountGreaterThan** | **Number**|  | [optional] 
 **baseAmountGreaterThanOrEqual** | **Number**|  | [optional] 
 **baseAmountIn** | [**[Number]**](Number.md)|  | [optional] 
 **baseAmountLessThan** | **Number**|  | [optional] 
 **baseAmountLessThanOrEqual** | **Number**|  | [optional] 
 **baseAmountNotEquals** | **Number**|  | [optional] 
 **baseAmountSpecified** | **Boolean**|  | [optional] 
 **cigContains** | **String**|  | [optional] 
 **cigDoesNotContain** | **String**|  | [optional] 
 **cigEquals** | **String**|  | [optional] 
 **cigIn** | [**[String]**](String.md)|  | [optional] 
 **cigNotEquals** | **String**|  | [optional] 
 **cigSpecified** | **Boolean**|  | [optional] 
 **cpvCodeContains** | **String**|  | [optional] 
 **cpvCodeDoesNotContain** | **String**|  | [optional] 
 **cpvCodeEquals** | **String**|  | [optional] 
 **cpvCodeIn** | [**[String]**](String.md)|  | [optional] 
 **cpvCodeNotEquals** | **String**|  | [optional] 
 **cpvCodeSpecified** | **Boolean**|  | [optional] 
 **descriptionContains** | **String**|  | [optional] 
 **descriptionDoesNotContain** | **String**|  | [optional] 
 **descriptionEquals** | **String**|  | [optional] 
 **descriptionIn** | [**[String]**](String.md)|  | [optional] 
 **descriptionNotEquals** | **String**|  | [optional] 
 **descriptionSpecified** | **Boolean**|  | [optional] 
 **idEquals** | **Number**|  | [optional] 
 **idGreaterThan** | **Number**|  | [optional] 
 **idGreaterThanOrEqual** | **Number**|  | [optional] 
 **idIn** | [**[Number]**](Number.md)|  | [optional] 
 **idLessThan** | **Number**|  | [optional] 
 **idLessThanOrEqual** | **Number**|  | [optional] 
 **idNotEquals** | **Number**|  | [optional] 
 **idSpecified** | **Boolean**|  | [optional] 
 **ippLotCategoryCodeContains** | **String**|  | [optional] 
 **ippLotCategoryCodeDoesNotContain** | **String**|  | [optional] 
 **ippLotCategoryCodeEquals** | **String**|  | [optional] 
 **ippLotCategoryCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippLotCategoryCodeNotEquals** | **String**|  | [optional] 
 **ippLotCategoryCodeSpecified** | **Boolean**|  | [optional] 
 **ippLotTypeCodeContains** | **String**|  | [optional] 
 **ippLotTypeCodeDoesNotContain** | **String**|  | [optional] 
 **ippLotTypeCodeEquals** | **String**|  | [optional] 
 **ippLotTypeCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippLotTypeCodeNotEquals** | **String**|  | [optional] 
 **ippLotTypeCodeSpecified** | **Boolean**|  | [optional] 
 **istatCodeContains** | **String**|  | [optional] 
 **istatCodeDoesNotContain** | **String**|  | [optional] 
 **istatCodeEquals** | **String**|  | [optional] 
 **istatCodeIn** | [**[String]**](String.md)|  | [optional] 
 **istatCodeNotEquals** | **String**|  | [optional] 
 **istatCodeSpecified** | **Boolean**|  | [optional] 
 **nutsCodeContains** | **String**|  | [optional] 
 **nutsCodeDoesNotContain** | **String**|  | [optional] 
 **nutsCodeEquals** | **String**|  | [optional] 
 **nutsCodeIn** | [**[String]**](String.md)|  | [optional] 
 **nutsCodeNotEquals** | **String**|  | [optional] 
 **nutsCodeSpecified** | **Boolean**|  | [optional] 
 **offerExpiryDateEquals** | **Date**|  | [optional] 
 **offerExpiryDateGreaterThan** | **Date**|  | [optional] 
 **offerExpiryDateGreaterThanOrEqual** | **Date**|  | [optional] 
 **offerExpiryDateIn0DayOfMonth** | **Number**|  | [optional] 
 **offerExpiryDateIn0DayOfWeek** | **String**|  | [optional] 
 **offerExpiryDateIn0DayOfYear** | **Number**|  | [optional] 
 **offerExpiryDateIn0Hour** | **Number**|  | [optional] 
 **offerExpiryDateIn0Minute** | **Number**|  | [optional] 
 **offerExpiryDateIn0Month** | **String**|  | [optional] 
 **offerExpiryDateIn0MonthValue** | **Number**|  | [optional] 
 **offerExpiryDateIn0Nano** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetId** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesFixedOffset** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0DayOfMonthIndicator** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0DayOfWeek** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeHour** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeMinute** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0LocalTimeSecond** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0MidnightEndOfDay** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0Month** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitionRules0TimeDefinition** | **String**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DateTimeAfter** | **Date**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DateTimeBefore** | **Date**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationNegative** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DateBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0DurationEstimated** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationUnits0TimeBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0DurationZero** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0Gap** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0Instant** | **Date**|  | [optional] 
 **offerExpiryDateIn0OffsetRulesTransitions0Overlap** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0OffsetTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0Second** | **Number**|  | [optional] 
 **offerExpiryDateIn0Year** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesFixedOffset** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0DayOfMonthIndicator** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0DayOfWeek** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeHour** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeMinute** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0LocalTimeSecond** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0MidnightEndOfDay** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0Month** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetAfterTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0OffsetBeforeTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0StandardOffsetTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitionRules0TimeDefinition** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DateTimeAfter** | **Date**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DateTimeBefore** | **Date**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationNano** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationNegative** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DateBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0DurationEstimated** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationUnits0TimeBased** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0DurationZero** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0Gap** | **Boolean**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0Instant** | **Date**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetAfterTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeId** | **String**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0OffsetBeforeTotalSeconds** | **Number**|  | [optional] 
 **offerExpiryDateIn0ZoneRulesTransitions0Overlap** | **Boolean**|  | [optional] 
 **offerExpiryDateLessThan** | **Date**|  | [optional] 
 **offerExpiryDateLessThanOrEqual** | **Date**|  | [optional] 
 **offerExpiryDateNotEquals** | **Date**|  | [optional] 
 **offerExpiryDateSpecified** | **Boolean**|  | [optional] 
 **page** | **Number**| Page number of the requested page | [optional] 
 **procurementIdEquals** | **Number**|  | [optional] 
 **procurementIdGreaterThan** | **Number**|  | [optional] 
 **procurementIdGreaterThanOrEqual** | **Number**|  | [optional] 
 **procurementIdIn** | [**[Number]**](Number.md)|  | [optional] 
 **procurementIdLessThan** | **Number**|  | [optional] 
 **procurementIdLessThanOrEqual** | **Number**|  | [optional] 
 **procurementIdNotEquals** | **Number**|  | [optional] 
 **procurementIdSpecified** | **Boolean**|  | [optional] 
 **securityAmountEquals** | **Number**|  | [optional] 
 **securityAmountGreaterThan** | **Number**|  | [optional] 
 **securityAmountGreaterThanOrEqual** | **Number**|  | [optional] 
 **securityAmountIn** | [**[Number]**](Number.md)|  | [optional] 
 **securityAmountLessThan** | **Number**|  | [optional] 
 **securityAmountLessThanOrEqual** | **Number**|  | [optional] 
 **securityAmountNotEquals** | **Number**|  | [optional] 
 **securityAmountSpecified** | **Boolean**|  | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 

### Return type

[**[ProcurementLotDTO]**](ProcurementLotDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getProcurementLotUsingGET"></a>
# **getProcurementLotUsingGET**
> ProcurementLotDTO getProcurementLotUsingGET(id)

getProcurementLot

### Example
```javascript
import ItalianPpApi from 'italian_pp_api';
let defaultClient = ItalianPpApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: UserInterface
let UserInterface = defaultClient.authentications['UserInterface'];
UserInterface.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ItalianPpApi.ProcurementLotResourceApi();
let id = 789; // Number | id

apiInstance.getProcurementLotUsingGET(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**ProcurementLotDTO**](ProcurementLotDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateProcurementLotUsingPUT"></a>
# **updateProcurementLotUsingPUT**
> ProcurementLotDTO updateProcurementLotUsingPUT(body)

updateProcurementLot

### Example
```javascript
import ItalianPpApi from 'italian_pp_api';
let defaultClient = ItalianPpApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: ServiceAccount
let ServiceAccount = defaultClient.authentications['ServiceAccount'];
ServiceAccount.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: UserInterface
let UserInterface = defaultClient.authentications['UserInterface'];
UserInterface.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ItalianPpApi.ProcurementLotResourceApi();
let body = new ItalianPpApi.ProcurementLotDTO(); // ProcurementLotDTO | procurementLotDTO

apiInstance.updateProcurementLotUsingPUT(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProcurementLotDTO**](ProcurementLotDTO.md)| procurementLotDTO | 

### Return type

[**ProcurementLotDTO**](ProcurementLotDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

