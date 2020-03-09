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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ItalianPpApi);
  }
}(this, function(expect, ItalianPpApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ItalianPpApi.ProcurementLotDTO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProcurementLotDTO', function() {
    it('should create an instance of ProcurementLotDTO', function() {
      // uncomment below and update the code to test ProcurementLotDTO
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be.a(ItalianPpApi.ProcurementLotDTO);
    });

    it('should have the property baseAmount (base name: "baseAmount")', function() {
      // uncomment below and update the code to test the property baseAmount
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property cig (base name: "cig")', function() {
      // uncomment below and update the code to test the property cig
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property cpvCode (base name: "cpvCode")', function() {
      // uncomment below and update the code to test the property cpvCode
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property ippLotCategoryCode (base name: "ippLotCategoryCode")', function() {
      // uncomment below and update the code to test the property ippLotCategoryCode
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property ippLotTypeCode (base name: "ippLotTypeCode")', function() {
      // uncomment below and update the code to test the property ippLotTypeCode
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property istatCode (base name: "istatCode")', function() {
      // uncomment below and update the code to test the property istatCode
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property nutsCode (base name: "nutsCode")', function() {
      // uncomment below and update the code to test the property nutsCode
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property offerExpiryDate (base name: "offerExpiryDate")', function() {
      // uncomment below and update the code to test the property offerExpiryDate
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property procurementDescription (base name: "procurementDescription")', function() {
      // uncomment below and update the code to test the property procurementDescription
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property procurementId (base name: "procurementId")', function() {
      // uncomment below and update the code to test the property procurementId
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

    it('should have the property securityAmount (base name: "securityAmount")', function() {
      // uncomment below and update the code to test the property securityAmount
      //var instane = new ItalianPpApi.ProcurementLotDTO();
      //expect(instance).to.be();
    });

  });

}));
