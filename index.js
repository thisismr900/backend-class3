

//create a server
const express=require('express');
const app=express();   //: server inst-antiated

//best practice to load config instead of app.listen(3000,()=>{})
//load config from .env file
require('dotenv').config();
const PORT=process.env.PORT || 4000;

//need Middleware to parse the body of the JSON request
app.use(express.json());

//load the routes for TODO api
const todoRoutes=require('./routes/todo');
//mount the routes
app.use('/api/v1',todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});

//connect to database
const dbConnect=require('./config/database.js');
dbConnect();

//default route 
app.get('/',(req,res)=>{
    res.send("<h1>You are at Home page</h1>");
});