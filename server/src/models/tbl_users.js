const { Model, DataTypes } = require('sequelize');

class tbl_users extends Model {
    static init(sequelize){
        super.init({
            id_user: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              name: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              email: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unique: true,
              },
              password: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              birth_date: {
                type: DataTypes.DATE,
                allowNull: false,
              },
              parturition_preview: {
                type: DataTypes.DATE,
                allowNull: true,
              },
        }, {sequelize});
    }
}

module.exports = tbl_users;