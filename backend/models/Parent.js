// parent.js

const { DataTypes } = require('sequelize');
const {sequelize} = require('../Configuration/connectDb'); // Import your Sequelize instance

const Parent = sequelize.define("parent", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the association with the Child model
const Child = require('./Child');
Parent.hasOne(Child, { foreignKey: 'email' });

module.exports = Parent;
