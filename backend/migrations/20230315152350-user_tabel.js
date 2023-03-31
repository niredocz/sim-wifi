'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            role_id: {
                type: Sequelize.INTEGER,
            },
            username: {
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
            },
            refresh_token: {
                type: Sequelize.TEXT,
            },
            nama: {
                type: Sequelize.STRING,
            },
            alamat: {
                type: Sequelize.STRING,
            },
            no_hp: {
                type: Sequelize.STRING,
            },
            created_at: {
                type: Sequelize.DATE,
            },
            updated_at: {
                type: Sequelize.DATE,
            },
            deleted_at: {
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};