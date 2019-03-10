
module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('session', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
    );

    Session.associate = (models) => {
        Session.belongsToMany(models.user, { through: 'session' });
        Session.hasMany(models.message);
        Session.hasOne(models.status);
        Session.hasOne(models.sessionType);
    };

    return Session;
};