const fs = require('fs');

const helpers = {};

// Baca daftar file dalam folder `helper`
const files = fs.readdirSync(__dirname);

// Impor dan tambahkan setiap modul sebagai properti objek `helpers`
files.forEach(file => {
    if (file !== 'index.js') {
        const helper = require(`./${file}`);
        helpers[file.replace('.js', '')] = helper;
    }
});

// Eksport objek `helpers`
module.exports = helpers;