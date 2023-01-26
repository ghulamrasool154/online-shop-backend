const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin/adminController");
router.post(
  "/adminLogin",
  adminController.profileUpload,
  adminController.adminLoginCreate
);
router.get("/adminLogin", adminController.adminLoginRead);
router.post("/validation", adminController.adminValidation);

module.exports = router;
