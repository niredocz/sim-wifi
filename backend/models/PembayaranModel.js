module.exports = (sequelize, DataTypes) => {
    const PembayaranModel = sequelize.define('PembayaranModel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        periode_id: {
            type: DataTypes.INTEGER,
        },
        member_id: {
            type: DataTypes.INTEGER,
        },
        tanggal: {
            type: DataTypes.DATE,
        },
        bayar: {
            type: DataTypes.INTEGER,
        },
        bukti: {
            type: DataTypes.STRING,
        },
        catatan: {
            type: DataTypes.STRING,
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
        tableName: 'pembayaran',
        sequelize,
        paranoid: true, // enable soft delete
        timestamps: true, // enable timestamps
        freezeTableName: true // disable auto-pluralization
    });

    return PembayaranModel;
}