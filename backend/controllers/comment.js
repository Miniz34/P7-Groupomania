const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const Comment = require('../models/comment')
const Publication = require('../models/publication');
const User = require("../models/users");






exports.createComment = (req, res, next) => {


  Comment.create({


    publicationId: req.body.publicationId,
    userId: req.token.userId,
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
    include: { model: User, attributes: ['firstname', 'lastname'] },
  })
    .then(post => {
      res.status(200).json(post)
    }).catch((error) => res.status(400).json({ message: "test" }))
}

exports.getComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id },
    include: { model: User, attributes: ['firstname', 'lastname'] },


  }).then(comment => {
    res.status(200).json(comment)
  }).catch((error) => res.status(404).json({ message: "Commentaire introuvable" })); //Ne fonctionne pas

}

exports.deleteComment = (req, res, next) => {
  Comment.findOne({
    where: { id: req.params.id }
  }).then(comment => {
    if (comment.userId == req.token.userId || req.token.admin) {

      Comment.destroy({
        where: { id: comment.id }

      }).then(res.status(200).json({ message: "Commentaire supprimée" }))
    }
  })
}

exports.modifyComment = (req, res, next) => {
  const test = req.body.commentaire
  console.log(test)

  Comment.findOne({
    where: { id: req.params.id }
  }).then(comment => {
    if (comment.userId == req.token.userId || req.token.admin) {
      Comment.update({
        commentaire: req.body.commentaire
      },
        {
          where: { id: comment.id }
        }).then(res.status(200).json({ message: "Commentaire modifié" }))
        .then((data) => {
          console.log(test)
        })
    }

  })

}
