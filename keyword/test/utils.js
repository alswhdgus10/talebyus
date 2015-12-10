'use strict'

var assert = require('assert');
var keyword = require('../keyword.json')
var utils = require('../utils.js')

describe('#Utils', function() {
    describe('#Create random array', function() {
        it('array length should equal', function() {
            assert.deepStrictEqual(keyword.length, utils.createRandomBaseArr(keyword).length);
        });
    });
    describe('#Check random value', function() {
        it('three values should not equal', function() {
            var random_num = utils.createRandomBaseArr(keyword);
            var random = utils.createRandomArr(random_num);
            assert.notStrictEqual(keyword[random[0]], keyword[random[1]]);
            assert.notStrictEqual(keyword[random[0]], keyword[random[2]]);
            assert.notStrictEqual(keyword[random[1]], keyword[random[2]]);
        });
    });
    describe('#Check response string', function() {
        it('should contain 2 slashes', function() {
            var random_num = utils.createRandomBaseArr(keyword);
            var random = utils.createRandomArr(random_num);
            var response = utils.createRespStr(keyword, random);
            assert.deepStrictEqual(response.split('/').length, 3);
        });
    });
});
