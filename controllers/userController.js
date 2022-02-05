const factory = require("./factoryController");
const User = require("../models/userModel");
const HttpError = require("../utils/HttpError");
const selectedFields = require("../utils/selectFields");
const catchAsync = require("../utils/catchAsync");
const multer = require("multer");
const fs = require("fs");
// image processing library for nodejs
const sharp = require("sharp");

//////////////////////////////////////////////////////////

/////////////////////// multer /////////////////

// add storing confitration
// const multerStorate = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img/users");
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });

const multerStorate = multer.memoryStorage();

// test if uploaded file is an image
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new HttpError("Not an image! Please upload only images", 400), false);
  }
};

const upload = multer({ storage: multerStorate, fileFilter: multerFilter });
exports.uploadUserPhoto = upload.single("photo");

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});
////////////////////////////////////////////////////////
exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm)
    return next(
      new HttpError(
        "This route is not for password update, Please use /updateMyPassword.",
        400
      )
    );
  const filterdBody = selectedFields(req.body, ["name", "email"]);

  // add image path
  if (req.file) {
    filterdBody.photo = req.file.filename;

    if (!req.user.photo.includes("default.jpg")) {
      //remove old image
      fs.unlink(`public/img/users/${req.user.photo}`, (err) => {
        console.log(err);
      });
    }
  }

  const user = await User.findByIdAndUpdate(req.user._id, filterdBody, {
    new: true,
    runValidators: true,
  });
  res.status(201).json({ status: "success", data: { user } });
});

//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};
//////////////////////////////////////////////
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({ status: "success", data: null });
});

// for Admin
exports.getUsers = factory.getAll(User);
exports.getAUser = factory.getOne(User);
exports.updateAUser = factory.updateOne(User);
exports.deleteAUser = factory.deleteOne(User);
exports.createAUser = (req, res, next) => {
  return next(
    new HttpError(
      "This route is not defined, Please use /signUp route to ",
      400
    )
  );
};
