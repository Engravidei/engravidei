module.exports = (sequelize, DataTypes) => {
  const tbl_care_unit = sequelize.define('tbl_care_unit', {
    id_care_unit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
     },
     name: {
       type: DataTypes.STRING,
       allowNull: false,
       unique: true,
     },
     address: {
       type: DataTypes.STRING,
       allowNull: false,
     },
  });
  return tbl_care_unit;
}