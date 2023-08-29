import React, { useState } from "react";
import axios from "axios";
import { NavLink,useNavigate  } from 'react-router-dom';
import "./signup.css";
const Signup = () => {
  const history = useNavigate();
  const [rout,setRout] = useState("")
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
});

const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
        ...prevUser,
        [name]: value
    }));
};

const PostData = async (e) => {
    e.preventDefault();
   

    try {
      const response = await axios.post("http://localhost:5000/blogs/signup", user);

        setRout("/login")
        console.log('User registered:');
        history("/login")
       
    } catch (error) {
      console.error('Signup failed:');
    }
};

  return (
    <>
      
  <div className="register-photo">
    <div className="form-container">
      <div className="image-holder" />
      <form method="POST" className="register-form" id="register-id">
        <h2 className="text-center ">
          <strong>Create</strong> an account.
        </h2>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="txt"
            name="name"
            value={user.name}
            onChange={handleInput}
            placeholder="name"
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            placeholder="Email"
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            placeholder="Password"
          />
        </div>
        <div className="form-group mt-3">
          <input
            className="form-control"
            type="password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInput}
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
          
            <button className="btn btn-success btn-block" type="submit" onClick={PostData}>
              Sign Up
            </button>
          
        </div>
        <NavLink className="already mt-3" to={rout}>
          You already have an account? Login here.
        </NavLink>
      </form>
    </div>
  </div>


    </>
  );
};

export default Signup;
