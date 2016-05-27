var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 8000, function() {
  console.log('Express server is running on http://localhost:8000/');
});
