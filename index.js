const server = require("./api/server.js");
const PORT = process.env.PORT || 9000;

console.log(process.env.PORT);
server.listen(PORT, () => {
  console.log(`listening on port:${PORT}, the Pike!`);
});
