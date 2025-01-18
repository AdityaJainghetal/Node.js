import { Outlet} from "react-router-dom";
import Header from './component/Header';
import Footer from "./component/Footer";

const Layout=()=>{
    return(
        <>
           <Header/>
  <Outlet/>


           <hr size="4" color="red"/>
          <Footer/>
        
        </>
    )
}

export default Layout;