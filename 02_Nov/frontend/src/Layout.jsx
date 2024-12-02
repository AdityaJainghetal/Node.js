import {Outlet}  from "react-router-dom";
import Header from "./components/Header";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

const Layout=()=>{
    return(
      <>
          <Header/>
          <TopMenu/>
        


          <Outlet/>


          <Footer/>
      </>
    )
}

export default Layout;