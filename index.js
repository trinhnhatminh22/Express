var express = require('express');

var app = express();

var userRoutes = require('./router/router.js');

app.set('view engine', 'pug');
app.set('views', './views');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', userRoutes);

app.listen(3000);