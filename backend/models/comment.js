const DataTypes = require('sequelize');
const db = require('../config/database');

const Comment = db.define('comment', {
  commentaire: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false,

})

module.exports = Comment;
