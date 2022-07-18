'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const cors = require('cors');

//carrega os Models
const User = require('../src/models/user');
const Contact = require('../src/models/contacts');

//carrega as rotas
const indexRoute = require('../src/routes/index-route');
const userRoute = require('../src/routes/user-route');
const contactsRoute = require('../src/routes/contact-route');
const authRouter = require('../src/routes/auth-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());

app.use('/', indexRoute);
app.use('/register', userRoute);
app.use('/auth', userRoute)
app.use('/contacts', contactsRoute);
app.use('/authenticate', authRouter);


module.exports = app;