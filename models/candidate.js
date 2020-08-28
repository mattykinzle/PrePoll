module.exports = function (sequelize, DataTypes) {

  const Candidate = sequelize.define('Candidate', {
    candidate: DataTypes.STRING,
    email: DataTypes.STRING,
    party: DataTypes.STRING,
    city: DataTypes.STRING,
    occupation: DataTypes.STRING,
    isIncumbent: DataTypes.STRING,
  },
    {
      timestamps: false
    });

  //Associations
  Candidate.associate = function (models) {
    Candidate.belongsTo(models.Election);
  };
  return Candidate;
}