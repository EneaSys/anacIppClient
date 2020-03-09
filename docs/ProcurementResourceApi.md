# ItalianPpApi.ProcurementResourceApi

All URIs are relative to *https://api-gest.eneasys.net/ipp*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countProcurementsUsingGET**](ProcurementResourceApi.md#countProcurementsUsingGET) | **GET** /api/procurements/count | countProcurements
[**createProcurementUsingPOST**](ProcurementResourceApi.md#createProcurementUsingPOST) | **POST** /api/procurements | createProcurement
[**deleteProcurementUsingDELETE**](ProcurementResourceApi.md#deleteProcurementUsingDELETE) | **DELETE** /api/procurements/{id} | deleteProcurement
[**getAllProcurementsUsingGET**](ProcurementResourceApi.md#getAllProcurementsUsingGET) | **GET** /api/procurements | getAllProcurements
[**getProcurementUsingGET**](ProcurementResourceApi.md#getProcurementUsingGET) | **GET** /api/procurements/{id} | getProcurement
[**updateProcurementUsingPUT**](ProcurementResourceApi.md#updateProcurementUsingPUT) | **PUT** /api/procurements | updateProcurement

<a name="countProcurementsUsingGET"></a>
# **countProcurementsUsingGET**
> &#x27;Number&#x27; countProcurementsUsingGET(opts)

countProcurements

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

let apiInstance = new ItalianPpApi.ProcurementResourceApi();
let opts = { 
  'codeContains': "codeContains_example", // String | 
  'codeDoesNotContain': "codeDoesNotContain_example", // String | 
  'codeEquals': "codeEquals_example", // String | 
  'codeIn': ["codeIn_example"], // [String] | 
  'codeNotEquals': "codeNotEquals_example", // String | 
  'codeSpecified': true, // Boolean | 
  'contractorEopooCodeContains': "contractorEopooCodeContains_example", // String | 
  'contractorEopooCodeDoesNotContain': "contractorEopooCodeDoesNotContain_example", // String | 
  'contractorEopooCodeEquals': "contractorEopooCodeEquals_example", // String | 
  'contractorEopooCodeIn': ["contractorEopooCodeIn_example"], // [String] | 
  'contractorEopooCodeNotEquals': "contractorEopooCodeNotEquals_example", // String | 
  'contractorEopooCodeSpecified': true, // Boolean | 
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
  'ippModalityCodeContains': "ippModalityCodeContains_example", // String | 
  'ippModalityCodeDoesNotContain': "ippModalityCodeDoesNotContain_example", // String | 
  'ippModalityCodeEquals': "ippModalityCodeEquals_example", // String | 
  'ippModalityCodeIn': ["ippModalityCodeIn_example"], // [String] | 
  'ippModalityCodeNotEquals': "ippModalityCodeNotEquals_example", // String | 
  'ippModalityCodeSpecified': true, // Boolean | 
  'ippProcedureCodeContains': "ippProcedureCodeContains_example", // String | 
  'ippProcedureCodeDoesNotContain': "ippProcedureCodeDoesNotContain_example", // String | 
  'ippProcedureCodeEquals': "ippProcedureCodeEquals_example", // String | 
  'ippProcedureCodeIn': ["ippProcedureCodeIn_example"], // [String] | 
  'ippProcedureCodeNotEquals': "ippProcedureCodeNotEquals_example", // String | 
  'ippProcedureCodeSpecified': true, // Boolean | 
  'ippSectorCodeContains': "ippSectorCodeContains_example", // String | 
  'ippSectorCodeDoesNotContain': "ippSectorCodeDoesNotContain_example", // String | 
  'ippSectorCodeEquals': "ippSectorCodeEquals_example", // String | 
  'ippSectorCodeIn': ["ippSectorCodeIn_example"], // [String] | 
  'ippSectorCodeNotEquals': "ippSectorCodeNotEquals_example", // String | 
  'ippSectorCodeSpecified': true, // Boolean | 
  'refContains': "refContains_example", // String | 
  'refDoesNotContain': "refDoesNotContain_example", // String | 
  'refEquals': "refEquals_example", // String | 
  'refIn': ["refIn_example"], // [String] | 
  'refNotEquals': "refNotEquals_example", // String | 
  'refSpecified': true, // Boolean | 
  'totalAmountEquals': 1.2, // Number | 
  'totalAmountGreaterThan': 1.2, // Number | 
  'totalAmountGreaterThanOrEqual': 1.2, // Number | 
  'totalAmountIn': [3.4], // [Number] | 
  'totalAmountLessThan': 1.2, // Number | 
  'totalAmountLessThanOrEqual': 1.2, // Number | 
  'totalAmountNotEquals': 1.2, // Number | 
  'totalAmountSpecified': true // Boolean | 
};
apiInstance.countProcurementsUsingGET(opts, (error, data, response) => {
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
 **codeContains** | **String**|  | [optional] 
 **codeDoesNotContain** | **String**|  | [optional] 
 **codeEquals** | **String**|  | [optional] 
 **codeIn** | [**[String]**](String.md)|  | [optional] 
 **codeNotEquals** | **String**|  | [optional] 
 **codeSpecified** | **Boolean**|  | [optional] 
 **contractorEopooCodeContains** | **String**|  | [optional] 
 **contractorEopooCodeDoesNotContain** | **String**|  | [optional] 
 **contractorEopooCodeEquals** | **String**|  | [optional] 
 **contractorEopooCodeIn** | [**[String]**](String.md)|  | [optional] 
 **contractorEopooCodeNotEquals** | **String**|  | [optional] 
 **contractorEopooCodeSpecified** | **Boolean**|  | [optional] 
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
 **ippModalityCodeContains** | **String**|  | [optional] 
 **ippModalityCodeDoesNotContain** | **String**|  | [optional] 
 **ippModalityCodeEquals** | **String**|  | [optional] 
 **ippModalityCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippModalityCodeNotEquals** | **String**|  | [optional] 
 **ippModalityCodeSpecified** | **Boolean**|  | [optional] 
 **ippProcedureCodeContains** | **String**|  | [optional] 
 **ippProcedureCodeDoesNotContain** | **String**|  | [optional] 
 **ippProcedureCodeEquals** | **String**|  | [optional] 
 **ippProcedureCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippProcedureCodeNotEquals** | **String**|  | [optional] 
 **ippProcedureCodeSpecified** | **Boolean**|  | [optional] 
 **ippSectorCodeContains** | **String**|  | [optional] 
 **ippSectorCodeDoesNotContain** | **String**|  | [optional] 
 **ippSectorCodeEquals** | **String**|  | [optional] 
 **ippSectorCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippSectorCodeNotEquals** | **String**|  | [optional] 
 **ippSectorCodeSpecified** | **Boolean**|  | [optional] 
 **refContains** | **String**|  | [optional] 
 **refDoesNotContain** | **String**|  | [optional] 
 **refEquals** | **String**|  | [optional] 
 **refIn** | [**[String]**](String.md)|  | [optional] 
 **refNotEquals** | **String**|  | [optional] 
 **refSpecified** | **Boolean**|  | [optional] 
 **totalAmountEquals** | **Number**|  | [optional] 
 **totalAmountGreaterThan** | **Number**|  | [optional] 
 **totalAmountGreaterThanOrEqual** | **Number**|  | [optional] 
 **totalAmountIn** | [**[Number]**](Number.md)|  | [optional] 
 **totalAmountLessThan** | **Number**|  | [optional] 
 **totalAmountLessThanOrEqual** | **Number**|  | [optional] 
 **totalAmountNotEquals** | **Number**|  | [optional] 
 **totalAmountSpecified** | **Boolean**|  | [optional] 

### Return type

**&#x27;Number&#x27;**

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="createProcurementUsingPOST"></a>
# **createProcurementUsingPOST**
> ProcurementDTO createProcurementUsingPOST(body)

createProcurement

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

let apiInstance = new ItalianPpApi.ProcurementResourceApi();
let body = new ItalianPpApi.ProcurementDTO(); // ProcurementDTO | procurementDTO

apiInstance.createProcurementUsingPOST(body, (error, data, response) => {
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
 **body** | [**ProcurementDTO**](ProcurementDTO.md)| procurementDTO | 

### Return type

[**ProcurementDTO**](ProcurementDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteProcurementUsingDELETE"></a>
# **deleteProcurementUsingDELETE**
> deleteProcurementUsingDELETE(id)

deleteProcurement

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

let apiInstance = new ItalianPpApi.ProcurementResourceApi();
let id = 789; // Number | id

apiInstance.deleteProcurementUsingDELETE(id, (error, data, response) => {
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

<a name="getAllProcurementsUsingGET"></a>
# **getAllProcurementsUsingGET**
> [ProcurementDTO] getAllProcurementsUsingGET(opts)

getAllProcurements

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

let apiInstance = new ItalianPpApi.ProcurementResourceApi();
let opts = { 
  'codeContains': "codeContains_example", // String | 
  'codeDoesNotContain': "codeDoesNotContain_example", // String | 
  'codeEquals': "codeEquals_example", // String | 
  'codeIn': ["codeIn_example"], // [String] | 
  'codeNotEquals': "codeNotEquals_example", // String | 
  'codeSpecified': true, // Boolean | 
  'contractorEopooCodeContains': "contractorEopooCodeContains_example", // String | 
  'contractorEopooCodeDoesNotContain': "contractorEopooCodeDoesNotContain_example", // String | 
  'contractorEopooCodeEquals': "contractorEopooCodeEquals_example", // String | 
  'contractorEopooCodeIn': ["contractorEopooCodeIn_example"], // [String] | 
  'contractorEopooCodeNotEquals': "contractorEopooCodeNotEquals_example", // String | 
  'contractorEopooCodeSpecified': true, // Boolean | 
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
  'ippModalityCodeContains': "ippModalityCodeContains_example", // String | 
  'ippModalityCodeDoesNotContain': "ippModalityCodeDoesNotContain_example", // String | 
  'ippModalityCodeEquals': "ippModalityCodeEquals_example", // String | 
  'ippModalityCodeIn': ["ippModalityCodeIn_example"], // [String] | 
  'ippModalityCodeNotEquals': "ippModalityCodeNotEquals_example", // String | 
  'ippModalityCodeSpecified': true, // Boolean | 
  'ippProcedureCodeContains': "ippProcedureCodeContains_example", // String | 
  'ippProcedureCodeDoesNotContain': "ippProcedureCodeDoesNotContain_example", // String | 
  'ippProcedureCodeEquals': "ippProcedureCodeEquals_example", // String | 
  'ippProcedureCodeIn': ["ippProcedureCodeIn_example"], // [String] | 
  'ippProcedureCodeNotEquals': "ippProcedureCodeNotEquals_example", // String | 
  'ippProcedureCodeSpecified': true, // Boolean | 
  'ippSectorCodeContains': "ippSectorCodeContains_example", // String | 
  'ippSectorCodeDoesNotContain': "ippSectorCodeDoesNotContain_example", // String | 
  'ippSectorCodeEquals': "ippSectorCodeEquals_example", // String | 
  'ippSectorCodeIn': ["ippSectorCodeIn_example"], // [String] | 
  'ippSectorCodeNotEquals': "ippSectorCodeNotEquals_example", // String | 
  'ippSectorCodeSpecified': true, // Boolean | 
  'page': 56, // Number | Page number of the requested page
  'refContains': "refContains_example", // String | 
  'refDoesNotContain': "refDoesNotContain_example", // String | 
  'refEquals': "refEquals_example", // String | 
  'refIn': ["refIn_example"], // [String] | 
  'refNotEquals': "refNotEquals_example", // String | 
  'refSpecified': true, // Boolean | 
  'size': 56, // Number | Size of a page
  'sort': ["sort_example"], // [String] | Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
  'totalAmountEquals': 1.2, // Number | 
  'totalAmountGreaterThan': 1.2, // Number | 
  'totalAmountGreaterThanOrEqual': 1.2, // Number | 
  'totalAmountIn': [3.4], // [Number] | 
  'totalAmountLessThan': 1.2, // Number | 
  'totalAmountLessThanOrEqual': 1.2, // Number | 
  'totalAmountNotEquals': 1.2, // Number | 
  'totalAmountSpecified': true // Boolean | 
};
apiInstance.getAllProcurementsUsingGET(opts, (error, data, response) => {
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
 **codeContains** | **String**|  | [optional] 
 **codeDoesNotContain** | **String**|  | [optional] 
 **codeEquals** | **String**|  | [optional] 
 **codeIn** | [**[String]**](String.md)|  | [optional] 
 **codeNotEquals** | **String**|  | [optional] 
 **codeSpecified** | **Boolean**|  | [optional] 
 **contractorEopooCodeContains** | **String**|  | [optional] 
 **contractorEopooCodeDoesNotContain** | **String**|  | [optional] 
 **contractorEopooCodeEquals** | **String**|  | [optional] 
 **contractorEopooCodeIn** | [**[String]**](String.md)|  | [optional] 
 **contractorEopooCodeNotEquals** | **String**|  | [optional] 
 **contractorEopooCodeSpecified** | **Boolean**|  | [optional] 
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
 **ippModalityCodeContains** | **String**|  | [optional] 
 **ippModalityCodeDoesNotContain** | **String**|  | [optional] 
 **ippModalityCodeEquals** | **String**|  | [optional] 
 **ippModalityCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippModalityCodeNotEquals** | **String**|  | [optional] 
 **ippModalityCodeSpecified** | **Boolean**|  | [optional] 
 **ippProcedureCodeContains** | **String**|  | [optional] 
 **ippProcedureCodeDoesNotContain** | **String**|  | [optional] 
 **ippProcedureCodeEquals** | **String**|  | [optional] 
 **ippProcedureCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippProcedureCodeNotEquals** | **String**|  | [optional] 
 **ippProcedureCodeSpecified** | **Boolean**|  | [optional] 
 **ippSectorCodeContains** | **String**|  | [optional] 
 **ippSectorCodeDoesNotContain** | **String**|  | [optional] 
 **ippSectorCodeEquals** | **String**|  | [optional] 
 **ippSectorCodeIn** | [**[String]**](String.md)|  | [optional] 
 **ippSectorCodeNotEquals** | **String**|  | [optional] 
 **ippSectorCodeSpecified** | **Boolean**|  | [optional] 
 **page** | **Number**| Page number of the requested page | [optional] 
 **refContains** | **String**|  | [optional] 
 **refDoesNotContain** | **String**|  | [optional] 
 **refEquals** | **String**|  | [optional] 
 **refIn** | [**[String]**](String.md)|  | [optional] 
 **refNotEquals** | **String**|  | [optional] 
 **refSpecified** | **Boolean**|  | [optional] 
 **size** | **Number**| Size of a page | [optional] 
 **sort** | [**[String]**](String.md)| Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | [optional] 
 **totalAmountEquals** | **Number**|  | [optional] 
 **totalAmountGreaterThan** | **Number**|  | [optional] 
 **totalAmountGreaterThanOrEqual** | **Number**|  | [optional] 
 **totalAmountIn** | [**[Number]**](Number.md)|  | [optional] 
 **totalAmountLessThan** | **Number**|  | [optional] 
 **totalAmountLessThanOrEqual** | **Number**|  | [optional] 
 **totalAmountNotEquals** | **Number**|  | [optional] 
 **totalAmountSpecified** | **Boolean**|  | [optional] 

### Return type

[**[ProcurementDTO]**](ProcurementDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getProcurementUsingGET"></a>
# **getProcurementUsingGET**
> ProcurementDTO getProcurementUsingGET(id)

getProcurement

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

let apiInstance = new ItalianPpApi.ProcurementResourceApi();
let id = 789; // Number | id

apiInstance.getProcurementUsingGET(id, (error, data, response) => {
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

[**ProcurementDTO**](ProcurementDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updateProcurementUsingPUT"></a>
# **updateProcurementUsingPUT**
> ProcurementDTO updateProcurementUsingPUT(body)

updateProcurement

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

let apiInstance = new ItalianPpApi.ProcurementResourceApi();
let body = new ItalianPpApi.ProcurementDTO(); // ProcurementDTO | procurementDTO

apiInstance.updateProcurementUsingPUT(body, (error, data, response) => {
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
 **body** | [**ProcurementDTO**](ProcurementDTO.md)| procurementDTO | 

### Return type

[**ProcurementDTO**](ProcurementDTO.md)

### Authorization

[ServiceAccount](../README.md#ServiceAccount), [UserInterface](../README.md#UserInterface)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

