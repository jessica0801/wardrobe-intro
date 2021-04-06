
var express = require('express');
var router = express.Router();

    router.get('/bit', function(req,res, next) {
        global.fetch = require('node-fetch');
        const cc = require('cryptocompare');
        cc.price('BTC', ['USD'])
            .then(function(prices) {
                res.send(prices)
            }).catch(function(error){
                res.send(error);
            })
        }); 

module.exports = router;