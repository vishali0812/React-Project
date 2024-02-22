var path = require("path");
var ServiceProfileModel = require("../models/serviceProfileModel");
var ReqServantModel = require("../models/postServantModel");
var RefReqModel = ReqServantModel();
var submitProfile = async (req, resp) => {
  var ppicPath = path.join(__dirname, "..", "uploads", req.files.ppic.name);
  req.files.ppic.mv(ppicPath);
  var ipicPath = path.join(__dirname, "..", "uploads", req.files.ipic.name);
  req.files.ipic.mv(ipicPath);
  req.body.ppic = req.files.ppic.name;
  req.body.ipic = req.files.ipic.name;
  var obj = new ServiceProfileModel(req.body); 
  await obj.save()
    .then((doc) => {
      resp.send("Data Saved Successfully");
    })
    .catch((err) => {
      resp.send(err);
    });
};


var updateProfile = async (req,resp)=>{
    if(req.files != null)
       {
         if(req.files.ppic != null)
         {
           var ppicPath=path.join(__dirname,"..","uploads",req.files.ppic.name);
       req.files.ppic.mv(ppicPath);
       req.body.ppic = req.files.ppic.name;
         }
       }
     
      if(req.files != null)
      {
       if(req.files.ipic != null)
       {
         var ipicPath=path.join(__dirname,"..","uploads",req.files.ipic.name);
       req.files.ipic.mv(ipicPath);
       req.body.ipic = req.files.ipic.name;
       }
      }
      ServiceProfileModel.updateOne({email: req.body.email},{
                   name: req.body.name,
                   address: req.body.address,
                   city: req.body.city,
                   mobile: req.body.mobile,
                   ppic: req.body.ppic,
                   ipic: req.body.ipic,
                   category: req.body.category,
                   expert: req.body.expert,
                   exp:req.body.exp,
                   shop:req.body.shop,
                   dis: req.body.dis
                      }).then((result)=>{
                       if(result.acknowledged=== true)
                        resp.send("Updated Successfully");
                       else 
                        resp.send(result);
     })
     }

     async function checkEmail(req,resp){
      ServiceProfileModel.findOne({email: req.body.email}).then((rep)=>{
          if(rep!=null)
          resp.send(rep);
          else(resp.send(null));
      })
    }

  var fetchRequest=async(req,resp)=>{
    ServiceProfileModel.findOne({email: req.body.email}).then((rep)=>{
      if(rep!=null) {
   var cat = rep.category;
    RefReqModel.find({category: cat}).then((rep)=>{
      if(rep!=null) {
        resp.json({"status":true,rep});
         }
          else resp.json({"status":false,"message":"No Request Yet"});
     });
     }
      else {
         resp.json({"status":false,"message":"Please Fill Your Profile First"});
        return;
      }
  })
  
  }

module.exports = { submitProfile,updateProfile,checkEmail,fetchRequest };
