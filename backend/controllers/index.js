const fs = require('fs');

const controllers = {};

// Baca daftar file dalam folder `controller`
const files = fs.readdirSync(__dirname);

// Impor dan tambahkan setiap modul sebagai properti objek `controllers`
files.forEach(file => {
    if (file !== 'index.js') {
        const controller = require(`./${file}`);
        controllers[file.replace('.js', '')] = controller;
    }
});

// Eksport objek `controllers`
module.exports = controllers;