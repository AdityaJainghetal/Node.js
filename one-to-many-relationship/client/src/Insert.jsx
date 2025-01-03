import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] =useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }

    const handleSubmit=()=>{
     let api="http://localhost:8000/books/datasave";
     axios.post(api, input).then((res)=>{
        alert("Data save!!!");
     })
    }

    return(
        <>
          <h1> Insert book Data</h1>

          Enter Auther Name : <input type="text" name="authname" 
          value={input.authname}  onChange={handleInput}/>
          <br/>
          Enter Book Title : <input type="text" name="booktitle" 
          value={input.booktitle}  onChange={handleInput}/>
          <br/>
          Enter Price : <input type="text" name="bookprice"
          value={input.bookprice}  onChange={handleInput}/>
          <br/>
          <button onClick={handleSubmit}>Save!</button>
        </>
    )
}

export default Insert;