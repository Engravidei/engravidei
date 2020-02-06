module.exports = (sequelize, DataTypes) => {
    const tbl_feedback = sequelize.define ('tbl_feedback', {
        id_feedback: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          fk_id_feedback_opnion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'tbl_feedback_opnion',
              key: 'id_feedback_opnion',
            },
          },
          fk_id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'tbl_users',
              key: 'id_user',
            },
          },
          description: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
          },
    });
    return tbl_feedback;
}