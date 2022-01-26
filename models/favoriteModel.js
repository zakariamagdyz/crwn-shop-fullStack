const mongoose = require("mongoose");

const favoritesSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    item: { type: mongoose.Schema.ObjectId, ref: "ShopItem", required: true },
  },
  { dropDups: true }
);

favoritesSchema.index({ user: 1, item: 1 }, { unique: true });

module.exports = mongoose.model("Favorite", favoritesSchema);
