const bcrypt = require("bcrypt");

// const user = require('../models/users'); //Import du modèle User créé via Mongoose

const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
require('dotenv').config();
const UserModel = require('../models/users')

const sequelize = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mariadb",
  define: {
    freezeTableName: true,
  }
});


// let jwt = require("jsonwebtoken");
// const CryptoJS = require('crypto-js');
// require('dotenv').config();

// const key = CryptoJS.enc.Hex.parse(`${process.env.AES_KEY}`);
// const iv = CryptoJS.enc.Hex.parse(`${process.env.AES_INIT_VECTOR}`);


const User = UserModel(sequelize, Sequelize)

// Création d'un utilisateur

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10) //On utilise Bcrypt pour le mot de passe, l'algorithme fera 10 tours
    .then(hash => {
      const newUser = new user({ //création de l'utilisateur
        email: req.body.email,
        password: hash // on passe le mot de passe hashé via Bcrypt
      });
      User.create({
        username: "test3",
        password: "aaa",
        age: 30,
      })
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));


};


// User.sync({ alter: true }).then((data) => {
//   // const user = User.build({ username: "Karim", password: "123", age: 25, testNewTable: true });
//   // return user.save();
//   return User.create({
//     username: "test2",
//     password: "aaa",
//     age: 30,
//   });
// })

