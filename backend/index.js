/* importing express */
require("dotenv").config();
var cors = require("cors");
const express = require("express");
const { startServer } = require("./utils/server_start");
const { userRouter } = require("./routes/user_route");
const { productRouter } = require("./routes/product_route");
const { cartRouter } = require("./routes/cart_route");
const app = express();

/* Using Middleware */

app.use(cors());
app.use(express.json());

/* Routes */

/*  Home route */
app.get("/", (req, res) => {
  console.log("enter res");
  res.send("Welcome to the home page!");
});

/* User Route */
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

/* Listening to server */

app.listen(process.env.PORT || 3000, startServer());
