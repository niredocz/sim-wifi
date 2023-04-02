const { PembayaranModel } = require("../models");
const Validator = require('fastest-validator');
const v = new Validator();

exports.get = async(req, res) => {
    const data = await PembayaranModel.findAll();

    if (data.length) {
        res.json(data);
    } else {
        res.json({
            msg: "data masih kosong",
        });
    }
}

exports.detail = async(req, res) => {
    const id = req.params.id;
    const data = await PembayaranModel.findByPk(id);

    if (data) {
        res.json(data);
    } else {
        res.json({
            msg: "data masih kosong",
        });
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    const data = await PembayaranModel.destroy({
        where: {
            id: id,
        }
    });

    if (data) {
        res.json({
            msg: 'data berhasil dihapus'
        });
    } else {
        res.json({
            msg: "data tidak ditemukan",
        });
    }
}

exports.insert = async(req, res) => {
    const schema = {
        periode_id: { type: 'string', pattern: /^[0-9+]+$/ },
        member_id: { type: 'string', pattern: /^[0-9+]+$/ },
        tanggal: { type: 'string', pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ },
        bayar: { type: 'string', pattern: /^[0-9+]+$/ },
        catatan: 'string|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        var bukti = req.file.path;
    } catch (error) {
        return res.status(400).json({
            msg: "No File is selected.",
        });
    }

    try {
        const { periode_id, member_id, tanggal, bayar, catatan } = req.body;

        const row = await PembayaranModel.create({
            periode_id: periode_id,
            member_id: member_id,
            tanggal: tanggal,
            bayar: bayar,
            catatan: catatan,
            bukti: bukti.replace(/^public\//, ''),
        });

        return res.json({
            msg: 'data berhasil di simpan',
            data: row,
        });
    } catch (err) {
        return res
            .status(400)
            .json({
                msg: err.errors[0].message,
            })
    }
}

exports.update = async(req, res) => {
    const id = req.params.id;
    let cek_data = await PembayaranModel.findOne({
        where: {
            id: id,
        }
    });

    if (!cek_data) {
        return res.status(400).json({
            msg: 'ID tidak ditemukan',
        })
    }

    const schema = {
        periode_id: 'number|empty:false',
        member_id: 'number|empty:false',
        tanggal: { type: 'string', pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ },
        bayar: 'number|empty:false',
        catatan: 'string|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { periode_id, member_id, tanggal, bayar, catatan } = req.body;
        let objUpdate = {
            periode_id: periode_id,
            member_id: member_id,
            tanggal: tanggal,
            bayar: bayar,
            catatan: catatan,
        };

        await PembayaranModel.update(objUpdate, {
            where: {
                id: id,
            }
        });

        return res.json({
            message: 'data berhasil di simpan',
        });
    } catch (err) {
        return res
            .status(400)
            .json({
                msg: err.errors[0].message,
            })
    }
}

exports.updateBukti = async(req, res) => {
    const id = req.params.id;
    try {
        var bukti = req.file.path;
    } catch (error) {
        return res.status(400).json({
            msg: "No File is selected.",
        });
    }

    try {
        const row = await PembayaranModel.update({
            bukti: bukti.replace(/^public\//, ''),
        }, {
            where: {
                id: id,
            }
        });

        return res.json({
            msg: 'data berhasil di simpan',
        });
    } catch (err) {
        return res
            .status(400)
            .json({
                msg: err.errors[0].message,
            })
    }
}