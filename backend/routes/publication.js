const router = require("express").Router();
const Publication = require('../controllers/publication');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

router.post("/", auth, multer, Publication.createPublication)

router.delete("/:id", auth, multer, Publication.deletePublication);


router.put('/:id', auth, multer, Publication.modifyPublication);

router.get('/', auth, multer, Publication.getAllPublication);
router.get("/:id", multer, Publication.getPublication)
router.get('/user/:id', auth, multer, Publication.getAllPublicationUser);
router.get('/modify/:id', auth, multer, Publication.getPublication)


module.exports = router;
