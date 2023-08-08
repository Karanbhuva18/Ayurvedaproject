import React from "react";
import "./sideb.css";

const Sideb = () => {
  return (
    <div className="side-fixe">
    <div className="sticky">
        <div className="Profile-container" style={{ zIndex: "10" }}>
          
            <img className="blog_image" src="shradha_sharma.jpeg" alt="writer image"/>
          
          <h2>shradha_sharma</h2>
          <p className="proffesion">Player</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            inventore praesentium exercitationem perferendis
          </p>

          <div className="Social-media">
            <div className="insta">
              <i class="bi bi-instagram"></i>
            </div>
            <div className="twit">
              <i class="bi bi-twitter"></i>
            </div>
            <div className="like">
              <i class="bi bi-heart"></i>
            </div>
          </div>
          

          
          <button className="btnf">Follow</button>
         
        </div>
    </div>
    </div>
  );
};

export default Sideb;
