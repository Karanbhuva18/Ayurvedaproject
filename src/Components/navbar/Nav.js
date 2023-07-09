import React from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
       {/* Navbar */}
       <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0" style={{ backgroundColor: '#F3F5F5', position: 'fixed', top: '0', left: '0', right: '0', zIndex: '999', transform: 'translateZ(0)' }}>
        <div className="container row">
          <a className="navbar-brand col-4" href="#!" style={{ color: '#5e9693' }}>
            <span>Ayurveda</span>
            <span style={{ color: '#094A6E' }}>life</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center col-5 top-center" id="navbarSupportedContent">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink to="/" className="nav-link"  style={{ color: '#23914E' }}>
                  Main
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/Write" className="nav-link"  style={{ color: '#23914E' }}>
                  write
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink  to="/Single" className="nav-link"  style={{ color: '#23914E' }}>
                  Single
                </NavLink>
              </li>

             

            </ul>

            <ul className="navbar-nav ml-auto top-right d-flex justify-content-end col-5 flex-5">
            
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="bi bi-instagram" style={{ color: '#5E9699' }}></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="bi bi-facebook" style={{ color: '#5E9699' }}></i>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="bi bi-twitter" style={{ color: '#5E9699' }}></i>
                </a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="fa-brands fa-twitter" style={{ color: '#5E9699' }}></i>
                </a>
              </li> */}

             

            </ul>
            <div className="input-wrapper">
  <button className="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="25px"
      width="25px"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="#5E9699"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="#5E9699"
        d="M22 22L20 20"
      />
    </svg>
  </button>
  <input placeholder="search.." className="input" name="text" type="text" />
</div>

          </div>
        </div>
      </nav>

      {/* Section: Design Block */}

     
    </div>
    
  )
}

export default Nav
