var path = require("path");
var clientProfileModel = require("../models/clientProfileModel");
const PostServantModel = require("../models/postServantModel");
const ServantProfileModel = require("../models/serviceProfileModel");
var RefModel = PostServantModel();
var submitProfile = async (req, resp) => {
  var ppicPath = path.join(__dirname, "..", "uploads", req.files.ppic.name);
  req.files.ppic.mv(ppicPath);
  var ipicPath = path.join(__dirname, "..", "uploads", req.files.ipic.name);
  req.files.ipic.mv(ipicPath);
  req.body.ppic = req.files.ppic.name;
  req.body.ipic = req.files.ipic.name;
  var obj = new clientProfileModel(req.body);
  await obj.save().then((doc) => {
    resp.send("Data Saved Successfully");
  }).catch((err) => {
    resp.send(err);
  })
}

var updateProfile = async (req, resp) => {
  if (req.files != null) {
    if (req.files.ppic != null) {
      var ppicPath = path.join(__dirname, "..", "uploads", req.files.ppic.name);
      req.files.ppic.mv(ppicPath);
      req.body.ppic = req.files.ppic.name;
    }
  }

  if (req.files != null) {
    if (req.files.ipic != null) {
      var ipicPath = path.join(__dirname, "..", "uploads", req.files.ipic.name);
      req.files.ipic.mv(ipicPath);
      req.body.ipic = req.files.ipic.name;
    }
  }
  clientProfileModel.updateOne({ email: req.body.email }, {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    mobile: req.body.mobile,
    ppic: req.body.ppic,
    ipic: req.body.ipic,


  }).then((result) => {
    if (result.acknowledged === true)
      resp.send("Updated Successfully");
    else
      resp.send(result);
  })
}

async function checkEmail(req, resp) {
  clientProfileModel.findOne({ email: req.body.email }).then((rep) => {
    if (rep != null)
      resp.send(rep)
    else (resp.send(null));
  })
}

var postServant = async (req, resp) => {
  var obj = new RefModel(req.body);
  await obj.save().then((doc) => {
    resp.send("Request is Posted Successfully...");
  }).catch((err) => {
    resp.send(err);
  })
}

var fetchProvider = (req, resp) => {
  ServantProfileModel.find({}).then((doc) => {
    resp.send(doc);
  }).catch((err) => {
    console.log(err);
  })
}

var fetchServant = async (req, resp) => {
  try {
    const { category, city } = req.body;
    if (!category || !city) {
      return resp.send("Category and city are required in the request.");
    }
    const servants = await ServantProfileModel.find({ city, category });
    resp.send(servants);
  } catch (error) {
    console.error("Error fetching servants:", error);
    resp.status(500).send("Internal Server Error: " + error.message);
  }
};

var getServantRecord = async (req, resp) => {
  try {
    const record = await ServantProfileModel.findOne({ "email": req.body.email });
    resp.send(record);
  } catch (err) {
    console.log("Error fetching servant Record: ", err);
  }
}

module.exports = { submitProfile, checkEmail, updateProfile, postServant, fetchProvider, fetchServant, getServantRecord }