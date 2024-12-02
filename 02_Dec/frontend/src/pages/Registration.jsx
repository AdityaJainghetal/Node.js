
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd";
const Registration=()=>{
  const [input, setInput] =useState({});


  const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setInput(values=>({...values, [name]:value}));
     
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/users/registration";
    axios.post(api, input).then((res)=>{
        message.success(res.data.msg);
    })
  }

  return(
    <>
      <h1> User Registration</h1>
      

      <Form style={{width:"50%", border:"2px solid black", marginLeft:"350px", padding:"30px", borderRadius:"10px" , textAlign:"center", background:"whitesmoke",fontSize: "20px",fontWeight:"600"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter mobile</Form.Label>
        <Form.Control type="text"  name="mobile" value={input.mobile} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name="email" value={input.email} onChange={handleInput}  /> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password"  name="password" value={input.password} onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

    
    </>
  )
}

export default Registration;