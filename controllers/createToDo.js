//import model
const ToDoModel=require("../models/Todo");

//define route handler
exports.createToDo=async(req,res)=>{
    try{
        //extract title and description from request ki body
        const {title,description}=req.body;
        //create a todo object and insert into database
        const response=await ToDoModel.create({title,description});
        //send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"ToDo created successfully"
            });
    }
    catch(error)
    {
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:error.message
            }
            )
    }
}