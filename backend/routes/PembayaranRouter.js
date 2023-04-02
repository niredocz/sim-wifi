const { PembayaranController } = require("../controllers");
var { VerifyToken } = require('../middleware');

var express = require('express');
var router = express.Router();

const multer = require("multer");
const path = require("path");
const sharp = require('sharp');

const diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads/original");
    },
    filename: function(req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const fileFilter = function(req, file, cb) {
    if (![
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/webp'
        ].includes(file.mimetype)) {
        cb(new Error('Jenis file tidak diizinkan!'), false);
    }
    cb(null, true)
};

const upload = multer({ limits: 10000, storage: diskStorage, fileFilter: fileFilter });

const kompress = function(req, res, next) {

    sharp(req.file.path)
        .jpeg({ quality: 30 })
        .toFile('public/uploads/compressed/' + req.file.filename, function(err, info) {
            if (err) {
                console.log(err);
                next();
            }
            next();
        });
}

router.get('/', VerifyToken.verify, PembayaranController.get);
router.get('/:id', VerifyToken.verify, PembayaranController.detail);
router.post('/', VerifyToken.verify, upload.single('bukti'), kompress, PembayaranController.insert);
router.delete('/:id', VerifyToken.verify, PembayaranController.delete);
router.put('/:id', VerifyToken.verify, PembayaranController.update);
router.put('/bukti/:id', VerifyToken.verify, upload.single('bukti'), kompress, PembayaranController.updateBukti);

module.exports = router;