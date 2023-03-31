'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('role', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nm_role: {
                type: Sequelize.STRING,
                unique: true,
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
        await queryInterface.dropTable('role');
    }
};