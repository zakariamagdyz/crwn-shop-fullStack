const factory = require("./factoryController");
const ShopItems = require("../models/shopItemModel");

exports.getAllItems = factory.getAll(ShopItems);
exports.getOneItem = factory.getOne(ShopItems, { path: "category" });
exports.createAnItem = factory.createOne(ShopItems);
exports.updateAnItem = factory.updateOne(ShopItems);
exports.deleteAnItem = factory.deleteOne(ShopItems);

exports.addCategoryToReq = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};
