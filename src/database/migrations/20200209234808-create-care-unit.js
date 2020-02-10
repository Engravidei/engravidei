'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_care_unit', {
       id_care_unit: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
       },
       fk_id_type_care_unit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_type_care_unit',
          key: 'id_type_care_unit',
        },
      },
       name: {
         type: Sequelize.STRING(50),
         allowNull: false,
         unique: true,
       },
       address: {
         type: Sequelize.STRING(80),
         allowNull: false,
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_care_unit');
  }
};
