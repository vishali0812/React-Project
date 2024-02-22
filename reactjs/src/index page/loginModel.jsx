import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Modal1 from '@mui/material/Modal';
import Modal from 'react-bootstrap/Modal';
import Button1 from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import axios from "axios";
import { loginServiceWithToken,ForgotPwdService } from '../services/user';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
  button: {
    width: 'max-content',
    height: "30px",
    fontSize: "19px",
   size: "300",
   float: 'right',
   border: "3px solid ",
  },
  signupTxt: {
    width: "100%",
  },
  signupPwdTxt: {
    width: "70%",
  }
  
};




export default function LoginModal({ onLogin }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [showPassword, setShowPassword] = React.useState(false);
  const [email,updateEmail] = React.useState("");
  const [pwd,updatePwd] = React.useState("");

  const doUpdate = (event) => {
    if (event.target.name === "EmailId") {
      updateEmail(event.target.value);
    }
    else if (event.target.name === "pwd") {
      updatePwd(event.target.value);
    }
  };
  
  
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
const doLogin = async () => {

 if(email==="")
 {
   alert("Please Enter Valid Email-Id");
   return;
 }
 if(pwd==="")
 {
  alert("Please Enter Password");
  return;
 }
  const url = "http://localhost:2006/user/login";
  const loginData = ({
    email: email,
    pwd: pwd,
  });

  try {
    const resp = await axios.post(url, loginData);
    if(resp.data.status === true)
   { 
    localStorage.setItem("active_user_token",resp.data.token);
    localStorage.setItem("active_user_email",resp.data.rep.email);
    onLogin(resp.data.rep.type);
    handleClose();
   }
  else
  alert((resp.data.message));
  } catch (error) {
    alert('Error signing up: ' + error.message);
  }
}

var openModel = async () => {
  try {
      const resp = await loginServiceWithToken();
      if (resp.data.status) {
          onLogin(resp.data.rep.type);
          localStorage.setItem("active_user_email", resp.data.rep.email);
      } else {
          handleOpen();
      }
  } catch (error) {
      console.error("Error:", error);
  }
};


  return (
    <div>
      <Button1 variant='outline-secondary' onClick={openModel} >LOGIN</Button1>
      <Modal1
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Modal.Dialog>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <TextField name="EmailId" style={style.signupTxt} type='email' onChange={doUpdate} label="Email-Id" variant="outlined" /> <br /><br />
        <FormControl sx={{ m: 0, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name='pwd'
            onChange={doUpdate}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          </FormControl> <br />
      </Modal.Body>
        <Modal.Footer>
          <Button1 variant="contained" style={{background: "green",color: "white",fontWeight: "bold"}} onClick={handleClose}>Close</Button1>
          <Button1 variant="primary" onClick={doLogin} >Login</Button1>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal1>
      </div>
    
  );
}
