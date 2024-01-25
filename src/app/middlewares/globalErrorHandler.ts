/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "something went wrong";
  const errorSource = [
    {
      path: "",
      message: message,
    },
  ];
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errorSource,
  });
};

export default globalErrorHandler;
