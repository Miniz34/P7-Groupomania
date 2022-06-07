const User = require('../models/users')
const Comment = require('../models/comment')
const Publication = require('../models/publication')

const db = require('../config/database')

// const { init } = require("../app");


const Initialisation = async () => {

  Publication.hasMany(Comment);
  Comment.belongsTo(User, { onDelete: 'CASCADE' });
  Comment.belongsTo(Publication, { onDelete: 'CASCADE' });
  Publication.belongsTo(User, { onDelete: 'CASCADE' });
  User.hasMany(Publication)
  User.hasMany(Comment)

  await User.sync({ alter: true });
  await Publication.sync({ alter: true });
  await Comment.sync({ alter: true });



}

module.exports = Initialisation;
