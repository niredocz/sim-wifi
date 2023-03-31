const { UserController } = require("../controllers");
var { VerifyToken } = require('../middleware');

var express = require('express');
var router = express.Router();

router.get('/', VerifyToken.verify, UserController.getUsers);
router.get('/:id', VerifyToken.verify, UserController.getUsersDetail);
router.post('/', UserController.insertUser);
router.delete('/:id', VerifyToken.verify, UserController.deleteUser);
router.put('/:id', VerifyToken.verify, UserController.updateUser);


module.exports = router;