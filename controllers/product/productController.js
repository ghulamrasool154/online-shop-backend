const ProductModel = require("../../model/product/productModel");
const multer = require("multer");
exports.uploadFiles = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "public/images");
    },
    filename: (req, file, callback) => {
      const uniqueId = Math.trunc(Math.random() * 1e15);
      callback(null, uniqueId + "_____" + file.originalname);
    },
  }),
}).array("productImages", 5);

exports.addProduct = async (req, res) => {
  try {
    const images = [];
    for (var i = 0; i < req.files.length; i++) {
      images.push("images/" + req.files[i].filename);
    }
    let featureBoolean;
    if (req.body.feature == "Yes") {
      featureBoolean = true;
    } else {
      featureBoolean = false;
    }
    const slugconvert = req.body.name.split(" ").join("_").toLowerCase();
    const productdata = await ProductModel.create({
      name: req.body.name,
      slug: slugconvert,
      feature: featureBoolean,
      description: req.body.description,
      short_description: req.body.short_description,
      price: req.body.price,
      stock_quantity: req.body.stock_quantity,
      productImages: images,
      category: req.body.category,
    });
    res.send({
      message: "Success",
      productdata,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};
exports.readProduct = async (req, res) => {
  try {
    const productdata = await ProductModel.find();
    res.send({
      message: "Success",
      totalProducts: productdata.length,
      productdata,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};
exports.upateProduct = async (req, res) => {
  try {
    const productdata = await ProductModel.findById({
      _id: req.params.id,
    });
    res.send({
      message: "updat successfully",
      productdata,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};
exports.upateProducts = async (req, res) => {
  try {
    const images = [];
    for (var i = 0; i < req.files.length; i++) {
      images.push("images/" + req.files[i].filename);
    }
    let featureBoolean;
    if (req.body.feature == "Yes") {
      featureBoolean = true;
    } else {
      featureBoolean = false;
    }
    const slugconvert = req.body.name.split(" ").join("_").toLowerCase();
    const productdata = await ProductModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        slug: slugconvert,
        feature: featureBoolean,
        description: req.body.description,
        short_description: req.body.short_description,
        price: req.body.price,
        stock_quantity: req.body.stock_quantity,
        productImages: images,
        category: req.body.category,
      },
      {
        new: true,
      }
    );
    res.send({
      message: "updat successfully",
      productdata,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};
exports.deletProduct = async (req, res) => {
  try {
    const productdata = await ProductModel.findByIdAndDelete({
      _id: req.params.id,
    });
    res.send({
      message: "Delete",
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};
