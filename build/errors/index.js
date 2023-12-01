"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = exports.NotFoundError = exports.UnauthenticatedError = exports.CustomAPIError = void 0;
const custom_api_js_1 = __importDefault(require("./custom_api.js"));
exports.CustomAPIError = custom_api_js_1.default;
const unauthenticated_js_1 = __importDefault(require("./unauthenticated.js"));
exports.UnauthenticatedError = unauthenticated_js_1.default;
const not_found_js_1 = __importDefault(require("./not_found.js"));
exports.NotFoundError = not_found_js_1.default;
const bad_request_js_1 = __importDefault(require("./bad_request.js"));
exports.BadRequestError = bad_request_js_1.default;
