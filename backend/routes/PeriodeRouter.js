const { PeriodeController } = require("../controllers");
var { VerifyToken } = require('../middleware');

var express = require('express');
var router = express.Router();

router.get('/', VerifyToken.verify, PeriodeController.get);
router.get('/:id', VerifyToken.verify, PeriodeController.detail);
router.post('/', VerifyToken.verify, PeriodeController.insert);
router.delete('/:id', VerifyToken.verify, PeriodeController.delete);
router.put('/:id', VerifyToken.verify, PeriodeController.update);

module.exports = router;