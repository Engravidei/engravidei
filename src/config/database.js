require('dotenv').config();

module.exports = {
    dialect: 'mysql',
    host: process.env.HOST,
    username:process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true,
    },
};

/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('ENGRAVIDEI', 'root', 'gabriel123', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log("Connect with database");
}).catch(function(erro) {
    console.log("Not connect with database");
})*/