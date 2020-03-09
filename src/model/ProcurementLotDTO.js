/**
 * ItalianPP API
 * ItalianPP API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The ProcurementLotDTO model module.
* @module model/ProcurementLotDTO
* @version 0.0.1
*/
export default class ProcurementLotDTO {
    /**
    * Constructs a new <code>ProcurementLotDTO</code>.
    * @alias module:model/ProcurementLotDTO
    * @class
    * @param baseAmount {Number} 
    * @param cig {String} 
    * @param cpvCode {String} 
    * @param description {String} 
    * @param ippLotCategoryCode {String} 
    * @param ippLotTypeCode {String} 
    * @param offerExpiryDate {Date} 
    */

    constructor(baseAmount, cig, cpvCode, description, ippLotCategoryCode, ippLotTypeCode, offerExpiryDate) {
        
        
        this['baseAmount'] = baseAmount;
        this['cig'] = cig;
        this['cpvCode'] = cpvCode;
        this['description'] = description;
        this['ippLotCategoryCode'] = ippLotCategoryCode;
        this['ippLotTypeCode'] = ippLotTypeCode;
        this['offerExpiryDate'] = offerExpiryDate;
        
    }

    /**
    * Constructs a <code>ProcurementLotDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProcurementLotDTO} obj Optional instance to populate.
    * @return {module:model/ProcurementLotDTO} The populated <code>ProcurementLotDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcurementLotDTO();
                        
            
            if (data.hasOwnProperty('baseAmount')) {
                obj['baseAmount'] = ApiClient.convertToType(data['baseAmount'], 'Number');
            }
            if (data.hasOwnProperty('cig')) {
                obj['cig'] = ApiClient.convertToType(data['cig'], 'String');
            }
            if (data.hasOwnProperty('cpvCode')) {
                obj['cpvCode'] = ApiClient.convertToType(data['cpvCode'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('ippLotCategoryCode')) {
                obj['ippLotCategoryCode'] = ApiClient.convertToType(data['ippLotCategoryCode'], 'String');
            }
            if (data.hasOwnProperty('ippLotTypeCode')) {
                obj['ippLotTypeCode'] = ApiClient.convertToType(data['ippLotTypeCode'], 'String');
            }
            if (data.hasOwnProperty('istatCode')) {
                obj['istatCode'] = ApiClient.convertToType(data['istatCode'], 'String');
            }
            if (data.hasOwnProperty('nutsCode')) {
                obj['nutsCode'] = ApiClient.convertToType(data['nutsCode'], 'String');
            }
            if (data.hasOwnProperty('offerExpiryDate')) {
                obj['offerExpiryDate'] = ApiClient.convertToType(data['offerExpiryDate'], 'Date');
            }
            if (data.hasOwnProperty('procurementDescription')) {
                obj['procurementDescription'] = ApiClient.convertToType(data['procurementDescription'], 'String');
            }
            if (data.hasOwnProperty('procurementId')) {
                obj['procurementId'] = ApiClient.convertToType(data['procurementId'], 'Number');
            }
            if (data.hasOwnProperty('securityAmount')) {
                obj['securityAmount'] = ApiClient.convertToType(data['securityAmount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} baseAmount
    */
    baseAmount = undefined;
    /**
    * @member {String} cig
    */
    cig = undefined;
    /**
    * @member {String} cpvCode
    */
    cpvCode = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} ippLotCategoryCode
    */
    ippLotCategoryCode = undefined;
    /**
    * @member {String} ippLotTypeCode
    */
    ippLotTypeCode = undefined;
    /**
    * @member {String} istatCode
    */
    istatCode = undefined;
    /**
    * @member {String} nutsCode
    */
    nutsCode = undefined;
    /**
    * @member {Date} offerExpiryDate
    */
    offerExpiryDate = undefined;
    /**
    * @member {String} procurementDescription
    */
    procurementDescription = undefined;
    /**
    * @member {Number} procurementId
    */
    procurementId = undefined;
    /**
    * @member {Number} securityAmount
    */
    securityAmount = undefined;




}
