module.exports = (sequelize, DataTypes) => {
  const tbl_care_unit = sequelize.define('tbl_care_unit', {
    id_care_unit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
     },
     fk_id_type_care_unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_type_care_unit',
        key: 'id_type_care_unit',
      },
    },
     name: {
       type: DataTypes.STRING(50),
       allowNull: false,
       unique: true,
     },
     address: {
       type: DataTypes.STRING(80),
       allowNull: false,
     },
  });
  return tbl_care_unit;
}