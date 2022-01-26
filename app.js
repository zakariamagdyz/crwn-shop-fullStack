const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");
const coockieParser = require("cookie-parser");
const HttpError = require("./utils/HttpError");
const categoriesRouter = require("./routes/categoryRouter");
const errorMiddlware = require("./controllers/errorController");
const usersRouter = require("./routes/usersRouter");
const itemsRouter = require("./routes/itemsRouter");
const orderRouter = require("./routes/orderRouter");
const couponRouter = require("./routes/couponRouter");
const reviewRouter = require("./routes/reviewRouter");
const favoriteRouter = require("./routes/favoriteRouter");

//////////////////////////////////
// 1) Create an express server
const app = express();

// 2) Fire morgan in DEV mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// 3) Parse req.body
app.use(express.json());

app.use(coockieParser());
// for gzip text and json & build
app.use(compression());

app.use(express.static(`${__dirname}/public`));

// 4) Handle app routers

app.use("/crwn-shop/v1/categories", categoriesRouter);
app.use("/crwn-shop/v1/items", itemsRouter);
app.use("/crwn-shop/v1/users", usersRouter);
app.use("/crwn-shop/v1/orders", orderRouter);
app.use("/crwn-shop/v1/coupons", couponRouter);
app.use("/crwn-shop/v1/reviews", reviewRouter);
app.use("/crwn-shop/v1/favorites", favoriteRouter);

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
