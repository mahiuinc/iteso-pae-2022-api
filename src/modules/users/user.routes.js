const router = require('express').Router();
const controller = require('./users.controller');

router.get('/', controller.getAll);

module.exports = router;

