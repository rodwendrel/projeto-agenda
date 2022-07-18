const express = require('express');

const router = express.Router();

router.get = (req, res, next) => {
    res.send({ ok: true, user: req.userId });
}

module.exports = router;