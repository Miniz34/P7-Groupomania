const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
require('dotenv').config();
const PublicationModel = require('../models/publication')

const sequelize = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mariadb",
  define: {
    freezeTableName: true,
  }
});
const Publication = PublicationModel(sequelize, Sequelize)

exports.createPublication = (req, res, next) => {
  Publication.create({
    content: req.body.content
  })
    .then(res.status(200).json({ message: "Publication créée" }))
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}

exports.getPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }

  }).then(post => {
    res.status(200).json(post)
  }).catch((error) => res.status(404).json({ message: "Publication introuvable" })); //Ne fonctionne pas


}

exports.deletePublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Publication.destroy({
      where: { id: post.id }

    }).then(res.status(200).json({ message: "Publication supprimée" }))
  })
}

exports.modifyPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Publication.update({
      content: req.body.content
    },
      {
        where: { id: post.id }

      }).then(res.status(200).json({ message: "Publication modifiée" }))
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}