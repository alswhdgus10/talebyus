'use strict'

exports.createRandomBaseArr = function(keyword) {
    var arr = [];
    for (var i in keyword) {
        arr.push(i);
    }
    return arr;
}

exports.createRandomArr = function(random_num) {
    var arr = [];
    while (arr.length < 3) {
        var r = this.pickRandom(random_num.length);
        arr.push(random_num[r]);
        random_num.splice(r, 1);
    }
    return arr;
}

exports.createRespStr = function(keyword, random) {
    var response = '';
    for (var i = 0; i < 3; i++) {
        response += (keyword[random[i]]);
        if (i != 2) {
            response += ' / '
        }
    }
    return response;
}

exports.pickRandom = function(len) {
    return Math.floor(Math.random() * len);
}
