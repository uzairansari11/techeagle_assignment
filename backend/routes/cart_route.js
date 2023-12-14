const express = require("express");
const {
  getCartProduct,
  addCartProduct,
  updateCartProduct,
  deleteCartProduct,
} = require("../controllers/cart_controller");
const { authenticate } = require("../middlewares/authenticate_middleware");
const { authorized } = require("../middlewares/authorized_middleware");

const cartRouter = express.Router();

cartRouter.get("/", authenticate,getCartProduct);
cartRouter.post("/", authenticate, authorized("customer"), addCartProduct);
cartRouter.patch(
  "/:id",
  authenticate,
  authorized("customer"),
  updateCartProduct
);
cartRouter.delete(
  "/:id",
  authenticate,
  authorized("customer"),
  deleteCartProduct
);

module.exports = { cartRouter };
