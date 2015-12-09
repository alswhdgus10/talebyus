'use strict'

var express = require('express');
var keyword = require('./keyword.json');
const restxt = '뽑힌 키워드는 다음과 같습니다.'

var app = express();

app.get('/', function(req, res) {
    if (req.query.token === 'YOUR_SLACK_TOKEN') {
        var random = [];
        var random_s = [];
        var response = '';
        for (var i in keyword) {
            random_s.push(i);
        }

        while (random.length < 3) {
            var r = Math.floor(Math.random() * random_s.length);
            random.push([random_s[r]]);
            random_s.splice(r, 1);
        }

        for (var i = 0; i < 3; i++) {
            response += (keyword[random[i]]);
            if (i != 2) {
                response += ' / '
            }
        }
        res.json({
            'text': restxt,
            'attachments': [{
                'text': response
            }]
        });
    } else {
        res.sendStatus(401);
    }
});

app.listen(5678);
