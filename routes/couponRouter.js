const express = require("express");
const couponController = require("../controllers/couponController");
const authController = require("../controllers/authController");

const router = express.Router();

// handel strip paymend
router.use(
  authController.protect,
  authController.restrictTo("admin", "superAdmin")
);

// roture.get()

router
  .route("/")
  .get(couponController.getAllCoupons)
  .post(couponController.createACoupon);

router
  .route("/:id")
  .get(couponController.getACoupon)
  .patch(couponController.updateACoupon)
  .delete(couponController.deleteACoupon);

module.exports = router;
