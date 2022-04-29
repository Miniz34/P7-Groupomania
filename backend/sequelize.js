const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
require('dotenv').config();
const db = {}

const UserModel = require('./models/users')
const CommentModel = require('./models/comment')
const MessageModel = require('./models/message')


//connection à la database (database, log, pw {dialect, host ...})

const sequelize = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mariadb",
  define: {
    freezeTableName: true,
  }
});

db.sequelize = sequelize
db.Sequelize = Sequelize


sequelize.authenticate().then(() => {
  console.log("conntecté")
}).catch((err) => {
  console.log("marche pas")
});

const User = UserModel(sequelize, Sequelize)
const Comment = CommentModel(sequelize, Sequelize)
const Message = MessageModel(sequelize, Sequelize)



// création de données
User.sync({ alter: true }).then((data) => {
  return User.create({
    username: "test6",
    password: "aaa",
    admin: true,
  });
});

Comment.sync({ alter: true }).then((data) => {
  return Comment.create({
    comment: "test de commentaire 1"
  });
});


Message.sync({ alter: true }).then((data) => {
  return Message.create({
    message: "test de message 1"
  });
});

