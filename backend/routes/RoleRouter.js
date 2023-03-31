const { RoleController } = require("../controllers");
var { VerifyToken } = require('../middleware');

var express = require('express');
var router = express.Router();

router.get('/', VerifyToken.verify, RoleController.get);
router.get('/:id', VerifyToken.verify, RoleController.detail);
router.post('/', VerifyToken.verify, RoleController.insert);
router.delete('/:id', VerifyToken.verify, RoleController.delete);
router.put('/:id', VerifyToken.verify, RoleController.update);

module.exports = router;