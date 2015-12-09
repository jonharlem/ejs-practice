//load needed modules
var express = require('express');
var fs = require('fs');
var app = express();

//set view engine to ejs
app.set('view engine', 'ejs');

//index page
app.get('/', function(req, res) {
	res.render('pages/index')
});

//about page
app.get('/', function(req, res) {
	res.render('pages/about')
});

app.get()

//contact page