const { UserModel } = require("../models");
const Validator = require('fastest-validator');
const { fungsi } = require("../helper");
const jwt = require('jsonwebtoken');

const v = new Validator();

exports.getUsers = async(req, res) => {
    const data = await UserModel.findAll({
        attributes: ['id', 'role_id', 'nama', 'username', 'no_hp', 'alamat']
    });

    if (data.length) {
        res.json(data);
    } else {
        res.json({
            msg: "data masih kosong",
        });
    }
}

exports.getUsersDetail = async(req, res) => {
    const id = req.params.id;
    const data = await UserModel.findByPk(id);

    if (data) {
        res.json(data);
    } else {
        res.json({
            msg: "data masih kosong",
        });
    }
}

exports.deleteUser = async(req, res) => {
    const id = req.params.id;
    const data = await UserModel.destroy({
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

exports.insertUser = async(req, res) => {

    const schema = {
        role_id: 'number|integer|empty:false',
        username: 'string|empty:false',
        password: 'string|empty:false',
        passwordConfirm: 'string|empty:false',
        nama: 'string|empty:false',
        alamat: 'string|empty:false',
        no_hp: { type: 'string', pattern: /^[0-9+]+$/ },
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { role_id, username, password, passwordConfirm, nama, alamat, no_hp, } = req.body;

        if (password != passwordConfirm) {
            return res.status(400).json({
                msg: 'konfirmasi password tidak sesuai',
            })
        }

        const passwordhash = await fungsi.hashPassword(password, 10);

        const row = await UserModel.create({
            role_id: role_id,
            username: username,
            password: passwordhash,
            nama: nama,
            alamat: alamat,
            no_hp: no_hp,
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

exports.updateUser = async(req, res) => {
    const id = req.params.id;
    let cek_data = await UserModel.findOne({
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
        role_id: 'number|integer|empty:false|optional',
        username: 'string|empty:false|optional',
        password: 'string|empty:false|optional',
        passwordConfirm: 'string|empty:false|optional',
        nama: 'string|empty:false|optional',
        alamat: 'string|empty:false|optional',
        no_hp: { type: 'string', pattern: /^[0-9+]+$/, optional: true },
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { role_id, username, password, passwordConfirm, nama, alamat, no_hp, } = req.body;
        let objUpdate = {
            role_id: role_id,
            username: username,
            nama: nama,
            alamat: alamat,
            no_hp: no_hp,
        };

        if (password) {
            if (password != passwordConfirm) {
                return res.status(400).json({
                    msg: 'konfirmasi password tidak sesuai',
                })
            } else {
                const passwordhash = await fungsi.hashPassword(password, 10);
                objUpdate.password = passwordhash;
            }
        }

        await UserModel.update(objUpdate, {
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

exports.login = async(req, res) => {
    const schema = {
        username: 'string|empty:false',
        password: 'string|empty:false',
    }

    const check = v.compile(schema);
    let cek = await check(req.body);

    if (cek.length) {
        return res
            .status(400)
            .json(cek)
    }

    try {
        const { username, password } = req.body;

        let row = await UserModel.findOne({
            where: {
                username: username,
            }
        });

        if (row) {
            row = row.toJSON();
            const match = await fungsi.bcryptCompare(password, row.password);

            if (match) {
                let { id, username, nama } = row;
                const accessToken = jwt.sign({ id, username, nama }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: process.env.TOKEN_ACCESS_EXP,
                });
                const refreshToken = jwt.sign({ id, username, nama }, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: process.env.TOKEN_REFRESH_EXP,
                });

                await UserModel.update({
                    refresh_token: refreshToken,
                }, {
                    where: {
                        id: id,
                    }
                })
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                })
                return res.json({
                    msg: "Login berhasil",
                    accessToken: accessToken,
                })
            } else {
                return res
                    .status(400)
                    .json({
                        msg: "username dan password tidak sesuai",
                    })
            }
        } else {
            return res
                .status(400)
                .json({
                    msg: "username dan password tidak sesuai",
                })
        }
    } catch (err) {
        console.log(err);
        return res
            .status(400)
            .json({
                // msg: err.errors[0].message,
            })
    }
}

exports.logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await UserModel.findOne({
        where: {
            refresh_token: refreshToken,
        }
    });
    if (!user) return res.sendStatus(403);

    try {
        const { id } = user.toJSON();
        await UserModel.update({
            refresh_token: null,
        }, {
            where: {
                id: id,
            }
        })
        res.clearCookie('refreshToken');
        return res.sendStatus(200);

    } catch (err) {

        return res
            .status(400)
            .json({
                msg: err.errors[0].message,
            })
    }
}