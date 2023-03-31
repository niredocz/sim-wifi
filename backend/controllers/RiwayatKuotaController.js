const { RiwayatKuotaModel } = require("../models");
const Validator = require('fastest-validator');

const v = new Validator();

exports.get = async(req, res) => {
    const data = await RiwayatKuotaModel.findAll();

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
    const data = await RiwayatKuotaModel.findByPk(id);

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
    const data = await RiwayatKuotaModel.destroy({
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
        periode_id: 'number|empty:false',
        tanggal: { type: 'string', pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ },
        kuota: 'number|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { periode_id, tanggal, kuota, } = req.body;

        const row = await RiwayatKuotaModel.create({
            periode_id: periode_id,
            tanggal: tanggal,
            kuota: kuota,
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
    let cek_data = await RiwayatKuotaModel.findOne({
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
        tanggal: { type: 'string', pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ },
        kuota: 'number|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { periode_id, tanggal, kuota, } = req.body;
        let objUpdate = {
            periode_id: periode_id,
            tanggal: tanggal,
            kuota: kuota,
        };

        await RiwayatKuotaModel.update(objUpdate, {
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