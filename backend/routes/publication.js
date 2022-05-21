const router = require("express").Router();
const Publication = require('../controllers/publication');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

router.post("/", multer, Publication.createPublication)

router.delete("/:id", multer, Publication.deletePublication);


router.put('/:id', multer, Publication.modifyPublication);

router.get('/', multer, Publication.getAllPublication);
router.get("/:id", multer, Publication.getPublication)
router.get('/user/:id', multer, Publication.getAllPublicationUser);
router.get('/modify/:id', multer, Publication.getPublication)


module.exports = router;
