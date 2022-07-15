'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const User = require('../src/models/user')

const indexRoute = require('../src/routes/index-route');
const userRoute = require('../src/routes/user-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/register', userRoute);

module.exports = app;