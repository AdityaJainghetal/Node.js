import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [username, Setusername] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        Setusername(localStorage.getItem("uname"))
    },[])

    const logout=()=>{
        localStorage.clear()
        navigate("/home")
    }


  return (
    <>
    <h1>Welcome to dashboard:{username}</h1>
   
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Dashboard