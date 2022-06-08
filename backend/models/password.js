const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

// Contraintes du mot de passe, pour le moment seulement 1 majuscule 1 minuscule et 1 chiffre pour le développement
passwordSchema
  .is().min(3)                                    // Longueur minimun : 3
  .has().uppercase()                              // Doit avoir au moins une majuscule
  .has().lowercase()                              // Doit avoir au moins une minuscule
  .has().digits()                                 // Doit avoir au moins un chiffre


module.exports = passwordSchema;