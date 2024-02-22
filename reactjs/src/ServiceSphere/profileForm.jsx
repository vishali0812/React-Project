import React from 'react'
import axios from 'axios'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../css/clientProfile.css"
import NavBarService from './NavBarService';
function ProfileForm() {
  var [obj,doUpdateobj] = React.useState({
    email: "",name:"",mobile:"",address:"",city:"",ipic:"",ppic:"",category:"",expert:"",exp:"",shop:"",dis:""
  })
  var [src1,setSrc1] = React.useState("");
  var [src2,setSrc2] = React.useState("");
  var [dis1,setDisplay1] = React.useState('none');
  var [dis2,setDisplay2] = React.useState('none');
  var doUpdate=(event)=>{
    var name =event.target.name;
    var value =event.target.value;
    doUpdateobj({...obj ,[name]:value});
  }

  var chkEmail= async () =>  {
    const url = "http://localhost:2006/service/checkEmail";
    const data =({
      email: obj.email,
    });
  
    try {
      const resp = await axios.post(url, data);
      if(resp.data !== "")
      {
          setDisplay2("block");
          setDisplay1("none");
          doUpdateobj({
            ...obj,
            address: resp.data.address,
            name: resp.data.name,
            mobile: resp.data.mobile,
            city: resp.data.city,
            ppic: resp.data.ppic, 
            ipic: resp.data.ipic,
            category: resp.data.category,
            expert: resp.data.expert,
            exp:resp.data.exp,
            shop:resp.data.shop,
            dis: resp.data.dis   
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
React.useEffect(() => {
  if(localStorage.getItem("active_user_email")!== undefined)
  doUpdateobj({...obj, ["email"]: localStorage.getItem("active_user_email")});
}, []);

React.useEffect(() => {
  chkEmail();
}, [obj.email]);


  var doSubmit=async()=>{
    alert(JSON.stringify(obj));
    const config = {
      method: 'post',
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const url = "http://localhost:2006/service/serviceProfileSubmit";
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
  var doProfileUpdate=async()=>{
    const config = {
      method: 'post',
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const url = "http://localhost:2006/service/serviceProfileUpdate";
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
    doUpdateobj({...obj,["ppic"]:event.target.files[0]});
      const [file] = event.target.files;
      if(file)
      setSrc1(URL.createObjectURL(file));
  }

  const Preview2=(event)=>{
    doUpdateobj({...obj,["ipic"]:event.target.files[0]});
      const [file] = event.target.files;
      if(file)
      setSrc2(URL.createObjectURL(file));
  }
  return (
    <>
    <NavBarService />
    <br />
  <center><h1>Profile-Form</h1></center>
    

<br />
<FloatingLabel 
        controlId="floatingInput"
        label="Email address"
        className="mb-3 textBox"
      >
        <Form.Control type="email" placeholder="Enter Email Address" readOnly name='email' onBlur={chkEmail}   value={obj.email} onChange={doUpdate}/>
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
      <br /><br /><br /><br />
      <Form.Group controlId="categoryCombo" className="mb-3 textBox" style={{float: 'left', width: '40%'}}>
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Select Category"
            name="category"
            value={obj.category}
            onChange={doUpdate}
          >
            <option value="">Select Category</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="carpenter">Carpenter</option>
            <option value="painter">Painter</option>
            <option value="mason">Mason</option>
            <option value="handyman">Handyman</option>
            <option value="gardener">Gardener</option>
            <option value="house-cleaner">House Cleaner</option>
            <option value="pest-control">Pest Control</option>
            <option value="hvac-technician">HVAC Technician</option>
            <option value="locksmith">Locksmith</option>
            <option value="interior-designer">Interior Designer</option>
            <option value="roofer">Roofer</option>
            <option value="flooring-specialist">Flooring Specialist</option>
            <option value="appliance-repair">Appliance Repair</option>
            <option value="auto-mechanic">Auto Mechanic</option>
            <option value="computer-technician">Computer Technician</option>
            <option value="tutor">Tutor</option>
            <option value="personal-trainer">Personal Trainer</option>
            <option value="event-planner">Event Planner</option>

          </Form.Select>
        </Form.Group>
      <FloatingLabel  style={{float: 'left'}}
        controlId="floatingInput"
        label="Expert In"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Expert In" value={obj.expert} name='expert' onChange={doUpdate}/>
      </FloatingLabel>
      <br /> <br /><br /><br />
      <FloatingLabel  style={{float: 'left', width: '50%'}}
        controlId="floatingInput"
        label="Shop/Office Address"
        className="mb-3 textBox"
      >
        <Form.Control type="text" placeholder="Enter Shop/Office Address" value={obj.shop} name='shop' onChange={doUpdate}/>
      </FloatingLabel>
      <FloatingLabel  style={{float: 'left', width: '30%'}}
        controlId="floatingInput"
        label="Experience"
        className="mb-3 textBox"
      >
        <Form.Control type="number" placeholder="Enter Experience" value={obj.exp} min='0' name='exp' onChange={doUpdate}/>
      </FloatingLabel>
      <br /><br /><br /><br />
      <FloatingLabel  style={{float: 'left', width: '85%'}}
        controlId="floatingInput"
        label="Description"
        className="mb-3 textBox"
      >
        <Form.Control style={{height: '30%'}} type="text" as="textarea" placeholder="Enter Description" value={obj.dis} min='0' name='dis' onChange={doUpdate}/>
      </FloatingLabel>
      <br /><br /><br /><br />
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
        <br /><br />
        <br /><br /><br />
      <Button variant="outline-primary" style={{display: dis1,float:'left'}} size='lg' onClick={doSubmit}>Save</Button> 
      <Button variant="outline-primary" size='lg' style={{display: dis2,float:'left'}} onClick={doProfileUpdate}>Modify</Button>
        </Form.Group>

</>
  )
}

export default ProfileForm;