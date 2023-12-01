const CustomAPIError = require('./custom_api');
const NotFoundError = require('./not_found');
const BadRequestError = require('./bad_request');
const UnauthenticatedError = require('./unauthenticated');
module.exports = {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
};
