const Review = require("../models/reviewModel");
const factory = require("./factoryController");
const catchAsync = require("../utils/catchAsync");
const HttpError = require("../utils/HttpError");

exports.addUserAndItemToReq = (req, res, next) => {
  req.body.item = req.params.id;
  req.body.user = req.user._id;
  next();
};

exports.getAllReviews = factory.getAll(Review, "item");
exports.getOneReview = factory.getOne(Review);
exports.createAReview = factory.createOne(Review);

// the owner of review have the right to update it's review
exports.updateAReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new HttpError("No review found with that id", 404));

  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new HttpError("You don't have permission to perform this action", 403)
    );
  }

  review.text = req.body.text ? req.body.text : review.text;
  review.rating = req.body.rating ? req.body.rating : review.rating;
  await review.save();
  res.status(200).json({ status: "success", data: { review } });
});

// owner only have the right to remove it's review
exports.deleteAReview = catchAsync(async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (!review) return next(new HttpError("No review found with that id", 404));

  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new HttpError("You don't have permission to perform this action", 403)
    );
  }
  // remove item from db
  await review.remove();

  res.status(204).json({ status: "success", data: null });
});
