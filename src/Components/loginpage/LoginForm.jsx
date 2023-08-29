import React, { useState } from 'react'
import './login.css';
import { NavLink,useNavigate  } from 'react-router-dom';
import axios from 'axios';




const LoginForm = () => {
  const history = useNavigate();
      const [client,setClient] = useState({
        email: "",
        password: ""
      });

      const handleInput = (e) => {
        const { name, value } = e.target;
        setClient((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

      const PostData = async (e) => {
        e.preventDefault();
       
    
        try {
          const response = await axios.post("http://localhost:5000/blogs/logins", client);


    
            console.log('User login');
            history("/Home")
           
        } catch (error) {
          console.error('login failed:');
        }
    };
  return (
    <>
      <div className="register-photo m-3">
          <div className="form-container">
            <div className="image-holder" />
            <form method="post">
              <h2 className="text-center m-5">
                <strong>Welcome</strong> Back
              </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={client.email}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={client.password}
                  onChange={handleInput}
                />
              </div>
            
             
              <div className="form-group">
                <button className="btn btn-success btn-block mt-3" onClick={PostData} type="submit">
                  Login
                </button>
              </div>
              <a className="already" href="#">
                forgot password?
              </a>
              <NavLink className="already" to="/">
                you do not have account
              </NavLink>
            </form>
          </div>
        </div>
    </>
  )
}

export default LoginForm
