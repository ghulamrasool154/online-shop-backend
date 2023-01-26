const UserModel = require("../../model/users/userModel");
exports.userCreateAccount = async (req, res) => {
  try {
    const findExistedEmail = await UserModel.findOne({
      email: req.body.uemail,
    });
    if (findExistedEmail) {
      res.send({
        mess: 3,
        message: "Your Email is already existed",
      });
    } else {
      const datta = await UserModel.create({
        name: req.body.uname,
        email: req.body.uemail,
        password: req.body.upassword,
        phone: req.body.uphone,
        address: req.body.uaddress,
      });
      res.send({
        mess: 1,
        message: "Success",
        datta,
      });
    }
  } catch (error) {
    res.send({
      mess: 0,

      message: error.errors,
    });
  }
};
exports.userAccount = async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.send({
      mess: 1,
      message: "success",
      totalUser: userData.length,
      users: userData,
    });
  } catch (error) {
    res.send({
      mess: 0,
      message: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const findUder = await UserModel.findOne({
      email: req.body.userEmail,
    });
    if (findUder) {
      if (findUder.password === req.body.userPassword) {
        res.send({
          mess: 1,
          message: "successfully login",
        });
      } else {
        res.send({
          mess: 0,
          message: "Please check your password",
        });
      }
    } else {
      res.send({
        mess: 0,
        message: "sorry you are no registered",
      });
    }
  } catch (error) {
    res.send({
      mess: 0,
      message: error,
    });
  }
};

exports.userForgetFind = async (req, res) => {
  try {
    const data = await UserModel.findOne({
      email: req.body.userCredentialEmail,
    });
    if (data) {
      res.send({
        mess: 1,
        data: data,
        message: "Yes",
      });
    } else {
      res.send({
        mess: 0,
        message: "email is not existed ",
      });
    }
  } catch (error) {
    res.send({
      mess: 0,
      message: error,
    });
  }
};

exports.userForgetUpdated = async (req, res) => {
  try {
    const findUser = await UserModel.findOneAndUpdate(
      {
        email: req.body.email,
      },
      {
        password: req.body.newForget,
      },
      {
        new: true,
      }
    );
    res.send({
      status: "sucess update",
      mess: 1,
      data: findUser,
    });
  } catch (error) {
    res.send({
      status: "Fail",
      mess: 0,
    });
  }
};
