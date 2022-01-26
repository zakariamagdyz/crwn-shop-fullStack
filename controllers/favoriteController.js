const catchAsync = require("../utils/catchAsync");
const HttpError = require("../utils/httpError");
const Favorite = require("../models/favoriteModel");

exports.getFavoriteofUser = catchAsync(async (req, res, next) => {
  const favoritesItems = await Favorite.find({
    user: req.user._id,
  });

  res.status(200).json({ status: "success", data: { favoritesItems } });
});

exports.addFavoriteItem = catchAsync(async (req, res, next) => {
  const favoriteItem = await Favorite.create({
    user: req.user._id,
    item: req.body.item,
  });

  res.status(200).json({ status: "success", data: { favoriteItem } });
});

exports.deleteFavoriteItem = catchAsync(async (req, res, next) => {
  const favoriteItem = await Favorite.findById(req.params.id);
  if (!favoriteItem)
    return next(new HttpError("No favorite Item found with that id", 404));

  if (
    req.user.id !== favoriteItem.user.toString() &&
    req.user.role !== "admin"
  ) {
    return next(
      new HttpError("You don't have permission to delete this item", 403)
    );
  }

  await favoriteItem.remove();

  res.status(204).json({ status: "success", data: null });
});
