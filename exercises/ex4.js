// Required libraries.
var expect = require('chai').expect;
var request = require('request');
require('../ex3.js');

describe("Get all products", function ()
{
	// Used to store the result.
    let result;
	
    // First we call the service.
    before(function (done) {
        // Configure the call with content-type and uri.
        // Make call.
    });
	// Catch all conditions.
	// Conditions: Errors, Status Code 200, Return more then 3 items.
});

describe("Get one product", function () {
	// Used to store the result.
    let result;
    
    before(function (done) {
        // Configure the call with content-type and uri.
        // Make call. 
    });
	// Catch all conditions.
	// Conditions: Errors, Status Code 200, Return one specific product.
});

describe("Add one product", function () {
	// Used to store the result.
    let result;
    
    before(function (done) {
        // Configure the call with content-type and uri.
        // Make call.
    });
	// Catch all conditions.
	// Conditions: Errors, Status Code 200.
});

describe("Get all products again", function () {
	// Used to store the result.
    let result;
    
    before(function (done) {
        // Configure the call with content-type and uri.
        // Make call.
    });
    it('should execute without errors', function (done) {
       expect(result.err).to.equal(null);
       done();
    });
	// Catch all conditions.
	// Conditions: Status Code 200, Get the count of the item + 1.
});
