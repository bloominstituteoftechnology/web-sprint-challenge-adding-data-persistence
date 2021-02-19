const db = require("../../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const postResouce = (resouce) => {
  return db("resources").insert(resouce);
};

module.exports = {
  getResources,
  postResouce,
};
