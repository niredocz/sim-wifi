const { MemberModel } = require("../models");
const Validator = require('fastest-validator');

const v = new Validator();

exports.get = async(req, res) => {
    const data = await MemberModel.findAll();

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
    const data = await MemberModel.findByPk(id);

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
    const data = await MemberModel.destroy({
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
        nama: 'string|empty:false',
        alamat: 'string|empty:false',
        no_hp: { type: 'string', pattern: /^[0-9+]+$/ },
        tanggal_gabung: { type: 'string', pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ }
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { nama, alamat, no_hp, tanggal_gabung, } = req.body;

        const row = await MemberModel.create({
            nama: nama,
            alamat: alamat,
            no_hp: no_hp,
            tanggal_gabung: tanggal_gabung,
        });

        return res.json({
            message: 'data berhasil di simpan',
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
    let cek_data = await MemberModel.findOne({
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
        nama: 'string|empty:false|optional',
        alamat: 'string|empty:false|optional',
        no_hp: { type: 'string', pattern: /^[0-9+]+$/, optional: true },
        tanggal_gabung: { type: 'string', pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, optional: true }
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { nama, alamat, no_hp, tanggal_gabung, } = req.body;
        let objUpdate = {
            nama: nama,
            alamat: alamat,
            no_hp: no_hp,
            tanggal_gabung: tanggal_gabung,
        };

        await MemberModel.update(objUpdate, {
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