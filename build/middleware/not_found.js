"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res) => res.status(404).send({
    status: 400,
    error: 'the specified route does not exist',
    message: 'the specified route does not exist',
});
exports.default = notFound;
