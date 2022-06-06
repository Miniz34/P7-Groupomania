// modèle de table
const DataTypes = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {


  firstname: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: "http://localhost:3000/images/avatardefault.png"
  },
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  freezeTableName: true,
})

module.exports = User;

// user_id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   autoIncrement: true
// },