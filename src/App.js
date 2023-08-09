import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Topbar from './Components/navbar/topbar';
// import Header from './Components/header/Header';
import Main from './Components/Home/Main';
import Single from './Components/Home/Single';
import Nav from './Components/navbar/Nav';
import Write from './Components/Write/Write';
import Qustion from './Components/qpopup/Qustion';
import Homepage from './Components/HomePage/Homepage';
import Diseaseinfo from './Components/Diseasecollection/Diseaseinfo';
import Aboutus from './Components/Aboutus/Aboutus';
import LoginForm from './Components/loginpage/LoginForm';
import Signup from './Components/Signup_page/Signup';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Topbar /> */}
        <Nav />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/About" element={<Aboutus/>} />
         <Route path="/Diseaseinfo" element={<Diseaseinfo />} />
         <Route path="/Single" element={<Single/>} />
         <Route path="/Question" element={<Qustion />} />
         <Route path="/login" element={<LoginForm />} />
         <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
        // <Ques />
       // <Aboutus /> */}
       // {/*  */}
        
       // {/* <Questionnpost />  */}
   // {/* </div> */}
  );
};

export default App;
