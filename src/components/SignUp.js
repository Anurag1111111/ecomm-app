import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [first_name, setUsername] = useState("");
  const [last_name, setLastUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8080/api/register", {
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        }
      });
    e.target.reset();
    alert("ACCOUNT CREATED SUCCESSFULLY");
  };

  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <div className="card login-card bg-light">
              <h5 className="text-center">Create Account</h5>
              <form
                onSubmit={register}
                action="/api/register"
                method="post"
                enctype="multipart/form-data"
              >
                <div className="form-group py-2">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    id="first_name"
                    placeholder="First Name"
                    required
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group py-2">
                  <label htmlFor="name2">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    id="name2"
                    required
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group py-2">
                  <label htmlFor="Email1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email1"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group py-2">
                  <label htmlFor="Password1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password1"
                    name="password"
                    required
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="text-center py-2">
                  <button
                    type="submit"
                    className="btn btn-primary login-button"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="py-5 mx-2 text-center">
          <h1
            style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }}
          >
            {registerStatus}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SignUp;
