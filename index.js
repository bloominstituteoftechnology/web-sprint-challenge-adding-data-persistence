const server = require("./server");






server.get("/", (req, res) => {
  res.status(200).json({ API: "WORKING" });
});
