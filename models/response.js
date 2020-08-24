module.exports = function (sequelize, DataTypes) {
  var Response = sequelize.define('Response', {
    response: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Association
  Response.associate = function (models) {
    Response.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      },
    });
    Response.belongsTo(models.Question, {
      foreignKey: {
        allowNull: false
      }
    })
  };

  return Response;
};
