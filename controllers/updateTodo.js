//import model
const ToDoModel=require("../models/Todo");

//define route handler
exports.updateToDo=async(req,res)=>{
    try{
        //first fetch id by 1st way:   const id= req.params.id;
        const {id}=req.params;//2nd way
        //extract title and description from request ki body
        const {title,description}=req.body;
        const todo=await ToDoModel.findByIdAndUpdate(
            {_id:id},
            {   title:title,
                description:description,
                updatedAt:Date.now()
            });
        //send a json response
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"ToDo updated successfully"
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