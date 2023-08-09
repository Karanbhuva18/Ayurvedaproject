import React from "react";

import "./signup.css";
const Signup = () => {
  return (
    <>
      {/* <div classname="main_both">
                    <div className="just">
                <div className="photo">
                <img  src="loginimg.jpg" style={{height:'350px', width:'auto' }}></img>
                </div>
               
        <div className="form">
          <form >
                    <div className="hading"><h2>welcome</h2></div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="email_filed">
                    <input type="text" name="email" id="email" />
                    </div>

           
                        <div className="password">
                                    <label htmlFor="passw">Password</label>
                                    <div className="pass-filed">
                                <input type="text" name="passw" id="passw" />
                                    </div>
                        </div>
           
           
            <button className="login" type="submit">Login</button>
            <div className="forget">
            <a  href="#">forgot password?</a>
            </div>
          </form>
          </div>
          </div>
          </div> */}
     
         
 
  <div className="register-photo">
    <div className="form-container">
      <div className="image-holder" />
      <form method="post">
        <h2 className="text-center ">
          <strong>Create</strong> an account.
        </h2>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            name="password-repeat"
            placeholder="Password (repeat)"
          />
        </div>
        <div className="form-group mt-3">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />I agree to
              the license terms.
            </label>
          </div>
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-success btn-block" type="submit">
            Sign Up
          </button>
        </div>
        <a className="already mt-3" href="#">
          You already have an account? Login here.
        </a>
      </form>
    </div>
  </div>


    </>
  );
};

export default Signup;
