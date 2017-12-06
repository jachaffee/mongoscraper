var express = require('express');
var routes = require('./controllers/controller.js');
var app = express();
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

var databaseUri = 'mongodb://localhost/scraperdb';

if (process.env.mongodb://heroku_m6zcggd8:htief2fannhd9ctdkji0eiv1qr@ds127439.mlab.com:27439/heroku_m6zcggd8) {
	mongoose.connect(process.env.mongodb://heroku_m6zcggd8:htief2fannhd9ctdkji0eiv1qr@ds127439.mlab.com:27439/heroku_m6zcggd8);
}

else {
	mongoose.connect(databaseUri);
}

app.use('/', routes);

app.listen(process.env.PORT || 3000,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 3000"):console.log("App listening on PORT" + process.env.PORT);
});