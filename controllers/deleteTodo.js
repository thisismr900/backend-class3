//import model
const ToDoModel=require("../models/Todo");

//define route handler
exports.deleteToDo=async(req,res)=>{
    try{
        const {id}=req.params;
        await ToDoModel.findByIdAndDelete(id);
        //send a json response
        res.status(200).json(
            {
                success:true,
                data:null,
                message:"ToDo deleted successfully"
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