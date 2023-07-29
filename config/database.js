//database.js ensures connection between the app and the database

const mongoose=require('mongoose');
require('dotenv').config();
// mongodb://127.0.0.1.27017/babbarDataBase
const dbUrl=process.env.DATABASE_URL||"mongodb://127.0.0.1:27017/babbarDataBase";

const dbConnect=()=>{
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).
    then(()=>{console.log("Db connected")})
    .catch((err)=>{
        console.log("Issue in connecting db");
        console.log(err);
        process.exit(1);
    });
}

module.exports=dbConnect;