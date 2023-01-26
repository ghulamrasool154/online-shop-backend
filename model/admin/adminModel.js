const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    required: [true, "admin email is required"],
    unique: true,
    type: String,
  },
  password: {
    required: [true, "admin password is required"],
    type: String,
  },
  phone: Number,
  address: String,
  picture: String,
  memberSince: {
    type: Date,
    default: new Date(),
  },
});
const AdminModel = mongoose.model("adminUsers", adminSchema);
module.exports = AdminModel;
