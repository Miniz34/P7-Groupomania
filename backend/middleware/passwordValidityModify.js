const passwordSchema = require('../models/password');

//Validation du mot de passe en suivant le modèle configuré via password-validator

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.repeatNewPwd)) { //Si le mot de passe n'est pas valide
    res.writeHead(400, '{"au moins 3 caractères : 1 majuscule, 1 minuscule, 1 chiffre GTGTGTGTGTGTGTGT"}', {
      'content-type': 'application/json'
    });
    res.end('Format de mot de passe incorrect');
  } else {
    next();
  }
};

