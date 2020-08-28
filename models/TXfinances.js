module.exports = function (sequelize, DataTypes) {
    var StateFinances = sequelize.define('StateFinances', {

        year: DataTypes.INTEGER,
        totalRevenue: DataTypes.INTEGER,
        education: DataTypes.INTEGER,
        hospitalsHealth: DataTypes.INTEGER,
        highways: DataTypes.INTEGER,
        policeCorrections: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,


    })

    return StateFinances;
}