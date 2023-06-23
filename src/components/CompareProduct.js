import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";
import CompareSection from "./CompareSection";
import { Provider } from "../context";
import FilterPortion from "./FilterPortion";

const CompareProduct = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <Provider>
      <Meta title="Compare Products" />
      <BreadCrumb title="Compare Products" />
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
            <CompareSection />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default CompareProduct;
