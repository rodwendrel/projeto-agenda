'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', controller.get);

module.exports = router;