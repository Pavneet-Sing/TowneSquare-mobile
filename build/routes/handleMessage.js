"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const message_1 = require("../controller/message");
router.post('/getmessage', message_1.getMessage);
router.post('/getay', message_1.getChatForAy);
//
router.post('/createchat', message_1.initiatorThred);
router.post('/recipientchat', message_1.recipientToInitiator);
router.get('/getchat', message_1.getChat);
exports.default = router;
