import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CompareCard = (props) => {
  const {
    imageUrl,
    title,
    information,
    price,
    value,
    type,
    value1,
    material,
    value2,
    size,
    value3,
    strikedprice,
  } = props.compare;
  return (
    <div className="card position-relative shadow h-100">
      <RxCross1 className="position-absolute cross" />
      <img
        className="compare-image card-img-top img-fluid w-100"
        src={imageUrl}
        alt="shoe"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body pt-4">
        <h6 className="card-text">{information}</h6>
        <div className="d-flex flex-wrap">
          <p className="card-text">{price}</p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="text-danger">
            <strike>{strikedprice}</strike>
          </p>
        </div>
        <div className="compare-line-details">
          <h6 className="card-title">{title}</h6>
          <p className="card-title">{value}</p>
        </div>
        <div className="compare-line-details">
          <h6 className="card-title">{type}</h6>
          <p className="card-title">{value1}</p>
        </div>
        <div className="compare-line-details">
          <h6 className="card-title">{material}</h6>
          <p className="card-title">{value2}</p>
        </div>
        <div className="compare-line-details">
          <h6 className="card-title">{size}</h6>
          <p className="card-title">{value3}</p>
        </div>
      </div>
      <Link to="/" className="stretched-link"></Link>
    </div>
  );
};

export default CompareCard;
