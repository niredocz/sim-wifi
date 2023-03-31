module.exports = (sequelize, DataTypes) => {
    const MemberModel = sequelize.define('MemberModel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
        },
        alamat: {
            type: DataTypes.STRING,
        },
        no_hp: {
            type: DataTypes.STRING,
        },
        tanggal_gabung: {
            type: DataTypes.DATEONLY,
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
        tableName: 'member',
        sequelize,
        paranoid: true, // enable soft delete
        timestamps: true, // enable timestamps
        freezeTableName: true // disable auto-pluralization
    });

    return MemberModel;
}