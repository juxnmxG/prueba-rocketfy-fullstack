const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/All", productController.getProducts);
router.get("/:id", productController.getProductForId);
router.post("/create", productController.createProduct);
router.put("/edit/:id", productController.editProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
