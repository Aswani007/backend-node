import { ApiError } from "./ApiError.js";
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ success: false, message: error.message });
//   }
// };

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      if (err instanceof ApiError) {
        next(
          res.status(err.statusCode).json({
            statusCode: err.statusCode,
            message: err.message,
            success: false,
            error: err.errors,
          })
        );
      } else {
        next(
          res
            .status(500)
            .json({ message: "Internal Server Error", success: false })
        );
      }
    });
  };
};

// const asyncHandler = (requestHandler) => {
//   return (req, res, next) => {
//     Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
//   };
// };

export { asyncHandler };
