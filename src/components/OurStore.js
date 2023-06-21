import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import { Provider } from "../context";
import OurSection from "./OurSection";

const OurStore = () => {
  return (
    <Provider>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="container">
        <div className="row">
          <div className="col-5 col-md-3">
            <div className="card">
              <h5>Shop by Categories</h5>
              <ul className="d-flex flex-column ul-list">
                <a className="text-dark" href="/">
                  Mobile
                </a>
                <a className="text-dark" href="/">
                  Laptop
                </a>
                <a className="text-dark" href="/">
                  Watch
                </a>
                <a className="text-dark" href="/">
                  Apparel
                </a>
              </ul>
            </div>
            <div className="card ">
              <h5>Filter By</h5>
              <label className="d-flex flex-row" htmlFor="brand">
                <b>Brand:</b>
              </label>

              <select style={{ width: "50%" }} id="brand">
                <option value="Fossil">Fossil</option>
                <option value="Adidas">Adidas</option>
                <option value="Reebok">Reebok</option>
                <option value="Nike">Nike</option>
                <option value="Asics">Asics</option>
                <option value="Samsung">Samsung</option>
              </select>
              <div className="py-2">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label className="pl-2" htmlFor="vehicle1">
                  &nbsp; New Collection
                </label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label htmlFor="vehicle2">&nbsp; Cash on Delivery</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle3"
                  name="vehicle3"
                  value="Boat"
                />
                <label htmlFor="vehicle3">&nbsp; Best products</label>
              </div>

              <h6>
                <b>Price:</b>
              </h6>
              <div className="d-flex align-items-center">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    style={{ height: "50%" }}
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    style={{ height: "80%" }}
                    id="floatingInput"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput">To</label>
                </div>
              </div>
              <h6>
                <b>Payment Method</b>
              </h6>
              <div>
                <input
                  type="radio"
                  id="key"
                  name="payment"
                  value="pay on delivery"
                />
                &nbsp;Pay on delivery
                <br />
                <input
                  type="radio"
                  id="key"
                  name="payment"
                  value="pay at checkout"
                />
                &nbsp;Pay at checkout <br />
              </div>
            </div>
          </div>
          <div className="col-7 col-md-9">
            <div className="d-flex top-bar justify-content-around">
              <label htmlFor="cars">Sort By Prefrence:</label>

              <select id="cars" style={{ width: "70%" }}>
                <option value="From A to Z">From A to Z</option>
                <option value="From Z to A">From Z to A</option>
                <option value="From New to Old">From New to Old</option>
                <option value="From Old to New">From Old to New</option>
              </select>
            </div>
            <div>
              <OurSection />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default OurStore;
