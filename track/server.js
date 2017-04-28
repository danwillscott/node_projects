/**
 * Created by danielscott on 3/25/17.
 */

//  *******************
//  ***** Require *****
//  *******************

let express = require('express');
let session = require('express-session');
let path = require('path');
let port = process.env.port || 8080;
let bodyParser = require('body-parser');
let app = express();

//  ***************
//  ***** Use *****
//  ***************

app.use(session({
    secret: '1234Hnsdadnufn1u4ufnsdfal',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.json);
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/controllers')));
app.use(express.static(path.join(__dirname, 'client/factories')));
app.use(express.static(path.join(__dirname, 'client/assets')));
app.use(express.static(path.join(__dirname, 'client/partials')));
app.use(express.static(path.join(__dirname, 'client/assets/css')));
app.use(express.static(path.join(__dirname, 'client/assets/scripts')));
app.use(express.static(path.join(__dirname, 'bower_components/angular')));
app.use(express.static(path.join(__dirname, 'bower_components/angular-route')));
app.use(express.static(path.join(__dirname, 'bower_components/angular-cookies')));

//  *************************
//  ***** Routes and DB *****
//  *************************

require('./server/config/mongoose');
let routing = require('./server/config/routes');
routing(app);

//  ************************
//  ***** Server Start *****
//  ************************

app.listen(port, function () {
    console.log(`track app on port: ${port}`);
});