module.exports = function (sequelize, DataTypes) {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Association
  Article.associate = function (models) {
    Article.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Article;
};
