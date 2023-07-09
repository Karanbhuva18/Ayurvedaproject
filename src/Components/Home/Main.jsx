import React from 'react';
// import Topbar from '../navbar/topbar'
import Header from '../header/Header';
import Posts from '../posts/Posts';
import Sidebar from '../sidebar/Sidebar'
// import Sideb from '../sidebar/Sideb';
import './main.css';

const Main = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
        {/* <Sideb /> */}
      </div>
    </>
  );
};

export default Main;
