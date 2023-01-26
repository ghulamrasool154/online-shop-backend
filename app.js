const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const productRoute = require("./routes/productRoutes");
const adminRoute = require("./routes/adminLogin");
const userRoures = require("./routes/usersRoutes");
require("./config/config");
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
//  product route
app.use("/", productRoute);
//  admin route
app.use("/admin", adminRoute);
app.use("/user", userRoures);

app.listen(9090, () => {
  console.log("server is running on this port");
});
