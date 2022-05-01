const router = require("express").Router();
const Comment = require('../controllers/comment');
const Init = require('../models/initdb')

router.post("/", Comment.createComment)
router.get("/:id", Comment.getComment)
router.delete('/:id', Comment.deleteComment)
router.put('/:id', Comment.modifyComment)

console.log(Init)

module.exports = router;
