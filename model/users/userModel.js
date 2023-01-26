const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email Address"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
  },
  phone: {
    type: Number,
    required: [true, "Please Enter Your Phone"],
  },
  address: {
    type: String,
    required: [true, "Please Enter Your Address"],
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
