module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('session', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sessionTypeId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
    );

    Session.associate = (models) => {
        Session.belongsToMany(models.user, { through: 'userId' });
        Session.hasMany(models.message);
        Session.belongsTo(models.sessionType);
    };

    return Session;
};