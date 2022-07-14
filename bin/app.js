'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const index = require('../src/routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('../src/controllers/authController')(app);


// Métodos para o CRUD

const create = router.post('/', (req, res, next) => { //Create
  res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => { // Update
  const id = req.params.id;
  res.status(200).send({ 
    id: id, 
    item: req.body 
  });
});

const del = router.delete ('/', (req, res, next) => {
  res.status(200).send(req.body);
}); 

app.use('/', index);
app.use('/register', create);
app.use('/register', put);
app.use('/register', del);

module.exports = app;