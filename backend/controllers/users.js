const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
require('dotenv').config();
const UserModel = require('../models/users')
const jwt = require('jsonwebtoken');

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



//Contrôleur création de compte
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10) //On utilise Bcrypt pour le mot de passe, l'algorithme fera 10 tours
    .then(hash => {
      User.create({ //création de l'utilisateur
        username: req.body.username,  //on passe l'email crypté via crypto-JS
        password: hash // on passe le mot de passe hashé via Bcrypt
      })
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ message: "test1" }));
    })
    .catch(error => res.status(500).json({ message: "test2" }));


};



//Contrôleur connexion à un compte existant
exports.login = (req, res, next) => {
  User.findOne({ where: { username: req.body.username } }) //On cherche l'utilisateur dans la base de données cryptée
    .then(myUser => {
      if (!myUser) { return res.status(401).json({ error: 'Utilisateur non trouvé.' }); }
      bcrypt.compare(req.body.password, myUser.password) //On compare le PW pour vérifier qu'ils ont les mêmes string d'origine
        .then(valid => {
          if (!valid) { return res.status(401).json({ error: 'Mot de passe incorrect.' }); } //Si les mots de passe ne concordent pas, on renvoit une erreur
          // const newToken = jwt.sign({ userId: myUser._id }, process.env.TOKEN_KEY, { expiresIn: '24h' }); //Création d'un token d'authentification
          // res.setHeader('Authorization', 'Bearer ' + newToken);
          res.status(200).json({
            //Renvoi du token au frontend (à refaire)
            myUser
          });

        })
        .catch(error => res.status(500).json({ message: "Mot de passe incorrect" }));
    })
    .catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
};

//Contrôleur de suppression de compte
exports.deleteUser = (req, res, next) => {
  User.findOne({ where: { username: req.body.username } })
    .then(user => {
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (valid) {
            User.destroy({ where: { username: user.username } })
            res.status(200).json({ message: "Utilisateur supprimé" })
          }
          else {
            res.status(401).json({ message: "unauthorized" })
          }
        })
    }).catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }))
}









// User.update({ username: "Vieillot" }, { where: { age: { [Op.gt]: 35 } } })
//   .then((data) => {
//     console.log("bonjours")
//   }).catch((err) => {
//     console.log("erreur");
//   })


// ////////////Delete queries

// User.destroy({ where: { age: 47 } })




////////////Test création user 1.0
// module.exports.signup = async (req, res) => {
//   console.log(req.body)
//   const { username, password, admin } = req.body
//   try {
//     const user = User.create({ username, password, admin });
//     res.status(201);
//   } catch (err) {
//     res.status(200).send({ err });
//   }
// }

// module.exports.getusers(req, res) => {

//////test route get all
module.exports.getusers = (req, res) => {
  User.findAll().then((data) => {
    res.status(200).json({ data })
  })
    .catch((err) => {
      console.log("erreur");
    })
}