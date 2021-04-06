var express = require('express');
var router = express.Router();

//Define the status route
router.get('/status', (req,res) => {
    res.send('Hello World!');
});

module.exports = router;
