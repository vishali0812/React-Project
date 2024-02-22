import React,{useEffect} from 'react'
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../css/clientProfile.css"
import NavBarClient from './navClient';

function ProfileForm() {
  var [obj,updateObj] = React.useState({email: "",name: "",mobile: "",address: "", city: "",ppic: "",ipic: ""});
    var [src1,setSrc1] = React.useState("");
    var [src2,setSrc2] = React.useState("");
    var [dis1,setDisplay1] = React.useState('none');
    var [dis2,setDisplay2] = React.useState('none');
 
    var doUpdate=(event)=>{
        if(event.target.name==='email')
        updateObj({...obj, ["email"]: event.target.value});
        if(event.target.name==='name')
        updateObj({...obj, ["name"]: event.target.value});
        if(event.target.name==='mobile')
        updateObj({...obj, ["mobile"]: event.target.value});
        if(event.target.name==='city')
        updateObj({...obj, ["city"]: event.target.value});
        if(event.target.name==='address')
        updateObj({...obj, ["address"]: event.target.value});
    }
  var doSubmit = async()=>
  {
    const config = {
      method: 'post',
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const url = "http://localhost:2006/client/clientProfileSubmit";
    var formData=new FormData();
    for(var x in obj)
      {
        formData.append(x,obj[x]);
      }
    try { 
      const resp = await axios.post(url, formData, config);
                alert((resp.data));
    } catch (error) {
      alert('Error While validating Email: ' + error.message);
    }
  }

  useEffect(() => {
    if(localStorage.getItem("active_user_email")!== undefined)
    updateObj({...obj, ["email"]: localStorage.getItem("active_user_email")});
  }, []);
  
  useEffect(() => {
    chkEmail();
  }, [obj.email]);

var chkEmail= async () =>  {
          const url = "http://localhost:2006/client/checkEmail";
          const data =({
            email: obj.email,
          });
        
          try {
            const resp = await axios.post(url, data);
            if(resp.data !== "")
            {
                setDisplay2("block");
                setDisplay1("none");
                updateObj({
                  ...obj,
                  address: resp.data.address,
                  name: resp.data.name,
                  mobile: resp.data.mobile,
                  city: resp.data.city,
                  ppic: resp.data.ppic, 
                  ipic: resp.data.ipic   
                });
                setSrc1("http://localhost:2006/uploads/"+resp.data.ppic);
                setSrc2("http://localhost:2006/uploads/"+resp.data.ipic);
            }
            else {
              setDisplay1("block");
              setDisplay2("none");
            }
          } catch (error) {
            alert('Error While validating Email: ' + error.message);
          }

}

  var doProfileUpdate= async ()=>{
    const config = {
      method: 'post',
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const url = "http://localhost:2006/client/clientProfileUpdate";
    var formData=new FormData();
    for(var x in obj)
      {
        formData.append(x,obj[x]);
      }
    try { 
      const resp = await axios.post(url, formData, config);
                alert((resp.data));
    } catch (error) {
      alert('Error While validating Email: ' + error.message);
    }
  }

    const Preview1=(event)=>{
      updateObj({...obj,["ppic"]:event.target.files[0]});
        const [file] = event.target.files;
        if(file)
        setSrc1(URL.createObjectURL(file));
    }

    const Preview2=(event)=>{
      updateObj({...obj,["ipic"]:event.target.files[0]});
        const [file] = event.target.files;
        if(file)
        setSrc2(URL.createObjectURL(file));
    }

    return (
    <>
    <NavBarClient />
    <br />
    <center><h1>Profile-Form</h1></center>
    <br />
    <FloatingLabel 
        controlId="floatingInput"
        label="Email address"
        className="mb-3 textBox"
      >
        <Form.Control type="email" placeholder="Enter Email Address" readOnly name='email' onBlur={chkEmail}  value={obj.email} onChange={doUpdate}/>
      </FloatingLabel>
    <br />
    <FloatingLabel 
        controlId="floatingInput"
        style={{float: 'left'}} 
        label="Name"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Name" value={obj.name} name='name' onChange={doUpdate}/>
      </FloatingLabel>
      <FloatingLabel  style={{float: 'left'}}
        controlId="floatingInput"
        label="Mobile Number"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Mobile Number" value={obj.mobile} name='mobile' onChange={doUpdate}/>
      </FloatingLabel>
      <br /> <br /> <br /><br />
      <FloatingLabel  style={{float: 'left', width: '50%'}}
        controlId="floatingInput"
        label="Address"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Address" value={obj.address} name='address' onChange={doUpdate}/>
      </FloatingLabel>
      <FloatingLabel  style={{float: 'left', width: '30%'}}
        controlId="floatingInput"
        label="City"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter City" value={obj.city} name='city' onChange={doUpdate}/>
      </FloatingLabel>
      <br />
      <Form.Group controlId="formFile" className="mb-3 textBox" style={{float: 'left'}}>
        <Form.Label style={{fontSize: '20px'}}>Upload Profile Pic</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={Preview1} name='ppic'/>
        <br />
        <h4>Preview:</h4>
        <img src={src1} alt="No Profile-Pic Uploaded yet" style={{width:'20%',height:'10%'}}/>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3 textBox" style={{float: 'left'}}>
        <Form.Label style={{fontSize: '20px'}}>Upload Id-Proof Pic</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={Preview2} name='ipic'/>
        <br />
        <h4>Preview:</h4>
        <img src={src2} alt="No Id-Proof Uploaded yet" style={{width:'20%',height:'10%'}} />
        <br /><br /><br />
      <Button variant="outline-primary" style={{display: dis1,float:'left'}} size='lg' onClick={doSubmit}>Submit</Button> 
      <Button variant="outline-primary" size='lg' style={{display: dis2,float:'left'}} onClick={doProfileUpdate}>Update</Button>
      </Form.Group>
    </>
  )
}

export default ProfileForm
