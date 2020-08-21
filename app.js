var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var corsOptions = {
    "Origin": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
}

app.use(cors(corsOptions));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cors(corsOptions), indexRouter);

module.exports = app;
