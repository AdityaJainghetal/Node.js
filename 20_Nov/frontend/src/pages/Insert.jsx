import { useState } from "react";
import axios from "axios";

const Insert=()=>{
    const [input, setInput] =useState({})


    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
    }

    const handleSubmit=()=>{
        let api="http://localhost:8080/students/datasave";
        axios.post(api, input).then((res)=>{
            alert("data save!");
        })
    }


    return(
        <>
          <h1> Insert page</h1>
          Enter Rollno: <input type="text" name="rollno" onChange={handleInput} />
          <br/>
          Enter Name: <input type="text" name="name" onChange={handleInput} />
          <br/>
          Enter City: <input type="text" name="city" onChange={handleInput} />
          <br/>
          Enter Fees: <input type="text" name="fees" onChange={handleInput} />
          <br/>
          <button onClick={handleSubmit}> Data save!</button>
        </>
    )
}

export default Insert;