const router = require('express').Router();

const userRoutes = require('../modules/users/user.routes');
const channelRoutes = require('../modules/channels/channel.routes');
const groupRoutes = require('../modules/groups/group.routes');
const roomRoutes = require('../modules/rooms/room.routes');
const messageRoutes = require('../modules/messages/message.routes');
const sessionRoutes = require('../modules/sessions/session.routes');
const roleRoutes = require('../modules/roles/role.routes');
const userGroupRoutes = require('../modules/userGroups/userGroup.routes');

router.use('/users', userRoutes);
router.use('/channels', channelRoutes);
router.use('/groups', groupRoutes);
router.use('/rooms', roomRoutes);
router.use('/messages', messageRoutes);
router.use('/sessions', sessionRoutes);
router.use('/roles', roleRoutes);
router.use('/userGroups', userGroupRoutes);

module.exports = router;