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

exports.upload = multer({ limits: 10000, storage: diskStorage, fileFilter: fileFilter });

exports.kompress = function(req, res, next) {

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