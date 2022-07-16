'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const User = require('../src/models/user');
const Contact = require('../src/models/contacts');

const indexRoute = require('../src/routes/index-route');
const userRoute = require('../src/routes/user-route');
const contactsRoute = require('../src/routes/contact-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/register', userRoute);
app.use('/contacts', contactsRoute);

module.exports = app;