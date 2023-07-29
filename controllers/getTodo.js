//import model
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