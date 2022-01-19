const express = require("express");
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");
const itemsRouter = require("./itemsRouter");

const router = express.Router();

router.use("/:categoryId/items", itemsRouter);

router.get("/withItems", categoryController.getAllCategoriesWithItems);

router
  .route("/")
  .get(categoryController.getAllCategory)
  .post(
    authController.protect,
    authController.restrictTo("admin", "superAdmin"),
    categoryController.createACategory
  );

router
  .route("/:id")
  .get(categoryController.getOneCategory)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "superAdmin"),
    categoryController.updateACategory
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "superAdmin"),
    categoryController.deleteACategory
  );

module.exports = router;
