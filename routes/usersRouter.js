const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signUp", authController.signUp);
router.post("/signIn", authController.signIn);
router.patch("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.get("/isSignedIn", authController.isSignedIn);

router.use(authController.protect);

router.get("/signOut", authController.logout);
router.get("/getMe", userController.getMe, userController.getAUser);
router.patch("/updateMyPassword", authController.updatePassword);
router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete("/deleteMe", userController.deleteMe);

router.use(authController.restrictTo("admin", "superAdmin"));

router.route("/").get(userController.getUsers).post(userController.createAUser);

router
  .route("/:id")
  .get(userController.getAUser)
  .patch(userController.updateAUser)
  .delete(userController.deleteAUser);

module.exports = router;
