import React from 'react';

const topbar = () => {
  return (
    <>
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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center col-5 top-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#23914E' }}>
                  Offer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#23914E' }}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#23914E' }}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#23914E' }}>
                  Reference
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto top-right d-flex justify-content-end col-3 flex-4">
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="fa-solid fa-magnifying-glass" style={{ color: '#5E9699' }}></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="fa-brands fa-instagram" style={{ color: '#5E9699' }}></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="fa-brands fa-facebook" style={{ color: '#5E9699' }}></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" style={{ color: '#5E9699' }}>
                  <i className="fa-brands fa-twitter" style={{ color: '#5E9699' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section: Design Block */}
      
    </>
  );
}

export default topbar;
