module.exports = function (sequelize, DataTypes) {
  const Note = sequelize.define('Note', {
    isChecked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    noteText: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  // Association
  Note.associate = function (models) {
    Note.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Note.belongsTo(models.Candidate, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Note;
};
