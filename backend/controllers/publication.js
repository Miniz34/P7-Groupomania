const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const Publication = require('../models/publication')
const User = require('../models/users');
const { post } = require("../routes/comment");
const Comment = require('..//models/comment')
const fs = require('fs');




exports.createPublication = (req, res, next) => {
  // let attachmentURL = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  Publication.create({
    // include: [{ model: Comment }, { model: User, attributes: ['username'] }],
    title: req.body.title,
    content: req.body.content,
    userId: req.body.userId,

    image: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null



  })
    .then(res.status(200).json({ message: "Publication créée" }))
  // .catch(res.status(500).json({ message: "Veuillez insérer un message" })) //Ne fonctionne pas
}

exports.getPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id },
    include: [{ model: Comment, include: [{ model: User, attributes: ['firstname', 'lastname', 'email'] }] }, { model: User, attributes: ['firstname', 'lastname', 'email'] }]

  }).then(post => {
    res.status(200).json(post)
    let test = post.userId
    console.log(test);
  }).catch((error) => res.status(404).json({ message: "Publication introuvable" })); //Ne fonctionne pas


}

exports.getAllPublication = (req, res, next) => {
  Publication.findAll({
    include: [{ model: Comment }, { model: User, attributes: ['firstname', 'lastname', 'email'] }],
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
    const createur = post.userId
    const letoken = req.token.userId
    const admin = req.token.admin

    if (post.userId == req.token.userId || req.token.admin) {
      if (post.image) {
        const filename = post.image.split('/images/')[1];
        console.log("teseeeest", filename);

        fs.unlink(`images/${filename}`, () => {

          Publication.destroy({
            where: { id: post.id }

          }).then(res.status(200).json({ message: "Publication supprimée" }))
        })
      } else {
        Publication.destroy({
          where: { id: post.id }

        }).then(res.status(200).json({ message: "Publication supprimée" }))
      }
    } else {
      // res.status(401).json({ message: "Unauthorized" })
      res.status(401).json({ message: "unauthorized" })
    }
  })
}





exports.modifyPublication = (req, res, next) => {
  Publication.findOne({
    where: { id: req.params.id }
  }).then(post => {
    if (post.userId == req.token.userId || req.token.admin) {
      const newImg = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null

      console.log(post)

      try {
        const filename = post.image.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Publication.update({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId,
            image: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
          },
            {
              where: { id: post.id }

            }).then(res.status(200).json({ message: "Publication modifiée" }))
        })
      } catch {
        Publication.update({
          title: req.body.title,
          content: req.body.content,
          userId: req.body.userId,
          image: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
        },
          {
            where: { id: post.id }

          }).then(res.status(200).json({ message: "Publication modifiée" }))
      }

    }
  })     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
}




// exports.modifyPublication = (req, res, next) => {

//   if (req.token.userId = req.params.id) {
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

//     Publication.update({
//       title: req.body.title,
//       content: req.body.content,
//       userId: req.body.userId,
//       image: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
//     },
//       {
//         where: { id: req.params.id }

//       }).then(res.status(200).json({ message: "Publication modifiée" }))
//     //.catch(error => res.status(500).json({ message: "Utilisateur non trouvé" }));
//   } else {
//     res.status(401).json({ message: "userid invalide " })
//   }
// }

















// //Delete post 2.0 : à revoir avec le front
// exports.deletePublicationDeux = (req, res, next) => {
//   User.findOne({
//     attributes: ['id', 'username', 'admin'],
//     where: { id: req.params.id }
//   })
//     .then(user => {
//       if (user.id == req.token.userId) {
//         Publication.findOne({ where: { id: post.id } })
//         res.status(200).json({ message: "Utilisateur supprimé" })
//           .then((publication) => {
//             Publication.destroy({
//               where: { id: publication.id }
//             }).then(() => res.end)
//               .catch(err => res.status(500).json(err))
//           }
//           )
//       } else {
//         res.status(401).json({ message: "unauthorized" })
//       }
//     })
// }











