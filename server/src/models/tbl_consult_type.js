module.exports = (sequelize, DataTypes) => {
    const tbl_consult_type = sequelize.define('tbl_consult_type', {
      id_consult_type: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_consult_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    });
    return tbl_consult_type;
}