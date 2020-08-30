module.exports = function (sequelize, DataTypes) {
  const Choice = sequelize.define('Choice', {},
    {
      timestamps: false
    });

  // Associations
  Choice.associate = function (models) {
    Choice.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Choice.belongsTo(models.Election, {
      foreignKey: {
        allowNull: false,
      },
    });
    Choice.belongsTo(models.Candidate, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Choice;
};