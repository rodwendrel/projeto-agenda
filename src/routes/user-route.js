'use strict';

const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

router.put('/:id', (req, res, next) => { 

  });
  
 router.delete ('/', (req, res, next) => {
    
  }); 

  module.exports = router;