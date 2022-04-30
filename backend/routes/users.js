const router = require("express").Router();
const User = require('../controllers/users');

router.post("/auth", User.signup);
router.post("/login", User.login);
router.get("/get", User.getusers)
router.put("/:id", User.modifyUser)
router.delete("/:id", User.deleteUser);


module.exports = router;
