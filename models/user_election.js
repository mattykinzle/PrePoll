module.exports = function (sequelize, DataTypes) {

  const User_Election = sequelize.define('User_Election', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  },
    {
      timestamps: false
    });


  //Associations
  User_Election.associate = function (models) {
    User_Election.belongsTo(models.User);
    User_Election.belongsTo(models.Election);
  };

  return User_Election;
}