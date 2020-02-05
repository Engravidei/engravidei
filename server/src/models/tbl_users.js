module.exports = (sequelize, DataTypes) => {
  const tbl_users = sequelize.define('tbl_users', {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    parturition_preview: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  return tbl_users;
}