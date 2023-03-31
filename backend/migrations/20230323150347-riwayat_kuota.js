'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('riwayat_kuota', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            periode_id: {
                type: Sequelize.INTEGER,
            },
            tanggal: {
                type: Sequelize.DATE,
            },
            kuota: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('riwayat_kuota');
    }
};