const server = require('./server');

const PORT = process.nextTick.PORT || 5000;

server.listen(PORT, () => {
    console.log(`I see you on ${PORT}...`);
});