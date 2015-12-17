'use strict'

var assert = require('assert');
var keyword = require('../keyword.json')
var utils = require('../utils.js')

describe('#Utils', function() {
    describe('#Check response string', function() {
        it('should contain 2 slashes', function() {
            var response = utils.createRespStr();
            assert.deepStrictEqual(response.split('/').length, 3);
        });
    });
});
