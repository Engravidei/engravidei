module.exports = (sequelize, DataTypes) => {
  const tbl_type_care_unit = sequelize.define('tbl_type_care_unit', {
    id_type_care_unit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name_type_unit: {
      type: DataTypes.STRING(50),
      allowNull:false,
      unique: true,
    },
  });
  return tbl_type_care_unit;
}