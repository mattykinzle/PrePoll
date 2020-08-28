module.exports = function (sequelize, DataTypes) {

  const Election = sequelize.define('Election', {
    office: DataTypes.STRING,
    officeType: DataTypes.STRING,
    county: DataTypes.STRING
  },
    {
      timestamps: false
    });


  //Associations
  Election.associate = function (models) {
    Election.hasMany(models.Candidate);
    Election.hasMany(models.Note);
    Election.belongsToMany(models.User, { through: 'User_Election' });
    Election.hasMany(models.User_Election);
  };
  return Election;
}






