const router = require("express").Router();
const User = require('../controllers/users');
const auth = require('../middleware/auth')

router.post("/auth", User.signup);
router.post("/login", User.login);

router.get("/", User.getusers);
router.get("/:id", User.getOneUser);

router.put("/:id", User.modifyUser);
router.delete("/:id", User.deleteUser);
// router.get("/get/admin", User.findAdmin)


module.exports = router;
