const { DataTypes } = require('sequelize');

const sequelize  = require('../utils/database');
//Define User Table 
const User = sequelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true         
    }
});

module.exports = User;