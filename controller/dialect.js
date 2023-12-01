const {
  Dialect,
  ThreadMemberScope,
} = require('@dialectlabs/sdk');

const {
  Aptos,
  AptosSdkFactory,
  NodeDialectAptosWalletAdapter,
} = require('@dialectlabs/blockchain-sdk-aptos');

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
  return Dialect.sdk(
    {
      environment,
    },
    AptosSdkFactory.create({
      wallet: NodeDialectAptosWalletAdapter.create(
        hexToUint8Array(remove0Xprefix)
      ),
    })
  );
}

async function createAptosThread(sdk, recipient) {
  const command = {
    encrypted: false,
    me: {
      scopes: [ThreadMemberScope.ADMIN, ThreadMemberScope.WRITE],
    },
    otherMembers: [
      {
        address: recipient,
        scopes: [ThreadMemberScope.ADMIN, ThreadMemberScope.WRITE],
      },
    ],
  };
  console.log(command);
  console.log('Creating thread');
  const thread = await sdk.threads.create(command);

  // console.log({ thread });
  return thread;
}

async function sendMessage(thread, text) {
  const command = {
    text,
  };
  return await thread.send(command);
}

async function getMessages(sdk, threadId) {
  const query = {
    id: threadId,
  };
  const thread = await sdk.threads.find(query);
  if (!thread) {
    console.log('No thread found with id', threadId);
    return [];
  }
  // console.log({ thread });
  const messages = await thread.messages();
  console.log({ messages });
  return messages;
}
async function getAptosThreads(sdk) {
  return await sdk.threads.findAll();
}

async function getAptosMessages(sdk, threadId) {
  return getMessages(sdk, threadId);
}
module.exports = {
  createAptosSdk,
  createAptosThread,
  sendMessage,
  getAptosThreads,
  getAptosMessages,
};
