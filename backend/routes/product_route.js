const express = require("express");
const { getProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/product_controller");

const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.post("/", addProduct);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = { productRouter };
