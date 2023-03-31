'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pembayaran', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            periode_id: {
                type: Sequelize.INTEGER,
            },
            member_id: {
                type: Sequelize.INTEGER,
            },
            tanggal: {
                type: Sequelize.DATE,
            },
            bayar: {
                type: Sequelize.INTEGER,
            },
            bukti: {
                type: Sequelize.STRING,
            },
            catatan: {
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
        await queryInterface.dropTable('pembayaran');
    }
};