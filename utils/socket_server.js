const socketIO = require('socket.io');
const {
  getConversationChat,
  sendConversationChat,
  sendRecipientMessage,
} = require('../utils/chat');
let io;
function init(server) {
  io = socketIO(server);
  console.log('Socket server initialized');

  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    console.log('Client connected');
    socket.on('getchat', async (msg) => {
      socket.join(msg);
      newmessage = await getConversationChat();
      io.emit('message', newmessage);
    });

    socket.on('sendmessage', async (msg) => {
      await sendConversationChat(msg);
      newmessage = await getConversationChat();
      io.emit('message', newmessage);
    });
    socket.on('fromrecipient', async (msg) => {
      await sendRecipientMessage(msg);
      newmessage = await getConversationChat();
      io.emit('message', newmessage);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}
module.exports = {
  init,
};
//3350