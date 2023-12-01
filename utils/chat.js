const {
  createAptosSdk,
  createAptosThread,
  getAptosMessages,
  sendMessage,
  getAptosThreads,
} = require('../controller/dialect');
const getConversationChat = async () => {
  const initiatorSDK = createAptosSdk(
    '0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae'
  );
  const recipient = createAptosSdk(
    '0x1659dacca02634b5c4824638727a59babbcc6cb50a1414aa57f094ad19d3d446'
  );
  const initiatorThread = await initiatorSDK.threads
    .findAll()
    .then((threads) => {
      return threads[0];
    });
  const chatThread = await recipient.threads.find(initiatorThread);
  const newmessage = await chatThread?.messages();
  return newmessage;
};
const sendConversationChat = async (msg) => {
  const initiatorSDK = createAptosSdk(
    '0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae'
  );
  const recipent =
    '0x872db391f94ef5a2bfda2faae90121a0b496866d69aaf7d8334c90fc50197e6d';
  let thread;
  const text = msg;
  try {
    thread = await createAptosThread(initiatorSDK, recipent);
    await sendMessage(thread, text);
  } catch (err) {
    if (err.type === 'ThreadAlreadyExistsError') {
      const threads = await getAptosThreads(initiatorSDK);
      console.log(threads);
      thread = threads[0];
      await sendMessage(thread, text);
    }
  }
};
const sendRecipientMessage = async (msg) => {
  const initiator = createAptosSdk(
    '0x4afeb3d46268f34628ea204a1849d066b046b587f36d364d35237be3ed81fcae'
  );
  const recipient = createAptosSdk(
    '0x1659dacca02634b5c4824638727a59babbcc6cb50a1414aa57f094ad19d3d446'
  );
  const initiatorThread = await initiator.threads.findAll().then((threads) => {
    return threads[0];
  });
  const recipientThread = await recipient.threads.find(initiatorThread);
  await recipientThread?.send({ text: msg });
};
module.exports = {
  getConversationChat,
  sendConversationChat,
  sendRecipientMessage,
};
