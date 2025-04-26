import { Router } from "express";
import { getTodo, saveTodo } from "../controllers/todo.controller.js";

const router = Router()
router.get('/', getTodo)
router.post('/save', saveTodo)

export default router;