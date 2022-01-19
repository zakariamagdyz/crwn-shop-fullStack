const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const HttpError = require("./utils/HttpError");
const errorMiddlware = require("./controllers/errorController");
const usersRouter = require("./routes/usersRouter");
const itemsRouter = require("./routes/itemsRouter");
const sectionsRouter = require("./routes/sectionsRouter");
const coockieParser = require("cookie-parser");

//////////////////////////////////
// 1) Create an express server
const app = express();

// 2) Fire morgan in DEV mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// 3) Parse req.body
app.use(express.json());

app.use(coockieParser());

app.use(express.static(`${__dirname}/public`));

// 4) Handle app routers

app.use("/crwn-shop/v1/sections", sectionsRouter);
app.use("/crwn-shop/v1/items", itemsRouter);
app.use("/crwn-shop/v1/users", usersRouter);

// 5) Handle none defined routes

app.all("*", (req, res, next) => {
  next(
    new HttpError(
      `Can't find ${req.originalUrl} on this server, Please take a look on the documentation`,
      404
    )
  );
});

// 6) Handle app Global error middleware

app.use(errorMiddlware);

module.exports = app;
