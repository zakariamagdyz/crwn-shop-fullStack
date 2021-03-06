module.exports = class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.statusCode = errorCode;
    this.status = errorCode.toString().startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
};
