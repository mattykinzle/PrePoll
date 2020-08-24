// Creating our Question model
module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    option1Text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    option1Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    option2Text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    option2Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    option3Text: {
      type: DataTypes.TEXT
    },
    option3Id: {
      type: DataTypes.INTEGER,
    },
    option4Text: {
      type: DataTypes.TEXT
    },
    option4Id: {
      type: DataTypes.INTEGER
    }
  });

  //Associations
  Question.associate = function (models) {
    Question.hasMany(models.Response);
  };
  return Question;
};
