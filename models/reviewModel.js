const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "review must belonging to a user"],
    },
    item: {
      type: mongoose.Schema.ObjectId,
      ref: "shopItem",
      required: [true, "review must belonging to an item"],
    },
    rating: {
      type: Number,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      default: 4.5,
    },
    text: { type: String },
  },
  { dropDups: true }
);

// make user make one review only
reviewSchema.index({ user: 1, item: 1 }, { unique: true });

module.exports = mongoose.model("Review", reviewSchema);
