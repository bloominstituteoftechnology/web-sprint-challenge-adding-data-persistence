const express = require("express");
const server = express();
const appModel = require("./appModel");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//GET🏄🏽‍♂️ Test your Route
server.get("/test", async (req, res, next) => {
  try {
    res.json({ message: "working" });
  } catch (error) {
    next(error);
  }
});

// Get all Tasks/Projects ✅
server.get("/tasks", async (req, res, next) => {
    try {
      const task = await appModel.getTasks();
      if (task.length === 0) {
        return res.status(404).json({
          message: "Task does not exist, create it?",
        });
      } else {
        res.json(task);
      }
    } catch (error) {
      next(error);
    }
  });

// Get All Items/Resources  ✅
server.get("/items", async (req, res, next) => {
  try {
    const item = await appModel.getItem();
    if (item.length === 0) {
      return res.status(404).json({
        message: "Task does not exist, create it?",
      });
    } else {
      res.json(item);
    }
  } catch (error) {
    next(error);
  }
});

// Get All tasks/Todos  ✅
server.get("/todo", async (req, res, next) => {
    try {
      const to_do = await appModel.getTo_do();
      if (to_do.length === 0) {
        return res.status(404).json({
          message: "Todo does not exist, create it?",
        });
      } else {
        res.json(to_do);
      }
    } catch (error) {
      next(error);
    }
  });

// Get All Items/Resources by :id ✅
server.get("/item/:id", (req, res) => {
  const { id } = req.params;

  appModel
    .findItemById(id)
    .then((scheme) => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

//Post new Item/Resource ✅
server.post("/item", (req, res) => {
  const itemData = req.body;

  appModel.addItem(itemData)
    .then((scheme) => {
      res.status(201).json(scheme);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new Item" });
    });
});

//Post new Tasks/Projects ✅
server.post("/task", (req, res) => {
    const taskData = req.body;
    appModel.addTask(taskData)
      .then((scheme) => {
        res.status(201).json(scheme);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to create new Task" });
      });
  });

//Post new Tasks/Todo ✅
server.post("/todo", (req, res) => {
    const todoData = req.body;
  
    appModel.addTask(todoData)
      .then((todo) => {
        res.status(201).json(todo);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to create new Task" });
      });
  });

//GET To_do with Task name and Description
server.get("/todo/tasks", async (req, res, next) => {
  try {
    const to_do = await appModel.getTodoWithTask();
    if (to_do.length === 0) {
      return res.status(404).json({
        message: "Todo does not exist, create it?",
      });
    } else {
      res.json(to_do);
    }
  } catch (error) {
    next(error);
  }
});



//export your router
module.exports = server;
