import React from 'react'

const LoginForm = () => {
  return (
    <>
      <div className="register-photo">
          <div className="form-container">
            <div className="image-holder" />
            <form method="post">
              <h2 className="text-center">
                <strong>Welcome</strong> Back
              </h2>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
            
             
              <div className="form-group">
                <button className="btn btn-success btn-block" type="submit">
                  Login
                </button>
              </div>
              <a className="already" href="#">
                forgot password?
              </a>
            </form>
          </div>
        </div>
    </>
  )
}

export default LoginForm
