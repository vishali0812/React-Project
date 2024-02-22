var webtoken = require("jsonwebtoken");
var signupModel = require("../models/signupModel");
var RefsignupModel = signupModel();


async function doSignup(req, resp) {
  try {
    const obj = new RefsignupModel(req.body);
    const savedDoc = await obj.save();
    resp.json({ status: true, message: "Signed Up Successfully..." });
  } catch (err) {
    if (err.code === 11000) {
      resp.json({ status: false, message: "Email already exists. Please use a different email." });
    } else {
      resp.json({ status: false, message: "An error occurred while signing up." });
    }
  }
}

async function doLogin(req, resp) {
  await RefsignupModel.findOne({ email: req.body.email }).then((rep) => {
    if (rep == null) {
      resp.json({ status: false, message: "Invalid Email-Id !!!.." })
      return;
    }
    else if (req.body.pwd != rep.pwd) {
      resp.json({ status: false, message: "Wrong Password" });
      return;
    }
    else if (rep.status == 1) {
      var token = webtoken.sign({ email: rep.email, pwd: rep.pwd, status: rep.status }, process.env.SEC_KEY, { expiresIn: '1h' });
      resp.json({ status: true, rep, token });
    }
    else if (rep.status != 1) {
      resp.json({ status: false, message: "User Blocked" });
    }
  })
}

async function doLoginWithToken(req, resp) {
  var token = req.headers['authorization'];
  if (token === undefined) {
    resp.json({ status: false, message: "Token is Empty" });
    return;
  }
  try {
    const user = webtoken.verify(token, process.env.SEC_KEY);
    if (user) {
      const rep = await RefsignupModel.findOne({ email: user.email });
      if (rep != null) {
        if (rep.status === '1') {
          resp.json({ status: true, rep });
          return;
        }
        else
          resp.json({ status: false, message: "User Blocked" });
      }
    }
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      resp.json({ status: false, message: 'Token has expired' });
    }
  }
}


module.exports = { doSignup, doLogin, doLoginWithToken };