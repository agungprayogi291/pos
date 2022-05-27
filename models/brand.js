'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define('brand', {
    id:{
     type:DataTypes.INTEGER,
     autoIncrement: true,
        primaryKey: true
    },
     name: DataTypes.STRING
   }, {
  tableName:"brands"
   });
  return brand;
};