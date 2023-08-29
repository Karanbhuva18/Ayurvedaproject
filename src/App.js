import React from 'react';
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
// import Topbar from './Components/navbar/topbar';
import Main from './Components/Home/Main';
import Single from './Components/Home/Single';
import Navbar from './Components/navbar/Nav'; // Correct the imported component name
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
        {/* Conditionally render the Navbar */}
        <RenderNavbar />
        
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/About" element={<Aboutus />} />
          <Route path="/Diseaseinfo" element={<Diseaseinfo />} />
          <Route path="/Single" element={<Single />} />
          <Route path="/Question" element={<Qustion />} />
          <Route path="/login" element={<LoginForm />} />
          
          {/* Default route */}
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const RenderNavbar = () => {
  const location = useLocation();
  
  // Check if the current route is not the signup or login page
  if (location.pathname !== '/' && location.pathname !== '/login') {
    return (
      <Navbar /> 
    );
  }
  
  return null; // Don't render Navbar on signup and login pages
};

export default App;
