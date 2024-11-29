
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Edit=()=>{
    const {id} =useParams();
   const [mydata, setMydata]= useState({});

    const loadData=()=>{
        let api=`http://localhost:8080/students/editdisplay/?id=${id}`;

         axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
         })
    }
useEffect(()=>{
    loadData();
}, [])

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}))
}

const handleSubmit=()=>{
    let api="http://localhost:8080/students/editsave";
    axios.post(api, {id:id, ...mydata}).then((res)=>{
        alert("Data updated!!!");

    })
}

    return(
        <>
         <h1> Edit your Data </h1>

         Edit Rollno : <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput} />
         <br/>
         Edit Name : <input type="text" name="name" value={mydata.name} onChange={handleInput} />
         <br/>
         Edit City : <input type="text" name="city" value={mydata.city} onChange={handleInput} />
         <br/>
         Edit Fees : <input type="text" name="fees" value={mydata.fees}  onChange={handleInput}/>
         <br/>
         <button onClick={handleSubmit}> Update!!!</button>
        </>
    )
}
export default Edit;
