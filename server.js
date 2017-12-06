var express = require('express');
var routes = require('./controllers/controller.js');
var app = express();
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

var databaseUri = 'mongodb://localhost/scraperdb';

if (process.env.MONGODB_URI);
	mongoose.connect(process.env.MONGODB_URI);
}
else {
	mongoose.connect(databaseUri)
}

app.use('/', routes);

app.listen(process.env.PORT || 3000,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 3000"):console.log("App listening on PORT" + process.env.PORT);
});