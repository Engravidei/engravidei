module.exports = (sequelize, DataTypes) => { 
    const tbl_feedback_opnion = sequelize.define('tbl_feedback_opnion', { 
        id_feedback_opnion: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
          },
    });
    return tbl_feedback_opnion;
}