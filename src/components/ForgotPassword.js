import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-5">
            <div className="card login-card bg-light">
              <div className="text-center">
                <h5>Reset Password</h5>
                <p className="py-2">
                  We will send an Emial to change the Password
                </p>
              </div>
              <form>
                <input
                  required
                  type="email"
                  className="form-control py-2"
                  id="exampleDropdownFormEmail1"
                  placeholder="email@example.com"
                />

                <div className="py-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary py-2 login-button"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <Link className="text-center" to="/login-page">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
