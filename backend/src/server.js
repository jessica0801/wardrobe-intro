var dotenv = require('dotenv');
var express = require('express');

//Load .env file
dotenv.config({path: '../.env'});

//setup express server
var app = express();
var port = process.env.PORT;

//Setup routers
app.use(require('./routers/statusRouter.js'));
app.use(require('./routers/carRouter.js'));

//bitcoin
app.use(require('./routers/bitRouter.js'));


//Start server
app.listen(port, function () {
    console.log('Running on port ' + port);
});
