'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/contatcController');

router.get('/contacts', controller.get);
router.post('/contacts', controller.post);
router.put('/contacts/:id', controller.put);
router.delete('/contacts/:id', controller.delete);

router.put('/:id', (req, res, next) => { 

  });
  
 router.delete ('/', (req, res, next) => {
    
  }); 

  module.exports = router;