import React from 'react'
import './sidebar.css';
const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src='https://cdn.pixabay.com/photo/2014/09/21/17/56/mountaineering-455338_640.jpg' alt=''/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquam voluptatum optio quas adipisci. Cum temporibus consequuntur est, 
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                  <li className='sidebarListItem'>Life</li>
                  <li className='sidebarListItem'>Music</li>
                  <li className='sidebarListItem'>Style</li>
                  <li className='sidebarListItem'>Sport</li>
                  <li className='sidebarListItem'>Tech</li>
                  <li className='sidebarListItem'>Cinema</li>
                </ul>
            </div>
            <div className='sidebarItem'>
              <span className='sidebarTitle'>FOLLOWUS</span>
              <div className='sidebarSocial'>
              <i className="fa-brands fa-instagram" style={{ color: '#5E9699' }}></i>
              <i className="fa-brands fa-facebook" style={{ color: '#5E9699' }}></i>
              <i className="fa-brands fa-twitter" style={{ color: '#5E9699' }}></i>
              <i className="fa-brands fa-pinterest-square" style={{ color: '#5E9699' }}></i>
              </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar
