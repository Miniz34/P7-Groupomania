const router = require("express").Router();
const Comment = require('../controllers/comment');

router.post("/newComment", Comment.createComment)
router.get("/:id", Comment.getComment)


module.exports = router;
