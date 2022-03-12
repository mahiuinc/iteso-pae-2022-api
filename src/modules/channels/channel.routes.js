const router = require('express').Router();
const ChannelsController = require('./channels.controller');

router.get('/', ChannelsController.getAll);
router.get('/:id', controller.getOne);

module.exports = router;
