const AdminModel = require("../../model/admin/adminModel");
const multer = require("multer");
exports.profileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "public/images");
    },
    filename: (req, file, callback) => {
      const uniqueId = Math.trunc(Math.random() * 1e15);
      callback(null, uniqueId + "___admin_____" + file.originalname);
    },
  }),
}).single("picture");
exports.adminLoginCreate = async (req, res) => {
  // console.log("http://localhost:9090/images/req.file.filename");

  try {
    const adminData = await AdminModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      address: req.body.address,
      picture: `http://localhost:9090/images/${req.file.filename}`,
    });
    res.send({
      message: "Admin",
      sucess: 1,
      adminData,
    });
  } catch (error) {
    res.send({
      message: error,
      sucess: 0,
    });
  }
};
exports.adminLoginRead = async (req, res) => {
  try {
    const adminData = await AdminModel.find();
    res.send({
      message: " Admin",
      totalAdmin: adminData.length,
      adminData,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

exports.adminValidation = async (req, res) => {
  try {
    const adminValidatin = await AdminModel.findOne({
      email: req.body.email,
    });
    if (adminValidatin) {
      if (adminValidatin.password === req.body.password) {
        res.send({
          message: 1,
          data: adminValidatin,
          response: "Successfully Login",
        });
      } else {
        res.send({
          message: 0,
          response: "Password does not match!",
        });
      }
    } else {
      res.send({
        message: 0,
        response: "Sorry Are You Not Registered",
      });
    }
  } catch (error) {
    res.send({
      error: error,
    });
  }
};
