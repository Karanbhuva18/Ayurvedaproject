import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='headerTitles'>
          <span className='headerTitleSm'>Welcome To Our Blog Page</span>
          <span className='headerTitleLg'>Blog on Ayurveda</span>
        </div>
        <img
          className='headerImg'
          src='https://media.seniority.in/mageplaza/blog/post/ktpl_blog/Main-Ayurveda.jpg'
          alt='img'
        />
      </div>
    </>
  );
};

export default Header;
