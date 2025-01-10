import {Link, Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
           <Link to="home">Home</Link> |
           <Link to="login"> Login</Link> |
           <Link to="registration ">Registration </Link>
           <Link to="dashboard">Dashboard</Link>

           <hr size="4" color="red"/>
  <Outlet/>


           <hr size="4" color="red"/>
           www.mycompany.com
        
        </>
    )
}

export default Layout;