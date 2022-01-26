const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A coupon must have a name"],
    unique: true,
  },
  value: {
    type: Number,
    max: 500,
    required: [true, "A coupon must have a value"],
  },
  expiredDate: { type: Date, default: Date.now() + 30 * 24 * 60 * 60 * 1000 },
});

couponSchema.pre(/^find/, function (next) {
  this.find({ expiredDate: { $gte: Date.now() } });
  next();
});

module.exports = mongoose.model("Coupon", couponSchema);
