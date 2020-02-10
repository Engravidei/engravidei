module.exports = (sequelize, DataTypes) => {
  const tbl_users = sequelize.define('tbl_users', {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_user',
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'name',
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true,
      field: 'email',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password',
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'birth_date',
    },
    parturition_preview: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'parturition_preview',
    },
  });
  return tbl_users;
}