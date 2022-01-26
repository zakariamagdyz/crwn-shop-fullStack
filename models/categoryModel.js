const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "A category must have a name"],
      trim: true,
    },

    photo: {
      type: String,
      required: [true, "Please provide the link to the photo"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

categorySchema.virtual("shopItems", {
  ref: "ShopItem",
  foreignField: "category",
  localField: "_id",
});

categorySchema.pre(/^findOne/, function (next) {
  this.populate("shopItems");
  next();
});

module.exports = mongoose.model("Category", categorySchema);
