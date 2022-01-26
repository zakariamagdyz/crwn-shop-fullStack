const express = require("express");
const itemController = require("../controllers/shopItemsController");
const authController = require("../controllers/authController");
const reviewRouter = require("./reviewRouter");

const router = express.Router({ mergeParams: true });

router.route("/byCategory").get(itemController.getItemsByCategory);

router.use("/:id/reviews", reviewRouter);

router
  .route("/")
  .get(itemController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo("admin", "superAdmin"),
    itemController.addCategoryToReq,
    itemController.createAnItem
  );

router
  .route("/:id")
  .get(itemController.getOneItem)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "superAdmin"),
    itemController.updateAnItem
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "superAdmin"),
    itemController.deleteAnItem
  );

module.exports = router;
