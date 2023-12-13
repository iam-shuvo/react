import { BrowserRouter , Routes , Route} from "react-router-dom";
import "./App.css";

import Navigation from "./components/navigation";
//pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Login_admin from "./pages/Login_admin"
import Login_photo from "./pages/Login_photo"
import Login_edit from "./pages/login_edit"
import Login_user from "./pages/Login_user"
import Login_cine from "./pages/Login_cine"
import Admin_tb from "./pages/admin_tb"
import Sign_ad from "./pages/sign_ad";
import Adduser from "./pages/Adduser";
import Userlist from "./pages/Userlist"
import Ad_side from "./pages/Sidebar";
import Edituser from "./pages/Edituser";
import Addpg from "./pages/add_pg";
import Pglist from "./pages/pglist";
import Editpg from "./pages/editpg";





const App = ()=> {


return(
  <BrowserRouter>
  <Navigation/>
  
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login_admin" element={<Login_admin/>} />
    <Route path="/admin_tb" element={<Admin_tb/>} />
    <Route path="/login_photo" element={<Login_photo/>} />
    <Route path="/login_cine" element={<Login_cine/>} />
    <Route path="/login_edit" element={<Login_edit/>} />
    <Route path="/login_user" element={<Login_user/>} />
    <Route path="/sign_ad" element={<Sign_ad/>} />
    <Route path="/add_user" element={<Adduser/>} />
    <Route path="/userlist" element={<Userlist/>} />
    <Route path="/addside" element={<Ad_side/>} />
    <Route path="/addpg" element={<Addpg/>} />
    <Route path="/pglist" element={<Pglist/>} />
    
    
    <Route path="/edituser/:id" element={<Edituser/>} />
    <Route path="/editpg/:id" element={<Editpg/>} />
    
  
    
    <Route path="*" element={<Error/>} />

    
  </Routes>


</BrowserRouter>


);


}

export default App; 