const { RoleModel } = require("../models/");
const Validator = require('fastest-validator');

const v = new Validator();

exports.get = async(req, res) => {
    const data = await RoleModel.findAll();

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
    const data = await RoleModel.findByPk(id);

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
    const data = await RoleModel.destroy({
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
        nm_role: 'string|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { nm_role, } = req.body;

        const row = await RoleModel.create({
            nm_role: nm_role,
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
    let cek_data = await RoleModel.findOne({
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
        nm_role: 'string|empty:false|optional',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { nm_role } = req.body;
        let objUpdate = {
            nm_role: nm_role,
        };

        await RoleModel.update(objUpdate, {
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