const router = require("express").Router();
const Comment = require('../controllers/comment');

router.post("/", Comment.createComment)
router.get("/:id", Comment.getComment)
router.delete('/:id', Comment.deleteComment)
router.put('/:id', Comment.modifyComment)


module.exports = router;
