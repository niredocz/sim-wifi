const { UserModel } = require("../models");
const jwt = require('jsonwebtoken');

exports.refresh = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await UserModel.findOne({
            where: {
                refresh_token: refreshToken,
            }
        });
        if (!user) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const { id, username, nama } = user.toJSON();
            const accessToken = jwt.sign({ id, username, nama }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_ACCESS_EXP,
            });
            return res.json({
                msg: "refresh token",
                accessToken: accessToken,
            })
        })
    } catch (error) {
        res.sendStatus(500);
    }
}