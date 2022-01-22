const factory = require("./factoryController");
const Category = require("../models/categoryModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllCategoriesWithItems = catchAsync(async (req, res, next) => {
  const categories = await Category.find()
    .populate({ path: "shopItems", select: "-__v" })
    .select("-__v");
  // res.status(200).json({
  //   status: "success",
  //   results: categories.length,
  //   data: { categories },
  // });

  // this redirect make anotehr request to theis url , we can use to hide data from url
  res.redirect(`${req.protocol}://${req.get("host")}/crwn-shop/v1/categories`);
});

//////////////////////////////////////////////////
exports.getAllCategory = factory.getAll(Category);
exports.getOneCategory = factory.getOne(Category, { path: "shopItems" });
exports.createACategory = factory.createOne(Category);
exports.updateACategory = factory.updateOne(Category);
exports.deleteACategory = factory.deleteOne(Category);
