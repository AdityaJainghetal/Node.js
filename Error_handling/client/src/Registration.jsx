import React, { useState } from 'react'
import  axios  from 'axios';


const Registration = () => {
    const [input,setInput] = useState({});

    const handleinput=(e)=>{
        let name = e.target.name;
        let value= e.target.value;

        setInput(values=>({...values,[name]:value}))
        
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/user/registration"
        axios.post(api, input).then((res)=>{
            alert("Registration successfully")
        })

    }

  return (
    <>
    
    <h1>Registration</h1>
    Enter your name: <input type="text" name="username" value={input.username}  onChange={handleinput}/>
    <br />
    Enter your email: <input type="text"  name="email" value={input.email} onChange={handleinput}/>
    <br />
    Enter your password: <input type="password" name="password" value={input.password} onChange={handleinput}/>    
    <br />
    <button onClick={()=>{handleSubmit()}}>Registration</button>
    
    </>
  )
}

export default Registration