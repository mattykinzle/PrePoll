module.exports = function (sequelize, DataTypes) {

    var Censuscounties = sequelize.define('Censuscounties', {

        geoid: DataTypes.STRING,
        county: DataTypes.STRING,
        totalpopulation: DataTypes.INTEGER,
        totalpopulationme: DataTypes.INTEGER,
        totallaborforce: DataTypes.INTEGER,
        totallaborforcepme: DataTypes.DECIMAL,
        employed: DataTypes.INTEGER,
        employedpme: DataTypes.DECIMAL,
        unemployed: DataTypes.INTEGER,
        unemployedpme: DataTypes.DECIMAL,
        medianincome: DataTypes.INTEGER,
        medianincomeme: DataTypes.INTEGER,
        meanincome: DataTypes.INTEGER,
        meanincomeme: DataTypes.INTEGER,
        medianmaleincome: DataTypes.INTEGER,
        medianmaleincomeme: DataTypes.INTEGER,
        medianfemaleincome: DataTypes.INTEGER,
        medianfemaleincomeme: DataTypes.INTEGER,
        insured: DataTypes.INTEGER,
        insuredpme: DataTypes.DECIMAL,
        uninsured: DataTypes.INTEGER,
        uninsuredpme: DataTypes.DECIMAL,
        belowpovertyline: DataTypes.DECIMAL,
        belowpovertylinepme: DataTypes.DECIMAL,
        Agricultureforestryfishingandhuntingandmining: DataTypes.INTEGER,
        Construction: DataTypes.INTEGER,
        Manufacturing: DataTypes.INTEGER,
        Wholesaletrade: DataTypes.INTEGER,
        Retailtrade: DataTypes.INTEGER,
        Transportationandwarehousingandutilities: DataTypes.INTEGER,
        Information: DataTypes.INTEGER,
        Financeandinsuranceandrealestateandrentalandleasing: DataTypes.INTEGER,
        ScientificManagementAdministrativeWastemanagementservices: DataTypes.INTEGER,
        Educationalservicesandhealthcareandsocialassistance: DataTypes.INTEGER,
        Artsentertainmentandrecreationandaccommodationandfoodservices: DataTypes.INTEGER,
        Otherservicesexceptpublicadministration: DataTypes.INTEGER,
        Publicadministration: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,


    });


    return Censuscounties;
}