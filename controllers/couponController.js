const factory = require("./factoryController");
const Coupon = require("../models/couponModel");

exports.getAllCoupons = factory.getAll(Coupon);
exports.getACoupon = factory.getOne(Coupon);
exports.createACoupon = factory.createOne(Coupon);
exports.updateACoupon = factory.updateOne(Coupon);
exports.deleteACoupon = factory.deleteOne(Coupon);
