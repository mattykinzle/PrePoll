module.exports = function (sequelize, DataTypes) {
  const Article = sequelize.define('Article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publishedAt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
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
