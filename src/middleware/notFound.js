const ApiError = require('../utils/Apierror');
 



const notFound = (req, res, next) => {
  const error = new ApiError(404, `Route not found - ${req.originalUrl}`);
  next(error);
};
 
module.exports = notFound;