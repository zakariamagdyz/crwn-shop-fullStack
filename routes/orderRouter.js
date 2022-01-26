const express = require("express");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");

const router = express.Router();

// handel strip paymend
router.use(authController.protect);

// roture.get()

router.use(authController.restrictTo("admin", "superAdmin"));
router.route("/:id/removeItem").patch(orderController.removeItemfromOrder);
router.route("/:id/removeCoupon").patch(orderController.removeAcouponFromOrder);
router
  .route("/")
  .get(orderController.getAllOrders)
  .post(orderController.createAnOrder);

router
  .route("/:id")
  .get(orderController.getAnOrder)
  .patch(orderController.updateAnOrder)
  .delete(orderController.deleteAnOrder);

module.exports = router;
