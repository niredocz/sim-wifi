const bcrypt = require('bcrypt');

exports.hashPassword = async(password, saltRounds) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

exports.bcryptCompare = async(password, hash) => {
    try {
        const hasil = await bcrypt.compare(password, hash);
        return hasil;
    } catch (error) {
        console.log(error);
    }
}