const factory = require("./factoryController");
const Order = require("../models/orderModel");
const catchAsync = require("../utils/catchAsync");
const HttpError = require("../utils/HttpError");

//////////////////////////////////////////////////////////////////

exports.getAllOrders = factory.getAll(Order);

/////////////////////////////////////////////////////
exports.getAnOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) return next(new HttpError("No order found with that id", 404));
  await order.getPriceAfterDiscount();
  res.status(200).json({ status: "success", data: { order } });
});

//////////////////////////////////////////////////////////
exports.createAnOrder = catchAsync(async (req, res, next) => {
  const order = await Order.create(req.body);
  await order.getPriceAfterDiscount();
  res.status(200).json({ status: "success", order: { order } });
});

//////////////////////////////////////////////////////////////
exports.updateAnOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!order) return next(new HttpError("No order found with that id", 404));
  await order.getPriceAfterDiscount();

  res.status(200).json({ status: "success", data: { order } });
});

//////////////////////// Remove item from order list ///////////////////////

exports.removeItemfromOrder = catchAsync(async (req, res, next) => {
  //   const order = await Order.findByIdAndUpdate(
  //     req.params.id,
  //     {
  //       $pull: { orders: { _id: req.body.itemId } },
  //     },
  //     { new: true }
  //   );

  const order = await Order.findById(req.params.id);
  if (!order) return next(new HttpError("No order found with that Id.", 404));
  if (order.orders.length < 2)
    return next(new HttpError("Order must have one item at least!", 404));

  order.orders.pull(req.body.itemId);
  await order.getPriceAfterDiscount();
  res.status(200).json({ status: "success", data: { order } });
});

//////////////////////// Remove Coupon ///////////////////////
exports.removeAcouponFromOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    {
      $unset: { discount: "" },
    },
    { new: true }
  );
  if (!order) return next(new HttpError("No order found with that Id.", 404));
  await order.getPriceAfterDiscount();
  res.status(200).json({ status: "success", data: { order } });
});

exports.deleteAnOrder = factory.deleteOne(Order);
