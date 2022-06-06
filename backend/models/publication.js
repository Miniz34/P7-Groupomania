const DataTypes = require('sequelize');
const db = require('../config/database');

const Publication = db.define('publication', {
  title: {
    type: DataTypes.TEXT,

  },
  content: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING,
    default: " http://localhost:3000/images/icon.png"
  }
}, {
  freezeTableName: true,
})

module.exports = Publication