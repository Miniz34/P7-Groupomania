const DataTypes = require('sequelize');
const db = require('../config/database');

const Publication = db.define('publication', {
  content: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false,

})

module.exports = Publication