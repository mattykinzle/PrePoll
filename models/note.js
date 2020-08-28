module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define('Note', {
    noteText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    candidateId: {
      type: DataTypes.INTEGER
    }
  },
    {
      timestamps: false
    });

  // Associations
  Note.associate = function (models) {
    Note.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Note.belongsTo(models.Election, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Note;
};
