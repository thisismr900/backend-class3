//route ko controller ke sath map krne ke liye controller ko import krte hai
const router = require('express').Router();

//import controller 
const {createTodo} = require('../controllers/createToDo');
const {getTodo,getTodoById} = require('../controllers/getTodo');
const {updateTodo} = require('../controllers/updateTodo');
const { create } = require('../models/Todo');
const {deleteTodo} = require('../controllers/deleteTodo');

//define API routes
// router.post("/createTodo", createTodo);
router.post("/createTodo",(req,res)=>{
createTodo})
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;