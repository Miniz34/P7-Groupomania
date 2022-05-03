const User = require('../models/users')
const Comment = require('../models/comment')
const Publication = require('../models/publication');
// const { init } = require("../app");


// const Initialisation = async () => {
//   Comment.belongsTo(User);
//   Publication.hasMany(Comment);
//   Publication.belongsTo(User);

//   await User.sync({ alter: true });
//   await Comment.sync({ alter: true });
//   await Publication.sync({ alter: true });
// }

// Init forcé
const Initialisation = async () => {

  // Publication.hasMany(Comment);
  // Publication.belongsTo(User);
  // Comment.belongsTo(User);
  await User.sync({ force: true });
  await Comment.sync({ force: true });
  await Publication.sync({ force: true });
}



module.exports = Initialisation;


// création de données
// User.sync({ alter: true }).then((data) => {
//   return User.create({
//     username: "test6",
//     password: "aaa",
//     admin: true,
//   });
// });

// Comment.sync({ alter: true }).then((data) => {
//   return Comment.create({
//     commentaire: "test de commentaire 1"
//   });
// });


// Publication.sync({ alter: true }).then((data) => {
//   return Publication.create({
//     content: "test de publication"
//   });
// });

