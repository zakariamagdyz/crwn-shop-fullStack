const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const HttpError = require("./utils/HttpError");
const errorMiddlware = require("./controllers/errorController");
const usersRouter = require("./routes/usersRouter");
const itemsRouter = require("./routes/itemsRouter");
const sectionsRouter = require("./routes/sectionsRouter");
//////////////////////////////////
// 1) Create an express server
const app = express();

// 2) Fire morgan in DEV mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// 3) Parse req.body
app.use(express.json());

// 4) Handle app routers

app.use("/api/v1/crwn-shop/sections", sectionsRouter);
app.use("/api/v1/crwn-shop/items", itemsRouter);
app.use("/api/v1/crwn-shop/users", usersRouter);

// 5) Handle none defined routes

app.all("*", (req, res, next) => {
  next(
    new HttpError(
      "This roure is not exist, Please take a look at the documentation",
      404
    )
  );
});

// 6) Handle app Global error middleware

app.use(errorMiddlware);

module.exports = app;
