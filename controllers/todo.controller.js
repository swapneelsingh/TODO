import { Todo } from "../models/todo.model.js";

const getTodo = async(req, res) => {
    const todo = await Todo.find()
    res.send(todo)
}

const saveTodo = async(req, res) => {
    const {text} = req.body()
    Todo
    .create({text})
    .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
    })
}

export {getTodo, saveTodo}