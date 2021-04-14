const {Sequelize} = require('sequelize');
//Connecting to database
const sequelize = new Sequelize('mtpn','root','',{dialect:'mysql',host:'localhost',logging:false});

module.exports = sequelize;
