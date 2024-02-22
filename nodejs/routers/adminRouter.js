var express=require("express");
var app=express.Router();
var controllerAdmin = require("../controllers/adminController")

app.post("/fetchUsers",controllerAdmin.fetchAllUsers);
app.post("/fetchProviders",controllerAdmin.fetchAllProviders);
app.post("/fetchClients",controllerAdmin.fetchAllClients);
app.post("/blockUser",controllerAdmin.blockUser);
app.post("/resumeUser",controllerAdmin.resumeUser);
module.exports=app;
