const { RiwayatKuotaController } = require("../controllers");
var { VerifyToken } = require('../middleware');

var express = require('express');
var router = express.Router();

router.get('/', VerifyToken.verify, RiwayatKuotaController.get);
router.get('/:id', VerifyToken.verify, RiwayatKuotaController.detail);
router.post('/', VerifyToken.verify, RiwayatKuotaController.insert);
router.delete('/:id', VerifyToken.verify, RiwayatKuotaController.delete);
router.put('/:id', VerifyToken.verify, RiwayatKuotaController.update);

module.exports = router;