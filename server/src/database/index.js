const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const path = require('path');
const connection = new Sequelize(dbConfig);

module.exports = connection;