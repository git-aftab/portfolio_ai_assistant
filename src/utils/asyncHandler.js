const asyncHandler = (reqHandler) => {
  return async (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch((error) => next(error));
  };
};

export { asyncHandler };


// equivalent to the above code, but with try/catch block

// const asyncHandler = (reqHandler) => {
//   return async (req, res, next) => {
//     try {
//       await reqHandler(req, res, next);
//     } catch (error) {
//       console.error("Error in asyncHandler:", error.message);
//       next(error);
//     }
//   };
// };
