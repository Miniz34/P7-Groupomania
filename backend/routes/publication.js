const router = require("express").Router();
const Publication = require('../controllers/publication');

router.post("/", Publication.createPublication)
router.get("/:id", Publication.getPublication)
router.delete("/:id", Publication.deletePublication);
router.put('/:id', Publication.modifyPublication)


module.exports = router;
