import { useState, useEffect } from "react";
import axios from "axios";
import myimg from "../pages/download.jpeg";

const Delete=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8080/students/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data)
            console.log(res.data);
        })
      
    }
    useEffect(()=>{
        loadData();
    }, [])


    const myDel=(id)=>{
        let api = "http://localhost:8080/students/recorddelete";
        axios.post(api,{myid:id}).then((res)=>{
            alert("Data deleted");
        })
    
        loadData()
    }

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.rollno} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
                <td>
                    <a href="#" onClick={()=>{myDel(key._id)}}>
                        <img src={myimg} alt="" width="60" height="40"/>
                    </a>
                </td>
              </tr>
            </>
        )
    })
    return(
        <>
          <h1> Display page</h1>
          <hr/>

          <table border="1" style={{backgroundColor:"aqua", color:"black", width:"1000px", textAlign:"center"}}>
            <tr style={{color:"black", fontSize:"20px", backgroundColor:"red"}}>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Deleted</th>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Delete;