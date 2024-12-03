import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import AdminHome from "./adminpage/adminHome";
import AdminAbout from "./adminpage/adminAbout";


const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>}/>
              <Route path="registration" element={<Registration/>}/>
             
            </Route>
          </Routes>

            <Routes>
              
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="adminhome" element={<AdminHome/>}/>
              <Route path="adminabout" element={<AdminAbout/>}/>

            </Routes>




        </BrowserRouter>
    </>
  )
}

export default App;