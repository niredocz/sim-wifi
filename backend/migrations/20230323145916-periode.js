'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('periode', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            bulan: {
                type: Sequelize.INTEGER,
            },
            tahun: {
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
        await queryInterface.dropTable('periode');
    }
};