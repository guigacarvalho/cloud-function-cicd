const assert = require('assert');
const myFunctions = require('./index.js');


describe('helloWorld()', function() {
    // Mock values
    const emptyRequest = {};
    const queryRequest = { query: {message: 'Hello'} };
    const bodyRequest = { body: { message: 'Hello' } };
    const normalResponse = {
        send: (data) => {
            assert.strictEqual(data, 'Hello');
        }
    };
    const defaultResponse = {
        send: (data) => {
            assert.strictEqual(data, 'Hello World!');
        }
    };

    // Tests
    it('test when the query contains Hello message', function(done) {
        myFunctions.helloWorld(queryRequest, normalResponse);
        done();
    })
 
    it('test when the body constains Hello message', function(done) {
        myFunctions.helloWorld(bodyRequest, normalResponse);
        done();
    })
    
    it('test when the query is empty', function(done) {
        myFunctions.helloWorld(emptyRequest, defaultResponse);
        done();
    })
})