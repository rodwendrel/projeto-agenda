'use strict';

const express = require('express');
const { useContext } = require('react');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/', controller.get);
router.post('/', controller.post);
router.post('/auth', controller.auth)
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

router.put('/:id', (req, res, next) => {

});

router.delete('/', (req, res, next) => {

});

function Routes() {
    const [useData, setUserData] = useContext(userContext)
}

module.exports = router;