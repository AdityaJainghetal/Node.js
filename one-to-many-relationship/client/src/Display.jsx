import { useState, useEffect } from "react";
import axios from "axios";
import  {useNavigate} from "react-router-dom";
const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const navigate= useNavigate();

    const loadData=()=>{
        let api="http://localhost:8000/books/datadisplay";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    }, [])


    const addMore=(aid)=>{
        navigate(`/addmore/${aid}`);
    }
    const ans=mydata.map(key=>{
        return(
            <>
               <tr>
                <td> {key.authername} </td>
                <td> 
                 {key.books.map(key1=>{
                    return(
                        <>
                           <p> title:  {key1.booktitle}  Price : {key1.price} </p>
                        </>
                    )
                 })}
                </td>   

                <td>
                    <button onClick={()=>{addMore(key._id)}}> Add More Book</button>
                </td>     
               </tr>
            </>
        )
    })
    return(
        <>
          <h1> Display</h1>
          <table border="1">
            <tr>
                <th> Authername</th>
                <th>Detail </th>
                <th></th>
            </tr>
            {ans}
          </table>       
        </>
    )
}
export default Display;