const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const User = require('../models/users')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken');
const { json } = require("sequelize");
const multer = require('multer')
const path = require('path');
const Publication = require("../models/publication");
const fs = require('fs');

//Contrôleur création de compte
exports.signup = (req, res, next) => {

  bcrypt.hash(req.body.password, 10) //On utilise Bcrypt pour le mot de passe, l'algorithme fera 10 tours
    .then(hash => {
      User.findOne({ where: { email: req.body.email } })
        .then(CheckUser => {
          if (!CheckUser) {

            const newUser = User.create({ //création de l'utilisateur
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: hash, // on passe le mot de passe hashé via Bcrypt
              // avatar: attachmentURL
            })
              .then(newUser => res.status(201).json({ message: "Utilisateur créé" }))
            // .catch(error => res.status(400).json({ hash }));
            console.log(newUser);
          } else {
            res.status(400).json({ message: "Email existe déjà" })
          }
        })

    })
    .catch(error => res.status(500).json({ message: "erreur2" }));


};


//Contrôleur connexion à un compte existant
exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } }) //On cherche l'utilisateur dans la base de données cryptée
    .then(myUser => {
      if (!myUser) { return res.status(401).json({ error: 'Utilisateur non trouvé.' }); }
      bcrypt.compare(req.body.password, myUser.password) //On compare le PW pour vérifier qu'ils ont les mêmes string d'origine
        .then(valid => {
          if (!valid) { return res.status(401).json({ error: 'Mot de passe incorrect.' }); } //Si les mots de passe ne concordent pas, on renvoit une erreur
          const newToken = jwt.sign({ userId: myUser.id, admin: myUser.admin }, process.env.TOKEN_KEY, { expiresIn: '24h' }); //Création d'un token d'authentification
          res.setHeader('Authorization', 'Bearer ' + newToken);
          res.status(200).json({
            id: myUser.id,
            newToken,
            isAdmin: myUser.admin
          });

        })
        .catch(error => res.status(500).json({ message: "Mot de passe incorrect" }));
    })
    .catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
};


exports.getOneUser = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id },
    include: [{
      model: Comment,
      // where: { userId: req.params.id }
    },
    {
      model: Publication,
      // where: { userId: req.params.id }
    }],
    attributes: ['id', 'firstname', 'lastname', 'admin', 'createdAt', 'avatar'],

  })
    .then((data) => {
      res.status(200).json({ data })
    })
}

//Contrôleur de suppression de compte


module.exports.getusers = (req, res) => {
  User.findAll({
    attributes: ['id', 'firstname', 'lastname', 'admin', 'avatar']
  }).then((data) => {
    res.status(200).json({ data })
  })
    .catch((err) => {
      console.log("erreur");
    })
}


// Delete User 2.0 avec vérification du token et status admin
exports.deleteUser = (req, res, next) => {


  // if (user.admin == true || user.id == req.token.userId) {
  User.findOne({
    where: { id: req.params.id }
  }).then((user) => {
    if (req.token.userId == req.params.id || req.token.admin) {

      const filename = user.avatar.split('/images/')[1];
      if (filename == "avatardefault.png") {
        User.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: "Utilisateur supprimé" })
      } else {
        fs.unlink(`images/${filename}`, () => {
          User.destroy({ where: { id: req.params.id } })
          res.status(200).json({ message: "Utilisateur supprimé" })
        })
      }
    } else {
      res.status(401).json({ message: "unauthorized" })
    }
  })
}


///Ajout de vérification du token et status admin
exports.modifyUser = (req, res, next) => {


  let repeatNewPwd = req.body.repeatNewPwd

  if (req.token.userId == req.params.id || req.token.admin) {

    bcrypt.hash(repeatNewPwd, 10, function (err, bcryptrepeatNewPwd) {
      User.update({
        // username: req.body.username,
        password: bcryptrepeatNewPwd
      },
        { where: { id: req.params.id } }
      ).then(res.status(200).json({ message: "Mot de passe modifié" }))
    })

  } else {
    res.status(401).json({ message: "Utilisateur non autorisé" })
  }
  //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}



exports.modifyAvatar = (req, res, next) => {
  User.findOne({
    where: { id: req.params.id }
  }).then(user => {
    console.log(user.avatar)


    if (req.token.userId == req.params.id || req.token.admin) {



      const filename = user.avatar.split('/images/')[1];
      console.log(filename)
      if (filename == "avatardefault.png") {
        User.update({
          avatar: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
        },
          { where: { id: req.params.id } }
        ).then(res.status(200).json({ message: "Avatar modifié" }))
        // .catch(res.status(400).json({ message: "erreur" }))
        return;
      } else {
        fs.unlink(`images/${filename}`, () => {
          User.update({
            avatar: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
          },
            { where: { id: req.params.id } }
          ).then(res.status(200).json({ message: "Avatar modifié" }))
          // .catch(res.status(400).json({ message: "erreur" }))
          return;
        })
      }
    }
  })
}

















// avatardefault.png




// exports.modifyUser = (req, res, next) => {
//   User.findOne({
//     attributes: ['id', 'username', 'admin'],
//     where: { id: req.params.id }
//   }).then(user => {

//     let repeatNewPwd = req.body.repeatNewPwd
//     if (user.id) {
//       bcrypt.hash(repeatNewPwd, 10, function (err, bcryptrepeatNewPwd) {
//         User.update({
//           // username: req.body.username,
//           password: bcryptrepeatNewPwd
//         },
//           { where: { id: user.id } }
//         ).then(res.status(200).json({ message: "Mot de passe modifié" }))
//       })

//     } else {
//       res.status(401).json({ message: "unauthorized" })
//     }
//   })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
// }




// exports.deleteUser = (req, res, next) => {
//   let test = req.token.userId
//   let test2 = req.params.id
//   let admin = req.token.admin
//   User.findOne({
//     attributes: ['id', 'username', 'admin'],
//     where: { id: req.params.id }
//   })
//     .then(user => {
//       // if (user.admin == true || user.id == req.token.userId) {
//       if (true) {
//         User.destroy({ where: { id: user.id } })
//         res.status(200).json({ message: "Utilisateur supprimé" })
//       } else {
//         res.status(401).json({ message: "unauthorized" })
//       }
//     }
//     )
// }