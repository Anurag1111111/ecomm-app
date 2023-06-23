import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import { Provider } from "../context";
import OurSection from "./OurSection";
import FilterPortion from "./FilterPortion";
import { useState } from "react";

const OurStore = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <Provider>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div
              className="df btn btn-primary mb-3 mt-0"
              onClick={ToggleSidebar}
            >
              <i className="fa fa-bars"></i>
            </div>

            <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
              <div className="sd-header">
                <div className="df btn btn-primary" onClick={ToggleSidebar}>
                  <i className="fa fa-times"></i>
                </div>
              </div>
              <div className="sd-body">
                <FilterPortion />
              </div>
            </div>

            <div
              className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
              onClick={ToggleSidebar}
            ></div>
          </div>
          <div className="col-12 col-md-9">
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
