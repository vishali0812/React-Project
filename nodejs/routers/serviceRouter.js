var express=require("express");
var app=express.Router();
var serviceController = require("../controllers/serviceController");

app.post("/serviceProfileSubmit",serviceController.submitProfile);
app.post("/serviceProfileUpdate",serviceController.updateProfile);
app.post("/checkEmail",serviceController.checkEmail);
app.post("/fetchReq",serviceController.fetchRequest);

module.exports=app;
