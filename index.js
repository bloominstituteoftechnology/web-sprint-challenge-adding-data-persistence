const server = require('./server.js');

const PORT = process.env.PORT || 8000;

server.get('/', (req, res) => {
	res.send(`Server running at http://localhost:${PORT}`)
})

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});