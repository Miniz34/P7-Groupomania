const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const Comment = require('../models/comment')
const Publication = require('../models/publication');
const User = require("../models/users");






exports.createComment = (req, res, next) => {


  Comment.create({


    include: { model: Publication },
    publicationId: req.body.publicationId,
    userId: req.body.userId,
    commentaire: req.body.commentaire
  })
    .then(res.status(200).json({ message: "commentaire créé" }))
    .then((data) => {
      console.log(data)
    })
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}



exports.getAllComments = (req, res, next) => {
  Comment.findAll({
    include: { model: User, attributes: ['username'] },
  })
    .then(post => {
      res.status(200).json(post)
    }).catch((error) => res.status(400).json({ message: "test" }))
}

exports.getComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id },
    include: { model: User, attributes: ['username'] },


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
      commentaire: req.body.commentaire
    },
      {
        where: { id: post.id }

      }).then(res.status(200).json({ message: "Commentaire modifiée" }))
  })     ///.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}