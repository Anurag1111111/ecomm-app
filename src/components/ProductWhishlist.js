import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import { Link } from "react-router-dom";

const ProductWhishlist = () => {
  return (
    <>
      <Meta title={"Product Whishlist"} />
      <BreadCrumb title="Product Whishlist" />
      <div className="text-center">
        <h4>Please Login First</h4>
        <p className="text-muted py-4">Login to view items in List</p>
        <div className="d-flex flex-column align-items-center">
          <img
            className="py-4 product-whishlist"
            src="https://danapointjewelers.com/assets/images/empty-wishlist.png"
            alt="whishlist"
          />
          <Link to="/login-page">
            <button
              type="submit"
              className="btn btn-lg btn-primary py-2 w-100 login-button"
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductWhishlist;
