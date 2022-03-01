const router = require('express').Router();
const controller = require('./userGroups.controller');

router.get('/', controller.getAll);
router.post('/',controller.create);
router.put('/',controller.update);
router.delete('/',controller.delete);

module.exports = router;

