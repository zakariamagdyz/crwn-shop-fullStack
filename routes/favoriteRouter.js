const express = require("express");
const authController = require("../controllers/authController");
const favoriteController = require("../controllers/favoriteController");

const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(favoriteController.getFavoriteofUser)
  .post(favoriteController.addFavoriteItem);

router.delete("/:id", favoriteController.deleteFavoriteItem);

module.exports = router;
