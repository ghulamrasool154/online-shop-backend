const express = require("express");
const router = express();
const userController = require("../controllers/users/usersController");
router.post("/userCreateAcc", userController.userCreateAccount);
router.get("/userCreateAcc", userController.userAccount);
router.post("/userLogin", userController.userLogin);
router.post("/userForgetFind", userController.userForgetFind);
router.post("/userUpdated", userController.userForgetUpdated);
module.exports = router;
