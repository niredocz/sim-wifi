module.exports = (sequelize, DataTypes) => {
    const PeriodeModel = sequelize.define('PeriodeModel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        bulan: {
            type: DataTypes.INTEGER,
        },
        tahun: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at',
        },
    }, {
        tableName: 'periode',
        sequelize,
        paranoid: true, // enable soft delete
        timestamps: true, // enable timestamps
        freezeTableName: true // disable auto-pluralization
    });

    return PeriodeModel;
}