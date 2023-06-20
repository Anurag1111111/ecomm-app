import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import image from "../assets/app-store.png";
import image1 from "../assets/play-store.png";
import { BsTwitter, BsPinterest, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div
        className="container-fluid text-center footer"
        style={{ marginTop: "100px" }}
      >
        <div className="container-fluid text-center justify-content-center">
          <div className="container row pt-5">
            <div className="Forborder col-12 col-md-6">
              <h4 className="text-light mb-5 mt-1 mx-2">Sign-Up For offers</h4>
            </div>
            <div className="col-10 col-md-6">
              <div className="input-group forborder mb-4 mx-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="  Email here"
                  aria-label="  Email here"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <FaBeer />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-12 col-md-3 my-4">
            <h4 className="text-white font-weight-normal">Contact Us</h4>
            <address className="text-muted my-4">
              Email us at:
              <br />
              Ecomm@gmail.com
              <br />
              Box 564, Disneyland
              <br />
              USA
            </address>
            <Link to="/www.instagram.com">
              <BsInstagram className="text-primary icon-hover footer-icon fs-4 mx-2" />
            </Link>
            <Link to="/">
              <BsPinterest className="text-primary icon-hover footer-icon fs-4 mx-2" />
            </Link>
            <Link to="/">
              <BsTwitter className="text-primary icon-hover footer-icon fs-4 mx-2" />
            </Link>
            <Link to="/">
              <BsYoutube className="text-primary icon-hover footer-icon fs-4 mx-2" />
            </Link>
          </div>
          <div className="col-12 col-md-2 d-flex flex-column mouse-hover my-4">
            <h4 className="text-white font-weight-normal">Information</h4>
            <a className="text-muted my-2" href="/">
              Privacy Policy
            </a>
            <a className="text-muted my-2" href="/">
              REfund Policy
            </a>
            <a className="text-muted my-2" href="/">
              Shipping Policy
            </a>
            <a className="text-muted my-2" href="/">
              Terms of Services
            </a>
            <a className="text-muted my-2" href="/">
              Contact Us
            </a>
          </div>
          <div className="col-12 col-md-2 d-flex mouse-hover flex-column my-4">
            <h4 className="text-white font-weight-normal">Account</h4>
            <a className="text-muted my-2" href="/">
              Search
            </a>
            <a className="text-muted my-2" href="/">
              About Us
            </a>
            <a className="text-muted my-2" href="/">
              FAQ
            </a>
            <a className="text-muted my-2" href="/">
              Terms and Conditions
            </a>
            <a className="text-muted my-2" href="/">
              Account Help
            </a>
          </div>
          <div className="col-12 col-md-2 d-flex flex-column mouse-hover my-4">
            <h4 className="text-white font-weight-normal">Quick Links</h4>
            <a className="text-muted my-2" href="/">
              Accessories
            </a>
            <a className="text-muted my-2" href="/">
              Mobiles
            </a>
            <a className="text-muted my-2" href="/">
              Laptop
            </a>
            <a className="text-muted my-2" href="/">
              Smart Watches
            </a>
            <a className="text-muted my-2" href="/">
              Headphones
            </a>
          </div>
          <div className="col-12 col-md-3 my-4">
            <h4 className="text-white font-weight-normal">Our App</h4>
            <p className="text-muted my-4">
              Download our App and get 20% discount on your first order
            </p>
            <img className="applelogo" src={image} alt="app-store" />
            <img className="applelogo" src={image1} alt="app-store" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-muted">
            <p>Copyright © EcomApp {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
