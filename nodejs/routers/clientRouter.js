var express=require("express");
var app=express.Router();
var controllerClient = require("../controllers/clientController")

app.post("/checkEmail",controllerClient.checkEmail);
app.post("/clientProfileSubmit",controllerClient.submitProfile);
app.post("/clientProfileUpdate",controllerClient.updateProfile);
app.post("/postServantRequest",controllerClient.postServant);
app.post("/fetchProvider",controllerClient.fetchProvider);
app.post("/fetchServant",controllerClient.fetchServant);
app.post("/getRecordServant",controllerClient.getServantRecord)

module.exports=app;
