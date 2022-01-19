const factory = require("./factoryController");
const Category = require("../models/categoryModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllCategoriesWithItems = catchAsync(async (req, res, next) => {
  const categories = await Category.find().populate("shopItems");
  res.status(200).json({ status: "success", data: { categories } });
});

//////////////////////////////////////////////////
exports.getAllCategory = factory.getAll(Category);
exports.getOneCategory = factory.getOne(Category, { path: "shopItems" });
exports.createACategory = factory.createOne(Category);
exports.updateACategory = factory.updateOne(Category);
exports.deleteACategory = factory.deleteOne(Category);
