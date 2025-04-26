import { Router } from "express";
import { deleteTodo, getTodo, saveTodo, updateTodo } from "../controllers/todo.controller.js";

const router = Router();
router.route("/").get(getTodo);
router.route("/save").post(saveTodo);
router.route("/update").post(updateTodo);
router.route("/delete").post(deleteTodo);

export default router;
