const { model } = require("mongoose");

const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${req.method} ${req.url} - ${err.message}`);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: err.message || "An unexpected error occured on the server.",
  });
};

model.exports = errorHandler;
