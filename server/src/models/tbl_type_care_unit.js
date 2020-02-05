module.exports = (sequelize, DataTypes) => {
  const tbl_type_care_unit = sequelize.define('tbl_type_care_unit', {
    id_type_care_unit: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name_type_unit: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    fk_id_care_unit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tbl_care_unit',
        key: 'id_care_unit',
      },
    },
  });
  return tbl_type_care_unit;
}