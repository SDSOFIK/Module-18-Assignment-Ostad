const { sendError } = require('../utils/Apiresponse');
 

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let errors = null;
 
  if (err.name === 'ValidationError') {
    statusCode = 400;
    errors = Object.values(err.errors).map((e) => e.message);
    message = 'Validation failed';
  }
 
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid value for field '${err.path}'`;
  }
 
  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue || {})[0];
    message = field
      ? `A student with this ${field} already exists`
      : 'Duplicate field value entered';
  }
 
  if (process.env.NODE_ENV !== 'production') {
    console.error(err.stack);
  }
 
  return sendError(res, statusCode, message, errors);
};
 
module.exports = errorHandler;
 