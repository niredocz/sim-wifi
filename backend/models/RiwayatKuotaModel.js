module.exports = (sequelize, DataTypes) => {
    const RiwayatKuotaModel = sequelize.define('RiwayatKuotaModel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        periode_id: {
            type: DataTypes.INTEGER,
        },
        tanggal: {
            type: DataTypes.DATE,
        },
        kuota: {
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
        tableName: 'riwayat_kuota',
        sequelize,
        paranoid: true, // enable soft delete
        timestamps: true, // enable timestamps
        freezeTableName: true // disable auto-pluralization
    });

    return RiwayatKuotaModel;
}