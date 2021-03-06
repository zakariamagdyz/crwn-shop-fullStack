const mongoose = require("mongoose");
const validator = require("validator");
const Coupon = require("../models/couponModel.js");

const orderSchema = new mongoose.Schema({
  orders: [
    {
      name: { type: String, required: [true, "The item must have a name"] },
      price: { type: Number, required: [true, "The item must have a price"] },
      quantity: { type: Number, default: 1 },
      photo: String,
    },
  ],

  userInfo: {
    email: {
      type: String,
      maxLength: [20, "Maximum length for email is 20 characters"],
      validate: [validator.isEmail, "Please provide a valid email"],
      trim: true,
      required: [true, "Please provide the client email"],
    },
    phone: {
      type: String,
      maxLength: [20, "Maximum length for phone is 20 characters"],
      trim: true,
      required: [true, "Please provide the client phone number"],
      // validate: {
      //   validator: function (val) {
      //     if (!val && this.userInfo.email) return true;
      //     return false;
      //   },
      //   message: "You must provide email or a phone number",
      // },
    },
    country: { type: String, default: "Egypt" },
    adress: {
      type: String,
      required: [true, "The order must have the client adress"],
      maxLength: [100, "Maximum length for phone is 100 characters"],
    },
    details: {
      floorNumber: String,
      city: String,
      zipCode: String,
    },
  },
  discount: {
    type: mongoose.Schema.ObjectId,
    ref: "Coupon",
  },

  BookedAt: { type: Date, default: Date.now },
  paid: { type: Boolean, default: false },
  currency: { type: String, default: "EGP" },
  totalPrice: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

orderSchema.pre("save", async function (next) {
  const coupon = await Coupon.findById(this.discount);
  const discountValue = coupon ? coupon.value : 0;
  const totalAmount = this.orders.reduce((acc, { price, quantity }) => {
    return acc + ((+price * 100) / 100) * ((+quantity * 100) / 100);
  }, 0);
  // handle order when we hasn't any discount
  // total amount after discount
  this.totalPrice = Math.round((totalAmount - discountValue) * 10) / 10;
  next();
});

// orderSchema.post(/^findOneAnd/, async function (doc) {
//   if (!doc) return; // improtant if we search of doc non exist
//   console.log("fire");
//   const coupon = await Coupon.findById(doc.discount);
//   const discountValue = coupon ? coupon.value : 0;
//   const totalAmount = doc.orders.reduce((acc, { price, quantity }) => {
//     return acc + ((+price * 100) / 100) * ((+quantity * 100) / 100);
//   }, 0);
//   // handle order when we hasn't any discount
//   // total amount after discount
//   doc.totalPrice = Math.round((totalAmount - discountValue) * 10) / 10;
//   await doc.save();
// });

orderSchema.methods.getPriceAfterDiscount = async function () {
  const coupon = await Coupon.findById(this.discount);
  const discountValue = coupon ? coupon.value : 0;
  const totalAmount = this.orders.reduce((acc, { price, quantity }) => {
    return acc + ((+price * 100) / 100) * ((+quantity * 100) / 100);
  }, 0);
  // handle order when we hasn't any discount
  // total amount after discount
  this.totalPrice = Math.round((totalAmount - discountValue) * 10) / 10;
  await this.save();
};

module.exports = mongoose.model("Order", orderSchema);
