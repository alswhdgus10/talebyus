'use strict'

const inc = 'in_channel';
const restxt = '뽑힌 키워드는 다음과 같습니다.';

var express = require('express');
var keyword = require('./keyword.json');
var utils = require('./utils.js');

var app = express();

app.get('/', function(req, res) {
    if (req.query.token === 'YOUR_SLACK_TOKEN') {
        res.json({
            'response_type': inc,
            'text': restxt,
            'attachments': [{
                'text': utils.createRespStr()
            }]
        });
    } else {
        res.sendStatus(401);
    }
});

app.listen(5678);
