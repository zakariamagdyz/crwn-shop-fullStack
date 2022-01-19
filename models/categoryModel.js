const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "A category must have a name"],
  },
});

module.exports = categorySchema;
