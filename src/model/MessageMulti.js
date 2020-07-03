/**
 * Telstra Messaging API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MessageMulti model module.
 * @module model/MessageMulti
 * @version 2.0.0
 */
class MessageMulti {
    /**
     * Constructs a new <code>MessageMulti</code>.
     * @alias module:model/MessageMulti
     */
    constructor() { 
        
        MessageMulti.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageMulti</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageMulti} obj Optional instance to populate.
     * @return {module:model/MessageMulti} The populated <code>MessageMulti</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageMulti();

            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('receiptOff')) {
                obj['receiptOff'] = ApiClient.convertToType(data['receiptOff'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Phone number (in E.164 format) to send the SMS to. This number can be in international format `\"to\": \"+61412345678\"` or in national format. 
 * @member {String} to
 */
MessageMulti.prototype['to'] = undefined;

/**
 * The text body of the message. Messages longer than 160 characters will be counted as multiple messages.  This field contains the message text, this can be up to 1900 (for a single recipient) or 500 (for multiple recipients) UTF-8 characters. As mobile devices rarely support the full range of UTF-8 characters, it is possible that some characters may not be translated correctly by the mobile device 
 * @member {String} body
 */
MessageMulti.prototype['body'] = undefined;

/**
 * Whether Delivery Receipt will be sent back or not.  Setting this field to `true` will disable Delivery Receipts. The `notifyURL` field will be ignored, if there is one in the payload. An \"OLD-NONEXISTANT-MESSAGE-ID\" 400 error will also be returned upon Polling for the SMS Status. 
 * @member {Boolean} receiptOff
 */
MessageMulti.prototype['receiptOff'] = undefined;






export default MessageMulti;
