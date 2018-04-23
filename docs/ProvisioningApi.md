# TelstraMessaging.ProvisioningApi

All URIs are relative to *https://tapi.telstra.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSubscription**](ProvisioningApi.md#createSubscription) | **POST** /messages/provisioning/subscriptions | Create Subscription
[**deleteSubscription**](ProvisioningApi.md#deleteSubscription) | **DELETE** /messages/provisioning/subscriptions | Delete Subscription
[**getSubscription**](ProvisioningApi.md#getSubscription) | **GET** /messages/provisioning/subscriptions | Get Subscription


<a name="createSubscription"></a>
# **createSubscription**
> ProvisionNumberResponse createSubscription(body)

Create Subscription

Invoke the provisioning API to get a dedicated mobile number for an account or application.  &lt;pre&gt;&lt;code class&#x3D;\&quot;language-sh\&quot;&gt;   #!/bin/bash   curl -X POST \\   https://tapi.telstra.com/v2/messages/provisioning/subscriptions \\   -H &#39;authorization: Bearer $ACCESS_TOKEN&#39; \\   -H &#39;cache-control: no-cache&#39; \\   -H &#39;content-type: application/json&#39; \\   -d &#39;{   \&quot;activeDays\&quot;:30,   \&quot;notifyURL\&quot;:\&quot;http://example.com/callback\&quot;,   \&quot;callbackData\&quot;:     {       \&quot;anything\&quot;:\&quot;some data\&quot;     }   }&#39; &lt;/code&gt;&lt;/pre&gt;

### Example
```javascript
var TelstraMessaging = require('Telstra_Messaging');
var defaultClient = TelstraMessaging.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new TelstraMessaging.ProvisioningApi();

var body = new TelstraMessaging.ProvisionNumberRequest(); // ProvisionNumberRequest | A JSON payload containing the required attributes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscription(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProvisionNumberRequest**](ProvisionNumberRequest.md)| A JSON payload containing the required attributes | 

### Return type

[**ProvisionNumberResponse**](ProvisionNumberResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSubscription"></a>
# **deleteSubscription**
> deleteSubscription(body)

Delete Subscription

Delete a mobile number subscription from an account

### Example
```javascript
var TelstraMessaging = require('Telstra_Messaging');
var defaultClient = TelstraMessaging.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new TelstraMessaging.ProvisioningApi();

var body = new TelstraMessaging.DeleteNumberRequest(); // DeleteNumberRequest | EmptyArr


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSubscription(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeleteNumberRequest**](DeleteNumberRequest.md)| EmptyArr | 

### Return type

null (empty response body)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubscription"></a>
# **getSubscription**
> GetSubscriptionResponse getSubscription()

Get Subscription

Get mobile number subscription for an account

### Example
```javascript
var TelstraMessaging = require('Telstra_Messaging');
var defaultClient = TelstraMessaging.ApiClient.instance;

// Configure OAuth2 access token for authorization: auth
var auth = defaultClient.authentications['auth'];
auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new TelstraMessaging.ProvisioningApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscription(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetSubscriptionResponse**](GetSubscriptionResponse.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

