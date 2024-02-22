import axios from "axios";

let baseURL = "http://localhost:2006";

const publicReq=axios.create({baseURL,});

const privateReq=axios.create({baseURL,});

const imageUpload = axios.create({baseURL,});

privateReq.interceptors.request.use((config) => {
    const token = localStorage.getItem("active_user_token");
    if (token) {
    
    config.headers.Authorization = `${token}`;
     }
    return config;    
    });

export {publicReq,privateReq,imageUpload};