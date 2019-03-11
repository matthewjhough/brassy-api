
module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('message', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: true
    }
    );

    Message.associate = (models) => {
        Message.belongsTo(models.session);
        Message.belongsTo(models.user);
    };

    return Message;
};