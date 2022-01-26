const factory = require("./factoryController");
const ShopItems = require("../models/shopItemModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllItems = factory.getAll(ShopItems, "category");
exports.getOneItem = factory.getOne(ShopItems, { path: "category" });
exports.createAnItem = factory.createOne(ShopItems);
exports.updateAnItem = factory.updateOne(ShopItems);
exports.deleteAnItem = factory.deleteOne(ShopItems);

exports.addCategoryToReq = (req, res, next) => {
  if (!req.body.category) req.body.category = req.params.categoryId;
  next();
};

exports.getItemsByCategory = catchAsync(async (req, res, next) => {
  const data = await ShopItems.aggregate([
    {
      $group: {
        _id: "$category",
        numOfItems: { $sum: 1 },
        items: { $push: "$$ROOT" }, // push all item in an array
      },
    },
    { $sort: { numOfItems: 1 } },
    {
      $lookup: {
        // we can get specific fields from parent we wanna populate
        from: "categories",
        let: { category: "$_id" }, // make variable with data you wanna search to access it in pipline
        pipeline: [
          { $match: { $expr: { $eq: ["$_id", "$$category"] } } }, // get category which it's id eq category v
          // we can use $in :["$_id","$$variable"]  also
          { $project: { name: 1 } }, // get name of category only
        ],
        as: "category",
      },
    },
  ]);

  res.status(200).json({ status: "success", data: { data } });
});
