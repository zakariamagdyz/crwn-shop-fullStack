const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const ShopItems = require("../models/shopItemModel");
const shopData = require("./shopItems");
dotEnv.config({ path: "./.env" });

const databaseUri = process.env.DATABASE_URI_DEV.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(databaseUri)
  .then(() => console.log("Connected to database successfully"));

const importData = async () => {
  try {
    await ShopItems.create(shopData);
    console.log("data uploaded successfully");
  } catch (error) {
    console.log(error);
  }

  process.exit(1);
};

if (process.argv[2] === "--import") importData();
