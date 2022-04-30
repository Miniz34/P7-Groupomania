const router = require("express").Router();
const User = require('../controllers/users');

router.post("/auth", User.signup);
router.post("/login", User.login);
router.get("/get", User.getusers)
router.delete("/delete", User.deleteUser);


module.exports = router;
