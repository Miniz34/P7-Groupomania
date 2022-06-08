const router = require("express").Router();
const User = require('../controllers/users');
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const limiter = require('../middleware/limit')
const verifyPassword = require('../middleware/passwordValidity');



router.post("/auth", verifyPassword, User.signup);
router.post("/login", limiter.maxAuth, multer, User.login);

router.get("/", User.getusers);
router.get("/:id", multer, User.getOneUser);

// router.get("/data/:id", multer, User.getUserData)

router.put("/modify/:id", auth, multer, User.modifyUser);
router.put("/modify/avatar/:id", auth, multer, User.modifyAvatar);
router.delete("/:id", auth, User.deleteUser);
// router.get("/get/admin", User.findAdmin)


module.exports = router;
