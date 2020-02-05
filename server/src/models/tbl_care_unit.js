const { Model,DataType } = require('sequelize');

class tbl_care_unit extends Model {
    static init(sequelize){
        super.init({
            id_care_unit: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
               },
               name: {
                 type: DataType.STRING,
                 allowNull: false,
                 unique: true,
               },
               address: {
                 type: DataType.STRING,
                 allowNull: false,
               },
        }, {sequelize});
    }
}

module.exports = tbl_care_unit;