/* Other imports */
require("dotenv").config();
var cors = require("cors");

/* importing express */

const express = require("express");
const { startServer } = require("./utils/server_start");
const app = express();

/* Using Middleware */

app.use(cors);
app.use(express.json());

/* Listening to server */

app.listen(process.env.PORT || 3000, startServer());