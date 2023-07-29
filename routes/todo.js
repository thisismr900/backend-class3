//route ko controller ke sath map krne ke liye controller ko import krte hai
const router = require('express').Router();

//import controller 
const {createTodo} = require('../controllers/createToDo');
const {getTodo} = require('../controllers/getTodo');
const { create } = require('../models/Todo');

//define API routes
// router.post("/createTodo", createTodo);
router.post("/createTodo",(req,res)=>{
createTodo})
router.get("/getTodos",getTodo);

module.exports = router;