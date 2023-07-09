import React from 'react';
import './sideb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sideb = () => {
  return (
    <div className="container">
      <div className="Profile-container">
        <div className="ronaldo-image">
          <img src="ronaldo.jpg" alt="ronaldo"></img>
        </div>
        <h2>ronaldo</h2>
        <p className="proffesion">Player</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
          inventore praesentium exercitationem perferendis
        </p>

        <div className="Social-media">
          <div className="insta">
            <i className="bi bi-instagram"></i>
          </div>
          <div className="twit">
            <i className="bi bi-twitter"></i>
          </div>
          <div className="like">
            <i className="bi bi-heart"></i>
          </div>
        </div>
        <div className="btnf">
          <button className="btn btn-primary">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Sideb;
