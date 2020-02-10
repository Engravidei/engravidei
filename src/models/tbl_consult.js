module.exports = (sequelize, DataTypes) => {
    const tbl_consult = sequelize.define('tbl_consult', {
      id_consult: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fk_id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_users',
          key: 'id_user',
        },
      },
      fk_id_care_unit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_care_unit',
          key: 'id_care_unit',
        },
      },
      fk_id_consult_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_consult_type',
          key: 'id_consult_type',
        },
      },
      doctor_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    });
    return tbl_consult;
}