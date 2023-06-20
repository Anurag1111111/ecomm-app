import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-light" style={{ marginBottom: "100px" }}>
      <nav className="navbar navbar-expand-sm fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light px-4">
            EcomApp
          </Link>

          <div className="input-group top-search fixed-top pt-4 mt-4">
            <input
              type="text"
              className="form-control h-100"
              placeholder="Search here"
              aria-label="Search here"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span className="input-group-text h-100" id="basic-addon2">
                <BsSearch />
              </span>
            </div>
          </div>

          <button
            className="navbar-toggler mx-0 mt-2 btn-outline-info"
            data-bs-toggle="collapse"
            data-bs-target="#collapseNav"
          >
            <i className="bi bi-list fs-3"></i>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 justify-space-around"
            id="collapseNav"
          >
            <div className="icons navbar-nav mx-2">
              <Link to="/store" className="d-flex gap-10">
                <i className="icon text-light bi bi-bag-heart-fill mt-4"></i>
                <p className="text-light pt-3">
                  Our <br /> Store
                </p>
              </Link>
            </div>
            <div className="icons1 navbar-nav mx-2">
              <Link to="/compare-product" className="d-flex gap-10">
                <i className="icon text-light bi bi-arrow-repeat mt-4"></i>
                <p className="text-light pt-3">
                  Compare <br /> Products
                </p>
              </Link>
            </div>
            <div className="icons1 navbar-nav mx-2">
              <Link to="/login-page" className="d-flex gap-10">
                <i className="icon text-light bi bi-people mt-4"></i>
                <p className="text-light dropdown pt-3">
                  Login <br /> Account
                </p>
              </Link>
            </div>
            <div className="icons2 navbar-nav mx-2">
              <Link to="/product-whishlist" className="d-flex gap-10">
                <i className="icon text-light bi bi-heart fa-10x mb-0 mt-4"></i>
                <p className="text-light pt-3">
                  Product <br /> Whishlist
                </p>
              </Link>
            </div>
            <div className="icons2 navbar-nav mx-2">
              <Link to="/cart" className="d-flex gap-10">
                <i className="icon text-light bi bi-cart3 mt-4 mb-0"></i>
                <div className="d-flex flex-column">
                  <span className="badge bg-white text-dark">0</span>
                  <p className="text-light pt-3">Cart</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
