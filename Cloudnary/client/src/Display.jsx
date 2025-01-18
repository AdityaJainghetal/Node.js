import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [mydata, SetMydata] = useState([])


    const loadData =()=>{
        let api = "http://localhost:8000/mycloudenary/datadisplay";
        axios.get(api).then((res)=>{
            SetMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData()
    },[])

    const ans= mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>
                    <img src={key.images} width="100" height="100" />
                </td>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                
            </tr>
            
            </>

        )
    })


  return (
    <>
    <div>Display</div>
    <table>
        <tr>
            <th></th>
            <th>Roll no</th>
            <th>Name</th>
            <th>City</th>
        </tr>
        {ans}
    </table>
    
    </>
    
    



)
}

export default Display