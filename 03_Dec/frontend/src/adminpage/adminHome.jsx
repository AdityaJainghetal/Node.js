 import { useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 
 const AdminHome=()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        const Uname= window.localStorage.getItem("UserName");
        const Uemail = window.localStorage.getItem("userEmail");

        if(!Uname){
            navigate("/home")
        }

    },[])

    return(
        

        <>
        <h1>Welcome to admin about page</h1>
        
        </>
    )
 }

 export default AdminHome;