import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const RecommendationCard = (props) => {
  const [color, setColor] = useState("grey");
  const clickbutton = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.getElementById("heart1").style.color = color;
  }, [color]);
  const {
    id,
    imageUrl,
    imageUrl1,
    title,
    information,
    price,
    strikedprice,
    starsTotal,
    starsActive,
  } = props.recommendation;
  const delivery = [];
  if (price >= "$150") {
    delivery.push("Free Delivery");
  } else {
    delivery.push("$4.00 Shipping Charge");
  }
  const starslist = [];
  for (let i = 0; i < starsTotal; i++) {
    if (i < starsActive) {
      starslist.push(
        <span key={uuid()} className="text-danger">
          <i className="bi bi-star-fill"></i>
        </span>
      );
    } else {
      starslist.push(
        <span key={uuid()}>
          <i className="bi bi-star"></i>
        </span>
      );
    }
  }
  return (
    <div className="card product-card shadow position-relative h-100">
      <div className="action-bar-1 position-absolute">
        <Link>
          <i
            className="fa fa-heart heart-color pl-3"
            onClick={() => {
              clickbutton("red");
            }}
            id="heart1"
          ></i>
        </Link>
      </div>
      <div className="product-image w-100">
        <img
          className="img-fluid card-img-top w-100 first-page-img"
          src={imageUrl}
          alt="watch-1"
        />
        <img
          className="img-fluid card-img-top w-100 first-page-img"
          src={imageUrl1}
          alt="Watch-2"
        />
      </div>
      <div className="card-body pt-4 pb-0">
        <Link to={`/recommendation/${id}`}>
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">{information}</p>
          {starslist}
          {/* <ReactStars count={5} size={24} value={4} color2={"#ffd700"} /> */}
          <div className="d-flex">
            <p>{price}</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="text-danger">
              <strike>{strikedprice}</strike>
            </p>
          </div>
          <p className="text-muted">{delivery}</p>
        </Link>
      </div>
      <div className="action-bar position-absolute">
        <div className="d-flex flex-column">
          <Link>
            <img
              className="py-2"
              style={{ width: "25px" }}
              src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png"
              alt="wat"
            />
          </Link>
          <Link>
            <img
              className="py-2"
              style={{ width: "25px" }}
              src="https://img.icons8.com/ios/50/null/compare-git.png"
              alt="wat1"
            />
          </Link>
          <Link>
            <img
              className="py-2"
              style={{ width: "25px" }}
              src="https://cdn-icons-png.flaticon.com/512/3112/3112970.png"
              alt="wat2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
