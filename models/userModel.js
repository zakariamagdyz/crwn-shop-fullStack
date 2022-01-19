const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [20, "The maximum length of name is 20 charchters"],
    required: [true, "Please tell us your name!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    maxLength: [20, "The maximum length of email is 20"],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Invalid email adress"],
  },
  photo: String,

  password: {
    type: String,
    required: [true, "Please provide your password"],
    minLength: [8, "The minimum length of password is 8 charchters"],
    maxLength: [30, "the maximum length of password is 30 charchters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please provide your passwordConfirm"],
    minLength: [8, "The minimum length of password is 8 charchters"],
    maxLength: [30, "the maximum length of password is 30 charchters"],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: "The two passswords don't match",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin", "superAdmin"],
    default: "user",
  },
  active: { type: Boolean, default: true },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetTokenExpiresIn: Date,
});

module.exports = mongoose.model("User", userSchema);
