"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        //set default
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later',
    };
    // if (err instanceof CustomAPIError) {
    //   return res.status(err.statusCode).json({ msg: err.message })
    // }
    console.log('=======errorHandlerMiddleware=======');
    console.log(err);
    if (err.name === 'CastError') {
        customError.msg = `No item found with id:${err.value}`;
        customError.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
    }
    if (err.name === 'ValidatorError') {
        customError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(',');
        customError.statusCode = 400;
    }
    if (err.code && err.code === 11000) {
        customError.msg = `${Object.keys(err.keyValue)} is already in use`;
        customError.statusCode = http_status_codes_1.StatusCodes.CONFLICT;
    }
    // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
    return res.status(customError.statusCode).json({
        status: customError.statusCode,
        message: customError.msg,
    });
};
exports.default = errorHandlerMiddleware;
