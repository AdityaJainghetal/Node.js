import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email,setEmail] = useState("")    
    const [password, Setpassword]= useState("");


    const navigate = useNavigate()

    const handleSubmit=()=>{
        let api="http://localhost:8000/user/login"
        axios.post(api, {email:email, password:password}).then((res)=>{
            localStorage.setItem("auth-token", res.data.token)
            localStorage.setItem("uname",res.data.user.username)

            navigate("/dashboard")
          
           
            alert("Login successfully")
        })   
        .catch((err)=>{
          console.log(err.response.data.error);
          alert(err.response.data.error)
        })
    }

  return (
    <>
     <h1>Login</h1>


    Enter your email: <input type="text"  name="email"  onChange={(e)=>{setEmail(e.target.value)}}/>
    <br />
    Enter your password: <input type="password" name="password"  onChange={(e)=>{Setpassword(e.target.value)}}/>    
    <br />
    <button onClick={()=>{handleSubmit()}}>Login</button>
    
    
    </>
  )
}

export default Login