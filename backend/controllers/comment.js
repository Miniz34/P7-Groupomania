const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
require('dotenv').config();
const CommentModel = require('../models/comment')

const sequelize = new Sequelize(process.env.MDB_DB, process.env.MDB_LOG, process.env.MDB_PW, {
  dialect: "mariadb",
  define: {
    freezeTableName: true,
  }
});
const Comment = CommentModel(sequelize, Sequelize)


exports.createComment = (req, res, next) => {
  Comment.create({
    commentaire: req.body.commentaire
  })
    .then(res.status(200).json({ message: "Commentaire créée" }))
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}

exports.getComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }

  }).then(comment => {
    res.status(200).json(comment)
  }).catch((error) => res.status(404).json({ message: "Commentaire introuvable" })); //Ne fonctionne pas

}

exports.deleteComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Comment.destroy({
      where: { id: post.id }

    }).then(res.status(200).json({ message: "Commentaire supprimée" }))
  })
}

exports.modifyComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Comment.update({
      commentaire: req.body.content
    },
      {
        where: { id: post.id }

      }).then(res.status(200).json({ message: "Commentaire modifiée" }))
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}