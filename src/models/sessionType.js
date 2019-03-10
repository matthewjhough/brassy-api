module.exports = (sequelize, DataTypes) => {
    const SessionType = sequelize.define('sessionType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    }
    );

    return SessionType;
};