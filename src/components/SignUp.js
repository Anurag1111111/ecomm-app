import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";

const SignUp = () => {
  return (
    <>
      <Meta title="Sign Up" />
      <BreadCrumb title="Sign Up" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <div className="card login-card bg-light">
              <h5 className="text-center">Create Account</h5>
              <div className="form-group py-2">
                <label htmlFor="name1">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name1"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group py-2">
                <label htmlFor="name2">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name2"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group py-2">
                <label htmlFor="Email1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group py-2">
                <label htmlFor="exampleDropdownFormPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleDropdownFormPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="text-center py-2">
                <button type="submit" className="btn btn-primary login-button">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
