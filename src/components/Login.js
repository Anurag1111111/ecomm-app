import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8080/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const isSuccessful = response.data.isSuccessful;
        console.log(isSuccessful);
        if (!isSuccessful) {
          setLoginStatus(response.data.message);
          alert("Wrong Username Password");
        } else if (isSuccessful) {
          navigate("/");
          alert("Login SUCCESSFULLY");
        }
      });

    e.target.reset();
  };
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <div className="card login-card bg-light">
              <form
                onSubmit={login}
                action="/api/login"
                method="post"
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="Email1">Email address</label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="Email1"
                    className="form-control"
                    id="Email1"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div className="form-group py-4">
                  <label htmlFor="Password1">Password</label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="Password1"
                    required
                    className="form-control"
                    id="Password1"
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
              </form>

              <div className="py-2"></div>
              <Link to="/signup-page">New around here? Sign up</Link>
              <br />
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </div>
        <h1>{loginStatus}</h1>
      </div>
    </>
  );
};

export default Login;
