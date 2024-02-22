const SignupModel = require("../models/signupModel")();
const ServiceProvider = require("../models/serviceProfileModel");
const clientProfileSchema  = require("../models/clientProfileModel");
const fetchAllUsers = async (req, resp) => {
    try {
        const docs = await SignupModel.find({});
        resp.send(docs);
    } catch (err) {
        resp.status(500).send(err);
    }
}

const fetchAllProviders = async (req, resp) => {
    try {
        const docs = await ServiceProvider.find({});
        resp.send(docs);
    } catch (err) {
        resp.status(500).send(err);
    }
}

const fetchAllClients = async (req, resp) => {
    try {
        const docs = await clientProfileSchema.find({});
        resp.send(docs);
    } catch (err) {
        resp.status(500).send(err);
    }
}

var blockUser=async(req,resp)=>{
    try{
        SignupModel.updateOne({email: req.body.email},{
            status: "0",
        }).then((result)=>{
            if(result.acknowledged=== true)
             resp.send("User Blocked Successfully");
            else 
             resp.send(result);
            })
    } catch (err){
        resp.status(500).send(err);
    } 
}

var resumeUser=async(req,resp)=>{
    try{
        SignupModel.updateOne({email: req.body.email},{
            status: "1",
        }).then((result)=>{
            if(result.acknowledged=== true)
             resp.send("User Resumed Successfully");
            else 
             resp.send(result);
            })
    } catch (err){
        resp.status(500).send(err);
    } 
}

module.exports = { fetchAllUsers,blockUser,resumeUser,fetchAllProviders,fetchAllClients };
