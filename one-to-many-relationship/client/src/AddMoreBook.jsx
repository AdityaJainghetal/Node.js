import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const AddMoreBook=()=>{
    const {id} = useParams();
    const [input, setInput] =useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
    }
    const handleSubmit=()=>{
     let api="http://localhost:8000/books/morebooksave";
     axios.post(api,{aid:id, ...input}).then((res)=>{
        alert("Data save!!!");
     })
    }
    return(
        <>
          <h1> Add More Book :</h1>   
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
export default AddMoreBook;