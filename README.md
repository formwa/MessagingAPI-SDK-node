# Telstra Messaging

The SDK for the Telstra messaging API.

> :warning: **This SDK is experimental, everything is subject to change**

## Installing

```bash
npm i -s @tls/messaging
```

## Getting Started

These are the `Client key` and `Client secret` you can find here:
<https://dev.telstra.com/user/me/apps>.

To send your first SMS:

```javascript
import { CONFIG, SMS } from '@tls/messaging';

const authConfig = {
  tls_client_key: '<client key>', 
  tls_client_secret: '<client secret>'
}

CONFIG.setConfig(authConfig);
const sms = SMS.getInstance();

sms.send({
  to: "<mobile number>",
  body: "Hello from Typescript",
}).then((results) => {
  console.log(results);
});
```

## Authentication

Authentication through code is supported.

For example:

```javascript
import { CONFIG, SMS } from '@tls/messaging';

const authConfig = {
  tls_client_key: '<client key>',
  tls_client_secret: '<client secret>'
}

CONFIG.setConfig(authConfig);
```

This should be done before any interactions requiring authentication, such as
sending a SMS.

## Subscription

A subscription gives you a dedicated mobile number tied to an application. For
more information, please see here:
<https://dev.telstra.com/content/messaging-api#tag/Provisioning>.

### Create Subscription

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#operation/createSubscription>.

The function `tls.messaging.subscription.create` can be used to create a
subscription. It takes the following arguments:

- `active_days` (optional): The number of days the subscription will be active,
  defaults to 30.
- `notify_url` (optional): A notification URL that will be POSTed to whenever a
  new message (i.e. a reply to a message sent) arrives at this destination
  address.

It returns an object with the following properties:

- `destination_address`: The phone number that a message can be sent to.
- `active_days`: The number of days left on the subscription.

For example:

```javascript
import { Subscription } from '@tls/messaging';

const subscription = Subscription.getInstance();

subscription.create({
  "activeDays": 1,
  "notifyURL": "<callback url>"
}).then((results) => {
  console.log(results);
});
```

### Get Subscription

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#operation/getSubscription>.

The function `tls.messaging.subscription.get` can be used to get the current
subscription. It takes no arguments. It returns an object with the following
properties:

- `destination_address`: The phone number that a message can be sent to.
- `active_days`: The number of days left on the subscription.

For example:

```javascript
import { Subscription } from '@tls/messaging';

const subscription = Subscription.getInstance();

subscription.get().then((results) => {
  console.log(results);
});
```

### Delete Subscription

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#operation/deleteSubscription>.

The function `tls.messaging.subscription.delete` can be used to delete the current
subscription. It takes no arguments.

```javascript
import { Subscription } from '@tls/messaging';

const subscription = Subscription.getInstance();

subscription.delete().then((results) => {
  console.log(results);
});
```

## SMS

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#tag/Messaging>.

### Send SMS

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#operation/sendSms>.

The function `tls.messaging.sms.send` can be used to send SMS. It takes the
following arguments:

- `to`: The destination address, expected to be a phone number of the form
  `+614XXXXXXXX` or `04XXXXXXXX`.
- `body`: The SMS to send.
- `from_` (optional): An alphanumeric value which will appear as the sender.
  Note that phone numbers are not supported amd the maximum length is 11
  characters. Certain well know senders will be blocked.
- `validity` (optional): How long the platform should attempt to deliver the
  message for (in minutes).
- `scheduled_delivery` (optional): How long the platform should wait before
  attempting to send the message (in minutes).
- `notify_url` (optional): Contains a URL that will be called once your message
  has been processed.
- `priority` (optional): Message will be placed ahead of all messages with a
  normal priority.
- `reply_request` (optional): If set to true, the reply message functionality
  will be implemented.
- `receipt_off` (optional): Whether Delivery Receipt will be sent back or not.
- `user_msg_ref` (optional): Optional field used by some clients for custom
  reporting.

It returns an object with the following properties:

- `to`: The destination mobile number.
- `delivery_status`: Whether the delivery has been completed.
- `message_id`: Unique identifier for the message.
- `message_status_url`: URL to retrieve the current delivery status.

For example:

```javascript
import { SMS } from '@tls/messaging';
const sms = SMS.getInstance();

sms.send({
  to: "<mobile number>",
  body: "Hello from Typescript",
}).then((results) => {
  console.log(results);
});
```

### Get SMS Status

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#operation/getSmsStatus>.

The function `tls.messaging.sms.status` can be used to retrieve
the status of a SMS. It takes the following arguments:

- `message_id`:Unique identifier for the message.

It returns an object with the following properties:

- `to`: Where the message is delivered to.
- `delivery_status`: Whether the delivery has been completed.
- `received_timestamp`: When the message was received.
- `sent_timestamp`: When the message was sent.

For example:

```javascript
import { SMS } from '@tls/messaging';
const sms = SMS.getInstance();

sms.send({
  to: "<mobile number>",
  body: "Hello from Typescript",
}).then((sentSMS) => {
  sms.status(sentSMS.messageId);
});
```

### Retrieve Replies

For more information, please see here:
<https://dev.telstra.com/content/messaging-api#operation/retrieveSmsReplies>.

The function `tls.messaging.sms.get_next_unread_reply` can be used to retrieve
the next unread reply for your phone number subscription. It takes no
arguments. It returns an object with the following properties:

- `destination_address`: Where the message is delivered to.
- `sender_address`: Who the message is from.
- `status`: Whether the delivery has been completed.
- `message`: The body of the message.
- `message_id`: Unique identifier for the message.
- `sent_timestamp`: When the message was sent.

For example:

```javascript
import { SMS } from '@tls/messaging';
const sms = SMS.getInstance();

sms.get_next_unread_reply().then((results) => {
  console.log(results);
});
```
