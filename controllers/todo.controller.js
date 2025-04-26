import { Todo } from "../models/todo.model.js";

const getTodo = async (req, res) => {
  const todo = await Todo.find();
  res.json({
    message: "HI THERE",
    data: todo,
  });
};

const saveTodo = async (req, res) => {
  const { text } = req.body;
  Todo.create({ text })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error saving todo");
    });
};

const updateTodo = async (req, res) => {
  const { _id, text } = req.body;

  if (!_id || !text) {
    return res.status(400).send("Bad Request: Missing _id or text.");
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      _id,
      { text },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).send("Updated Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating todo");
  }
};

const deleteTodo = async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).send("Bad Request: Missing _id.");
  }

  try {
    const deletedTodo = await Todo.findByIdAndDelete(_id);

    if (!deletedTodo) {
      return res.status(404).send("Todo not found");
    }

    res.status(200).send("Deleted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting todo");
  }
};

export { getTodo, saveTodo, updateTodo, deleteTodo };
