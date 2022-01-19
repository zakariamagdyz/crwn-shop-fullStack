const mongoose = require("mongoose");
const dotEnv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception shutting down ...");
  process.exit(1);
});

dotEnv.config({ path: ".env" });

const app = require("./app");
const port = process.env.PORT || 5500;
const databaseUri = process.env.DATABASE_URI.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(databaseUri)
  .then(() => console.log("Connected to database Successfully..."));

const server = app.listen(port, () => {
  console.log(`Server now running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled Rejection server is shutting down ...");
  server.close(() => {
    process.exit(1);
  });
});
