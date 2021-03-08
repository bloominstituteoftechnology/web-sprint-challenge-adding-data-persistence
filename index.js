const server = require("./api/server");

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
