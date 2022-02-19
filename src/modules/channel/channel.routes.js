const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);

module.exports = router;
