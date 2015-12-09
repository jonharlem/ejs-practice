//load needed modules
var express = require('express');
var fs = require('fs');
var app = express();

//set view engine to ejs
app.set('view engine', 'ejs');

//index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

//about page
app.get('/about', function(req, res) {
	res.render('pages/about')
});

//contact page
app.get('/contact', function(req, res) {
	res.render('pages/contact')
});

app.listen(8080);
console.log('8080 is the perfect portal')