const Todo = require("../models/Todo");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find();
      const itemsLeft = await Todo.countDocuments({ completed: false });
      res.json({ todos: todoItems, left: itemsLeft });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    const { todoItem, date, time } = req.body;
    try {
      await Todo.create({
        todo: todoItem,
        completed: false,
        date: date,
        time: time,
      });
      res.json({ message: "Todo has been added" });
      console.log("Todo has been added!");
    } catch (err) {
      console.log(err);
    }
  },
  // filter todo
  filterTodo: async (req, res) => {
    const { filter } = req.params;
    try {
      if (filter == "completed") {
        const todoItems = await Todo.find({ completed: true });
        res.json({ todos: todoItems });
      } else if (filter == "uncompleted") {
        const todoItems = await Todo.find({ completed: false });
        res.json({ todos: todoItems });
      } else {
        console.log(undefined);
      }
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    const { todoIdFromJSFile } = req.body;
    try {
      await Todo.findOneAndUpdate(
        { _id: todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    const { todoIdFromJSFile } = req.body;
    try {
      await Todo.findOneAndUpdate(
        { _id: todoIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    const { todoIdFromJSFile } = req.body;
    try {
      await Todo.findOneAndDelete({ _id: todoIdFromJSFile });
      console.log("Deleted Todo");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
