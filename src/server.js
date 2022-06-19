require('dotenv').config();
const server = require('./app');

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}`))
  .catch((error) => console.log("Server failed: ", error));
