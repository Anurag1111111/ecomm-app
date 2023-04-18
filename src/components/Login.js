import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <div className="card login-card bg-light">
              <div className="form-group">
                <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group py-4">
                <label htmlFor="exampleDropdownFormPassword1">Password</label>
                <input
                  type="password"
                  required
                  className="form-control"
                  id="exampleDropdownFormPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-check py-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary py-2 login-button"
              >
                Sign in
              </button>

              <div className="py-2"></div>
              <Link to="/signup-page">New around here? Sign up</Link>
              <br />
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
