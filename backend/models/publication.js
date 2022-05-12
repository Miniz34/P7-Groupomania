const DataTypes = require('sequelize');
const db = require('../config/database');

const Publication = db.define('publication', {
  title: {
    type: DataTypes.TEXT,

  },
  content: {
    type: DataTypes.TEXT,
  },
}, {
  freezeTableName: true,
})

module.exports = Publication