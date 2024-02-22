import {privateReq, publicReq} from "./axios-config"

const signupService=(data)=>{
   return publicReq.post("/user/signup",data);
}

const loginServiceWithToken=()=>{
   return privateReq.get("user/loginMiddleWare");
}

const otpService=(data)=>{
   return publicReq.post("/user/requestOtp",data);
}


export {signupService,loginServiceWithToken,otpService};