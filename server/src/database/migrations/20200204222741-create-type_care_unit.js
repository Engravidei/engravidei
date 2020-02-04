'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_type_care_unit', {     
      id_type_care_unit: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name_type_unit: {
        type: Sequelize.STRING(50),
        allowNull:false,
        unique: true,
      },
      fk_id_care_unit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbl_care_unit',
          key: 'id_care_unit',
        },
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
    return queryInterface.dropTable('tbl_type_care_unit');
  }
};
