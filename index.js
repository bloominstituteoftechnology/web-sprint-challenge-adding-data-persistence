const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, function () {
	console.log(`🖥 JOHNNY 5 IS ALIVE ON PORT ${PORT} 🖥`);
});
