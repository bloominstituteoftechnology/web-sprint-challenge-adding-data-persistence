// start your server here
const server = require('./api/server.js');

const port = process.env.PORT || 7000;

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});