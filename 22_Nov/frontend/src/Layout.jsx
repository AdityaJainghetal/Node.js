import {Link, Outlet}  from "react-router-dom";

const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link> |
          <Link to="insert">Insert</Link> |
          <Link to="display">Display</Link>|
          <Link to="Search">Search</Link>|
          <Link to="Deleted">Delated</Link>|
          <Link to="update">Update</Link>

          <hr size="4" color="red" />

          <Outlet/>

 <br/>
          www.mycompany.com 
        
        </>
    )
}

export default Layout;