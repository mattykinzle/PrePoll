module.exports = function (sequelize, DataTypes) {

  const ElectionData = sequelize.define('ElectionData', {
    election: DataTypes.STRING,
    officeType: DataTypes.STRING,
    candidate: DataTypes.STRING,
    county: DataTypes.STRING,
    email: DataTypes.STRING,
    party: DataTypes.STRING,
    city: DataTypes.STRING,
    occupation: DataTypes.STRING,
    isIncumbent: DataTypes.STRING,

  },
    {
      timestamps: false
    });
  return ElectionData;
}

