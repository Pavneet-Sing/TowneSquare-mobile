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
exports.getAptosMessages = exports.getAptosThreads = exports.sendMessage = exports.createAptosThread = exports.createAptosSdk = void 0;
const sdk_1 = require("@dialectlabs/sdk");
require("buffer/");
const blockchain_sdk_aptos_1 = require("@dialectlabs/blockchain-sdk-aptos");
const environment = 'development';
function hexToUint8Array(hexString) {
    const bytes = new Uint8Array(Math.ceil(hexString.length / 2));
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return bytes;
}
function createAptosSdk(privateKey) {
    const remove0Xprefix = privateKey.substring(2);
    return sdk_1.Dialect.sdk({
        environment,
    }, blockchain_sdk_aptos_1.AptosSdkFactory.create({
        wallet: blockchain_sdk_aptos_1.NodeDialectAptosWalletAdapter.create(hexToUint8Array(remove0Xprefix)),
    }));
}
exports.createAptosSdk = createAptosSdk;
function createAptosThread(sdk, recipient) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = {
            encrypted: false,
            me: {
                scopes: [sdk_1.ThreadMemberScope.ADMIN, sdk_1.ThreadMemberScope.WRITE],
            },
            otherMembers: [
                {
                    address: recipient,
                    scopes: [sdk_1.ThreadMemberScope.ADMIN, sdk_1.ThreadMemberScope.WRITE],
                },
            ],
        };
        console.log(command);
        console.log('Creating thread');
        const thread = yield sdk.threads.create(command);
        // console.log({ thread });
        return thread;
    });
}
exports.createAptosThread = createAptosThread;
function sendMessage(thread, text) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = {
            text,
        };
        return yield thread.send(command);
    });
}
exports.sendMessage = sendMessage;
function getMessages(sdk, threadId) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = {
            id: threadId,
        };
        const thread = yield sdk.threads.find(query);
        if (!thread) {
            console.log('No thread found with id', threadId);
            return [];
        }
        // console.log({ thread });
        const messages = yield thread.messages();
        console.log({ messages });
        return messages;
    });
}
function getAptosThreads(sdk) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sdk.threads.findAll();
    });
}
exports.getAptosThreads = getAptosThreads;
function getAptosMessages(sdk, threadId) {
    return __awaiter(this, void 0, void 0, function* () {
        return getMessages(sdk, threadId);
    });
}
exports.getAptosMessages = getAptosMessages;
