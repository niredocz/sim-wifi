const fs = require('fs');

const middlewares = {};

// Baca daftar file dalam folder `helper`
const files = fs.readdirSync(__dirname);

// Impor dan tambahkan setiap modul sebagai properti objek `middlewares`
files.forEach(file => {
    if (file !== 'index.js') {
        const middleware = require(`./${file}`);
        middlewares[file.replace('.js', '')] = middleware;
    }
});

// Eksport objek `middlewares`
module.exports = middlewares;