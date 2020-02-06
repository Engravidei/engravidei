module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username:'root',
    password: 'gabriel123',
    database: 'ENGRAVIDEI',
    DEFINE: {
        timestamps: true,
        underscored: true,
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