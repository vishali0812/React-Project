var express=require("express");
var mongoose=require("mongoose");
var cors =require("cors");
var env = require("dotenv");
var bp=require("body-parser");
var fileupload=require("express-fileupload");
var app=express();
app.use('/uploads', express.static('uploads'));
app.use('/pics', express.static('pics'));
app.use(express.json({extended:true}));
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
app.use(fileupload());
env.config();

var userRouter=require("./routers/userRouter");
var clientRouter=require("./routers/clientRouter");
var serviceRouter=require("./routers/serviceRouter");
var adminRouter=require("./routers/adminRouter");
var DbRef = require("./config/dbCon")

// ============== Starting The Server ======================

const Port = 2006;
app.listen(Port,()=>{
    console.log("Node Server Started at Port Number: "+Port);
})

// ============= Connection to MongoDB =========================


const dburl = DbRef.dburl;
var dbCon=mongoose.connect(dburl).then(()=>{
    console.log("Connected to MongoDb...");
   }).catch((err)=>{
       console.log("Error Occurred: "+err.toString());
       process.exit();
   });

//    =========================================================

app.use("/user",userRouter);
app.use("/client",clientRouter);
app.use("/service",serviceRouter);
app.use("/admin",adminRouter);
