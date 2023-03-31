module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('UserModel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        refresh_token: {
            type: DataTypes.TEXT,
        },
        nama: {
            type: DataTypes.STRING,
        },
        alamat: {
            type: DataTypes.TEXT,
        },
        no_hp: {
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
        tableName: 'users',
        sequelize,
        paranoid: true, // enable soft delete
        timestamps: true, // enable timestamps
        freezeTableName: true // disable auto-pluralization
    });

    return UserModel;
}