const app = require('./api/server.js');
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`\n\n!==! Server Listenning in  http:localhost:${PORT} !==!\n\n`);
})