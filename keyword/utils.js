'use strict'

const keyword = require('./keyword.json');
var _ = require('underscore');

exports.createRespStr = function() {
    var response = '';
    var idx = _.shuffle(_.range(_.size(keyword)));
    for (var i = 0; i < 3; i++) {
        response += (keyword[idx[i]]);
        if (i != 2) {
            response += ' / ';
        }
    }
    return response;
}
