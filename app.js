var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));

// USE BODYPARSER
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

// INIT ROUTES
require('./routes/routes')(app);

// CONNECT MONGOOSE
mongoose.connect('mongodb://localhost:27017/passwordmanager');

// START LISTEN
app.listen(2000, () => {
	console.log('Listening on port 2000');
});