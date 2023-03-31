require('dotenv').config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_DIALECT,
} = process.env;

module.exports = {
    "development": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "host": DB_HOST,
        "dialect": DB_DIALECT,
        "timezone": '+07:00',
    },
    "test": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "host": DB_HOST,
        "dialect": DB_DIALECT,
        "timezone": '+07:00',
    },
    "production": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_DATABASE,
        "host": DB_HOST,
        "dialect": DB_DIALECT,
        "timezone": '+07:00',
    }
}