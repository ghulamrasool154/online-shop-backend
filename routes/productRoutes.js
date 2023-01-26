const express = require("express");
const router = express.Router();
const controller = require("../controllers/product/productController");
router.post("/addProduct", controller.uploadFiles, controller.addProduct);
router.get("/products", controller.readProduct);
router.get("/upateProduct/:id", controller.upateProduct);
router.put(
  "/upateProduct/:id",
  controller.uploadFiles,
  controller.upateProducts
);
router.delete("/deleteProduct/:id", controller.deletProduct);
module.exports = router;
