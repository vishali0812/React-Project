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
import Form1 from 'react-bootstrap/Form';
import { signupService } from '../services/user';
import validator from 'validator';
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

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, updateEmail] = React.useState("");
  const [pwd, updatePwd] = React.useState("");
  const [type, updateType] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const doUpdate = (event) => {
    if (event.target.name === "EmailId") updateEmail(event.target.value);
    else if (event.target.name === "pwd") updatePwd(event.target.value);
    else updateType(event.target.value);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const doSignup = async () => {

    if(!validator.isEmail(email)||email==="")
    {
      alert("Please Enter Valid Email-Id");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 if(!passwordRegex.test(pwd))
 {
  alert("Please Enter a Strong Password");
  return;
 }
 if(type==="")
 {
  alert("Please Select Type");
  return;
 }

    try {
      const resp = await signupService({ email, pwd, type });
      if (resp.data.status) {
        alert("Signed Up Successfully...");
      } else {
        alert("Error: " + resp.data.message);
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };


  return (
    <div>
      <Button1 variant='outline-secondary' onClick={handleOpen} >SIGNUP</Button1>
      <Modal1
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modal.Dialog>
  <Modal.Header closeButton onClick={handleClose}>
    <Modal.Title>Signup</Modal.Title>
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
    </FormControl>
    <br /><br />
    <div>
      <Form1.Select size="lg" onChange={doUpdate}>
        <option value="">Select Type</option>
        <option value="Service Provider">Service Provider</option>
        <option value="Service Seeker">Service Seeker</option>
      </Form1.Select>
    </div>
    <br />
  </Modal.Body>
  <Modal.Footer>
    <Button1 variant="contained" style={{ background: "green", color: "white", fontWeight: "bold" }} onClick={handleClose}>Close</Button1>
    <Button1 variant="primary" onClick={doSignup} >Signup</Button1>
  </Modal.Footer>
</Modal.Dialog>
      </Modal1>
    </div>
  );
}
