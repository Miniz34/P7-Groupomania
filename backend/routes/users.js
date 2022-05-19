const router = require("express").Router();
const User = require('../controllers/users');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

router.post("/auth", multer, User.signup);
router.post("/login", multer, User.login);

router.get("/", User.getusers);
router.get("/:id", multer, User.getOneUser);

router.put("/:id", multer, User.modifyUser);
router.delete("/:id", User.deleteUser);
// router.get("/get/admin", User.findAdmin)


module.exports = router;
