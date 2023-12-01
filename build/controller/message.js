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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatForAy = exports.initiatorThred = exports.getChat = exports.recipientToInitiator = exports.getMessage = void 0;
const dialect_1 = require("../utils/dialect");
require("buffer/");
const http_status_codes_1 = require("http-status-codes");
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sdk = (0, dialect_1.createAptosSdk)('0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae');
    const threads = yield (0, dialect_1.getAptosThreads)(sdk);
    if (threads.length < 1 || !threads[0]) {
        console.log('You have no threads. Try creating a thread and sending a message first.');
        return;
    }
    console.log(threads);
    const thread = threads[0];
    const messages = yield (0, dialect_1.getAptosMessages)(sdk, thread.id);
    const recipent = '0x872db391f94ef5a2bfda2faae90121a0b496866d69aaf7d8334c90fc50197e6d';
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: http_status_codes_1.StatusCodes.OK,
        message: 'success',
        data: messages,
    });
});
exports.getMessage = getMessage;
// from here
const recipientToInitiator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { msg } = req.body;
    const initiator = (0, dialect_1.createAptosSdk)('0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae');
    const recipient = (0, dialect_1.createAptosSdk)('0x1659dacca02634b5c4824638727a59babbcc6cb50a1414aa57f094ad19d3d446');
    const initiatorThread = yield initiator.threads.findAll().then((threads) => {
        return threads[0];
    });
    const recipientThread = yield recipient.threads.find(initiatorThread);
    yield (recipientThread === null || recipientThread === void 0 ? void 0 : recipientThread.send({ text: msg }));
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: http_status_codes_1.StatusCodes.OK,
        message: 'success',
    });
});
exports.recipientToInitiator = recipientToInitiator;
const getChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const initiatorSDK = (0, dialect_1.createAptosSdk)('0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae');
    const recipient = (0, dialect_1.createAptosSdk)('0x1659dacca02634b5c4824638727a59babbcc6cb50a1414aa57f094ad19d3d446');
    const initiatorThread = yield initiatorSDK.threads
        .findAll()
        .then((threads) => {
        return threads[0];
    });
    const chatThread = yield recipient.threads.find(initiatorThread);
    const newmessage = yield (chatThread === null || chatThread === void 0 ? void 0 : chatThread.messages());
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: http_status_codes_1.StatusCodes.OK,
        message: 'success',
        data: newmessage,
    });
});
exports.getChat = getChat;
const initiatorThred = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { msg } = req.body;
    const initiatorSDK = (0, dialect_1.createAptosSdk)('0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae');
    const recipent = '0x872db391f94ef5a2bfda2faae90121a0b496866d69aaf7d8334c90fc50197e6d';
    let thread;
    const text = msg;
    try {
        thread = yield (0, dialect_1.createAptosThread)(initiatorSDK, recipent);
        yield (0, dialect_1.sendMessage)(thread, text);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            status: http_status_codes_1.StatusCodes.OK,
            message: 'success',
        });
    }
    catch (err) {
        if (err.type === 'ThreadAlreadyExistsError') {
            const threads = yield (0, dialect_1.getAptosThreads)(initiatorSDK);
            console.log(threads);
            thread = threads[0];
            yield (0, dialect_1.sendMessage)(thread, text);
            res.status(http_status_codes_1.StatusCodes.OK).json({
                status: http_status_codes_1.StatusCodes.OK,
                message: 'success',
            });
        }
    }
});
exports.initiatorThred = initiatorThred;
// stops here
const getChatForAy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const milli = (0, dialect_1.createAptosSdk)('0x1659dacca02634b5c4824638727a59babbcc6cb50a1414aa57f094ad19d3d446');
    const ay = (0, dialect_1.createAptosSdk)('0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae');
    const milliThread = yield milli.threads.findAll().then((threads) => {
        console.log(threads);
        return threads[0];
    });
    const ayThread = yield ay.threads.find(milliThread);
    const newmessage = yield (ayThread === null || ayThread === void 0 ? void 0 : ayThread.messages());
    console.log(ayThread);
    // const threads = await getAptosThreads(sdk);
    // console.log(threads);
    // const thread = threads[0];
    // const query: FindThreadByIdQuery = {
    //   id: thread.id,
    // };
    res.status(http_status_codes_1.StatusCodes.OK).json({
        status: http_status_codes_1.StatusCodes.OK,
        message: 'success',
        data: newmessage,
    });
});
exports.getChatForAy = getChatForAy;
