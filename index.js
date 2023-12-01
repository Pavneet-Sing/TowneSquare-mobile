require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const http = require('http');

let app = express();
const server = http.createServer(app);
const socketserver = require('./utils/socket_server');
const notFoundNiddleware = require('./middleware/not_found');
const port = process.env.PORT || 3000;

app.use(express.json());

// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000,
//     max: 100, //limit each IP to 100 requests per windowMs
//   })
// );

app.use(helmet());
app.use(cors());
app.use(xss());
app.get('/', (req, res) => {
  res.send('Welcome to dialect API');
});

app.use(notFoundNiddleware);


const start = async () => {
  try {
    server.listen(port, () => console.log(`Server is listening on port ${port}`));
    socketserver.init(server);
  } catch (error) {
    console.log(error);
  }
};
start();
