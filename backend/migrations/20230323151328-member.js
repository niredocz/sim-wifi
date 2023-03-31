'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('member', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
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
            tanggal_gabung: {
                type: Sequelize.DATEONLY,
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
        await queryInterface.dropTable('member');
    }
};