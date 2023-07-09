import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Topbar from './Components/navbar/topbar';
import Header from './Components/header/Header';
import Main from './Components/Home/Main';
import Single from './Components/Home/Single';
import Nav from './Components/navbar/Nav';
import Write from './Components/Write/Write';
import Ques from './Components/queandans/Ques';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Topbar /> */}
        <Nav />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Single" element={<Single />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //     <Ques />
 
    // </div>
  );
};

export default App;
