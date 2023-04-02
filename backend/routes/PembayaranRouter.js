const { PembayaranController } = require("../controllers");
var { VerifyToken, UploadBukti } = require('../middleware');

var express = require('express');
var router = express.Router();

router.get('/', VerifyToken.verify, PembayaranController.get);
router.get('/:id', VerifyToken.verify, PembayaranController.detail);
router.post('/', VerifyToken.verify, UploadBukti.upload.single('bukti'), UploadBukti.kompress, PembayaranController.insert);
router.delete('/:id', VerifyToken.verify, PembayaranController.delete);
router.put('/:id', VerifyToken.verify, PembayaranController.update);
router.put('/bukti/:id', VerifyToken.verify, UploadBukti.upload.single('bukti'), UploadBukti.kompress, PembayaranController.updateBukti);

module.exports = router;