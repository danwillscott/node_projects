/**
 * Created by danielscott on 4/26/17.
 */
let express = require('express');
let app = express();
let bp = require('body-parser');
let path = require('path');
let port = process.env.PORT || 3030;
let mongoose = require('mongoose');

let braintree = require("braintree");

let gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "useYourMerchantId",
  publicKey: "useYourPublicKey",
  privateKey: "useYourPrivateKey"
});

mongoose.Promise = global.Promise;
app.use(bp.json());
app.use(express.static(path.join(__dirname, 'public/assets/css')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, './public'));
app.set('view engine', 'ejs');


let routes = require('./server/config/routes');
routes(app);

app.listen(port);
