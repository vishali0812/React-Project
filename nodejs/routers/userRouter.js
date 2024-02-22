var express=require("express");
var app=express.Router();
var controllerIndex = require("../controllers/indexController");

app.post("/signup",controllerIndex.doSignup);
app.post("/login",controllerIndex.doLogin);
app.get("/loginMiddleWare",controllerIndex.doLoginWithToken);

module.exports=app;