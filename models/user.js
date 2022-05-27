'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id:{
     type:DataTypes.INTEGER,
     autoIncrement: true,
        primaryKey: true
    },
     firstName: DataTypes.STRING,
     lastName :DataTypes.STRING,
     email :DataTypes.STRING
   }, {
  tableName:"Users"
   });
  return user;
};
