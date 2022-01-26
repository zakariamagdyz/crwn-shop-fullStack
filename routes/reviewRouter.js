const express = require("express");
const reviewController = require("../controllers/reviewController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    reviewController.addUserAndItemToReq,
    reviewController.createAReview
  );

router.use(authController.protect);

router
  .route("/:id")
  .patch(reviewController.updateAReview)
  .delete(reviewController.deleteAReview);

module.exports = router;
