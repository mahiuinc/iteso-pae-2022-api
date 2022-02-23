const router = require('express').Router();

const userRoutes = require('./../modules/users/user.routes');
const channelRoutes = require('./../modules/channel/channel.routes');
const groupRoutes = require('./../modules/group/group.routes');
const roomRoutes = require('./../modules/room/room.routes');
const messageRoutes = require('./../modules/message/message.routes');
const sessionRoutes = require('./../modules/session/session.routes');
const roleRoutes = require('./../modules/role/role.routes');
const userGroupRoutes = require('./../modules/group/group.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/groups', groupRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);
router.use('/sessions', sessionRoutes);
router.use('/roles', roleRoutes);
router.use('/userGroups', userGroupRoutes);

module.exports = router;