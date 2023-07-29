//import model
const Todo = require("../models/Todo");
const ToDoModel=require("../models/Todo");


//define route handler
exports.getTodo=async(req,res)=>{
    try{
        //fetch all todos from database
        const todos=await ToDoModel.find({});

        //response with success flag
        res.status(200)
        .json(({
            success:true,
            data:todos,
            message:"All todos fetched successfully"
        })) 
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.status(500).
        json(
            {
                success:false,
                data:"internal server error",
                message:error.message
            }
            )
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //extract todo item based on id
        const id= req.params.id;
        const todo=await Todo.findById({_id:id});

        //data for given id not found
        if(!todo)
        {
            return res.status(404)
            .json({
                success:false,
                data:null,
                message:"Todo not found"
            })
        }
        //data with given id found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id}fetched successfully`
        })

    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.status(500).
        json(
            {
                success:false,
                data:"internal server error",
                message:error.message
            }
            )
    }
}