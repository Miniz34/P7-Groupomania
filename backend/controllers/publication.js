const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const Publication = require('../models/publication')
const User = require('../models/users');
const { post } = require("../routes/comment");
const Comment = require('..//models/comment')




exports.createPublication = (req, res, next) => {
  // let attachmentURL = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

  Publication.create({
    include: [{ model: Comment }, { model: User, attributes: ['username'] }],
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`


  })
    .then(res.status(200).json({ message: "Publication créée" }))
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}

exports.getPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id },
    include: [{ model: Comment, include: [{ model: User, attributes: ['username'] }] }, { model: User, attributes: ['username'] }]

  }).then(post => {
    res.status(200).json(post)
    let test = post.userId
    console.log(test);
  }).catch((error) => res.status(404).json({ message: "Publication introuvable" })); //Ne fonctionne pas


}

exports.getAllPublication = (req, res, next) => {
  Publication.findAll({
    include: [{ model: Comment }, { model: User, attributes: ['username'] }],
  })
    .then(post => {
      res.status(200).json(post)
    }).catch((error) => res.status(400).json({ message: "test" }))
}



///Premier test association
exports.getAllPublicationUser = (req, res, next) => {
  Publication.findAll({
    attributes: ["content", "userId"],
    where: { userId: 18 }
  })
    .then(post => {
      res.status(200).json(post)
      post.forEach((element) => {
        let userid = element.userId
        console.log(userid)
        User.findOne({
          attributes: ["username"],
          where: { id: userid }
        }).then(user => {
          let username = user.username
          console.log(username)
        })
      })

    })


}
//  const test = post
//  console.log(test)



// .catch((error) => res.status(400).json({ message: "test" }))



//Delete post 1.0
exports.deletePublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Publication.destroy({
      where: { id: post.id }

    }).then(res.status(200).json({ message: "Publication supprimée" }))
  })
}



//Delete post 2.0 : à revoir avec le front
exports.deletePublicationDeux = (req, res, next) => {
  User.findOne({
    attributes: ['id', 'username', 'admin'],
    where: { id: req.params.id }
  })
    .then(user => {
      if (user.id == req.token.userId) {
        Publication.findOne({ where: { id: post.id } })
        res.status(200).json({ message: "Utilisateur supprimé" })
          .then((publication) => {
            Publication.destroy({
              where: { id: publication.id }
            }).then(() => res.end)
              .catch(err => res.status(500).json(err))
          }
          )
      } else {
        res.status(401).json({ message: "unauthorized" })
      }
    })
}

exports.modifyPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    Publication.update({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
      image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    },
      {
        where: { id: post.id }

      }).then(res.status(200).json({ message: "Publication modifiée" }))
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}