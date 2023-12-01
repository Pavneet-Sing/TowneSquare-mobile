"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_codes_1 = require("http-status-codes");
require("dotenv/config");
dotenv_1.default.config();
const express_ws_1 = __importDefault(require("express-ws"));
const not_found_1 = __importDefault(require("./middleware/not_found"));
const error_handler_1 = __importDefault(require("./middleware/error_handler"));
const handleMessage_1 = __importDefault(require("./routes/handleMessage"));
//connections
const app = (0, express_1.default)();
const wss = (0, express_ws_1.default)(app).getWss();
app.locals.wss = wss;
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        status: http_status_codes_1.StatusCodes.CONTINUE,
        message: `You're hitting dialect backend... looks like you're connected.`,
    });
});
app.use('/api/v1/message', handleMessage_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
