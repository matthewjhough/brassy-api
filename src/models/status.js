const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('status', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reaction_at: {
            type: Sequelize.DATE
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updated_at: {
            type: Sequelize.DATE
        },
        deleted_at: {
            type: Sequelize.DATE
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
    );

    // Status.associate = (models) => {
    //     Status.belongsToMany(models.user);
    //     Status.belongsToMany(models.message);
    // };

    return Status;
};