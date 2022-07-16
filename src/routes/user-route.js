'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/users', controller.get);
router.post('/users', controller.post);
router.put('/users/:id', controller.put);
router.delete('/users/:id', controller.delete);

router.put('/:id', (req, res, next) => { 

  });
  
 router.delete ('/', (req, res, next) => {
    
  }); 

  module.exports = router;