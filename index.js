const server = require('./api/server.js');

const PORT = process.env.PORT || 4994;

server.listen(PORT, function () {
	console.log(`🖥 Johnny Five is Alive on PORT ${PORT} 🖥...`);
});
