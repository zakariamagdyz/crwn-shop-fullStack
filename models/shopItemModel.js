const mongoose = require("mongoose");

const shopItemsSchema = new mongoose.Schema({
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
  price: { type: Number, required: [true, "Please provide the item's price."] },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Shop item must belonging to a category"],
  },
});

module.exports = mongoose.model("ShopItem", shopItemsSchema);
