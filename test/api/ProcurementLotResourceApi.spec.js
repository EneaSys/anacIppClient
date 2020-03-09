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
    instance = new ItalianPpApi.ProcurementLotResourceApi();
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

  describe('ProcurementLotResourceApi', function() {
    describe('countProcurementLotsUsingGET', function() {
      it('should call countProcurementLotsUsingGET successfully', function(done) {
        //uncomment below and update the code to test countProcurementLotsUsingGET
        //instance.countProcurementLotsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProcurementLotUsingPOST', function() {
      it('should call createProcurementLotUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createProcurementLotUsingPOST
        //instance.createProcurementLotUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProcurementLotUsingDELETE', function() {
      it('should call deleteProcurementLotUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteProcurementLotUsingDELETE
        //instance.deleteProcurementLotUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllProcurementLotsUsingGET', function() {
      it('should call getAllProcurementLotsUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllProcurementLotsUsingGET
        //instance.getAllProcurementLotsUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProcurementLotUsingGET', function() {
      it('should call getProcurementLotUsingGET successfully', function(done) {
        //uncomment below and update the code to test getProcurementLotUsingGET
        //instance.getProcurementLotUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProcurementLotUsingPUT', function() {
      it('should call updateProcurementLotUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateProcurementLotUsingPUT
        //instance.updateProcurementLotUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
