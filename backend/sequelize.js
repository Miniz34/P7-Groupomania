const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
require('dotenv').config();
const UserModel = require('./models/users')


//connection à la database (database, log, pw {dialect, host ...})
const sequelize = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mariadb",
  define: {
    freezeTableName: true,
  }
});




sequelize.authenticate().then(() => {
  console.log("conntecté")
}).catch((err) => {
  console.log("marche pas")
});

const User = UserModel(sequelize, Sequelize)

// modèle de table
// const User = sequelize.define('user', {
//   user_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   age: {
//     type: DataTypes.INTEGER,
//     defaultValue: 21
//   },
//   testNewTable: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true
//   }
// }, {
//   timestamps: false,

// })

// création de données
User.sync({ force: true })
  .then((data) => {
    console.log('user added');
  }).catch((err) => {
    console.log('erreur de création')
  });

// console.log(model.User);
// console.log(User);

// //Find all données
// User.findAll().then((data) => {
//   data.forEach((element) => {
//     console.log(element.toJSON());
//   });
// }).catch((err) => {
//   console.log("erreur");
// })