module.exports = (sequelize, DataTypes) => {
    const tbl_doctors = sequelize.define('tbl_doctors', {
        id_doctor: { 
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
          name: {
            type: DataTypes.STRING(50),
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });
    return tbl_doctors;
}