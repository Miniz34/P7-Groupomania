const router = require("express").Router();
const Comment = require('../controllers/comment');
const auth = require('../middleware/auth')


router.post("/", Comment.createComment)
router.get("/:id", Comment.getComment)
router.get("/", auth, Comment.getAllComments)
router.delete('/:id', auth, Comment.deleteComment)
router.put('/:id', auth, Comment.modifyComment)
router.get('/modify/:id', Comment.getComment)




module.exports = router;
