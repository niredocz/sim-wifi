require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

// app.use(async(req, res, next) => {
//     await new Promise(resolve => setTimeout(resolve, 1000)); //test delay
//     next();
// })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    credentials: true,
    // origin: 'http://192.168.1.4:3001'
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UsersRouter');
var roleRouter = require('./routes/RoleRouter');
var memberRouter = require('./routes/MemberRouter');
var periodeRouter = require('./routes/PeriodeRouter');
var riwayatKuotaRouter = require('./routes/RiwayatKuotaRouter');
var pembayaranRouter = require('./routes/PembayaranRouter');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/role', roleRouter);
app.use('/member', memberRouter);
app.use('/periode', periodeRouter);
app.use('/riwayat-kuota', riwayatKuotaRouter);
app.use('/pembayaran', pembayaranRouter);

module.exports = app;