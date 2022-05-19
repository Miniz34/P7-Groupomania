// modèle de table
const DataTypes = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {

  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    // defaultValue: 'https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg'
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