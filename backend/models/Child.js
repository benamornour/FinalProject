// child.js

const { DataTypes } = require('sequelize');
const {sequelize} = require('../Configuration/connectDb'); // Import your Sequelize instance

const Child = sequelize.define('child', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  learning: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


module.exports = Child;
