class ApiError extends Error {
  constructor(
    statusCode = statusCode,
    message = "Something went wrong",
    errors = [],
    stack = "",
  ) {
    super(message); // Add a "message" property to the error object
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;
    this.data = null;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {ApiError}