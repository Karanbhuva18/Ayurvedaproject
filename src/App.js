import React from "react";

import Sideb from "./sidebar/Sideb";
import Blog from "./sidebar/Blog";
import Mainblog from "./sidebar/Mainblog";
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Qustion from "./qpopup/Qustion";
import Nav from './navbar/Nav';
// import Card from './card/Card';

import Signup from "./Signup_page/Signup";
import Qmodal from "./QNA/Qmodal";
import Loginform from "./loginpage/LoginForm";
function App() {
  return (
    <>
    
        
  
       
    
    
   
       
         {/* <Qustion/>
         <Signup/> 
        <Loginform/> */}
        
      {/* <div className="d-flex justify-content-around blogsecction">
        <Blog></Blog>
       <Sideb/>
      </div> */}
{/* <Qustion/> */}

<BrowserRouter>
      {/* <div> */}
        {/* <Topbar /> */}
         <Nav />
        
        <Routes>
          <Route path="/" element={ <Mainblog /> } />
          <Route path="/Question" element={ <Qustion />} />
           <Route path="/singup" element={ <Signup /> } />
         </Routes>
       {/* </div> */}
     </BrowserRouter>


    </>
  );
}

export default App;
