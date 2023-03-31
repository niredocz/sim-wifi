const { PeriodeModel } = require("../models");
const Validator = require('fastest-validator');

const v = new Validator();

exports.get = async(req, res) => {
    const data = await PeriodeModel.findAll();

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
    const data = await PeriodeModel.findByPk(id);

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
    const data = await PeriodeModel.destroy({
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
        bulan: 'number|empty:false',
        tahun: 'number|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { bulan, tahun } = req.body;

        const row = await PeriodeModel.create({
            bulan: bulan,
            tahun: tahun,
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
    let cek_data = await PeriodeModel.findOne({
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
        bulan: 'number|empty:false|optional',
        tahun: 'number|empty:false|optional',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { bulan, tahun } = req.body;
        let objUpdate = {
            bulan: bulan,
            tahun: tahun,
        };

        await PeriodeModel.update(objUpdate, {
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