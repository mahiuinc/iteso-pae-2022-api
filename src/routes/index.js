const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);

module.exports = router;