const { MemberController } = require("../controllers");
var { VerifyToken } = require('../middleware');

var express = require('express');
var router = express.Router();

router.get('/', VerifyToken.verify, MemberController.get);
router.get('/:id', VerifyToken.verify, MemberController.detail);
router.post('/', VerifyToken.verify, MemberController.insert);
router.delete('/:id', VerifyToken.verify, MemberController.delete);
router.put('/:id', VerifyToken.verify, MemberController.update);

module.exports = router;