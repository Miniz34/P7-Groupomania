const router = require("express").Router();
const Publication = require('../controllers/publication');
const auth = require('../middleware/auth')

router.post("/", Publication.createPublication)

router.delete("/:id", Publication.deletePublication);
router.put('/:id', Publication.modifyPublication);

router.get('/', auth, Publication.getAllPublication);
router.get("/:id", Publication.getPublication)
router.get('/user/:id', Publication.getAllPublicationUser);


module.exports = router;
