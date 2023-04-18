import React, { useState } from "react";
import { Consumer } from "../context";
import { useParams } from "react-router-dom";
import ShoeCard from "./ShoeCard";
import FeaturedCard from "./FeaturedCard";
import { v4 as uuid } from "uuid";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosGitCompare } from "react-icons/io";
import RecommendationCard from "./RecommendationCard";

const RecommendationPage = () => {
  const [ordered] = useState(true);
  const { id } = useParams();

  return (
    <Consumer>
      {(value) => {
        const { Shoes, Featureds, Recommendations } = value;
        const recommendation = Recommendations.filter(
          (recommendation) => recommendation.id == id
        )[0];
        const {
          imageUrl,
          title,
          price,
          stock,
          paragraph,
          strikedprice,
          information,
          starsTotal,
          starsActive,
          color,
          rev,
        } = recommendation;
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
          <div className="container pt-5 markdown">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="justify-content-center">
                  {/* <img src={imageUrl} alt={title} className="w-100" /> */}
                  <Zoom>
                    <img
                      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                      src={imageUrl}
                      width="500"
                    />
                  </Zoom>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="text-left pt-4">
                  <h3 className="font-weight-light">{title}</h3>
                  <h5 className="compare-line-details  my-3">{information}</h5>
                  <div className="d-flex">
                    <p>Price: {price}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p className="text-danger">
                      <strike>{strikedprice}</strike>
                    </p>
                  </div>
                  <h6 className="py-2">Color : {color}</h6>
                  <h6 className="py-2">Availability: {stock}</h6>
                </div>
                <div className="d-flex align-items-center flex-row mb-3 py-2">
                  <h6>Quantity :</h6>&nbsp;&nbsp;
                  <div>
                    <input type="number" min={0} max={10} />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/cart">
                    <button className="btn bg-danger btn-outline-light">
                      Add to Cart
                    </button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn bg-secondary btn-outline-light">
                    Buy Now
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3 pb-4">
                  <a href="/">
                    <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                  </a>
                  <a href="/">
                    <IoIosGitCompare className="fs-5 me-2" /> Add to Compare
                  </a>
                </div>
                <div className="div compare-line-details">
                  <Link to="#reviews">
                    <div className="d-flex pt-4">
                      {starslist}&nbsp;&nbsp;&nbsp;&nbsp;
                      <p>Based on {rev} reviews</p>
                    </div>
                  </Link>
                </div>
                <div className="compare-line-details">
                  <div className="text-justify">
                    <p>{paragraph}</p>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Shipping & Returns
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        We dispatch your order through reputed logistics partner
                        (Depending upon your location).Normally, we ship your
                        order <b>within 24 to 48 hours</b> of receiving the
                        order. <br /> There are few things, which customer needs
                        to make sure before returning the product. <br />
                        (1) Your item must be unused and in the same condition
                        that you received it. <br /> (2) The item must be in the
                        original packaging. <br /> (3) All brand tags should be
                        intact.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Cancellation or Modification
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        You can cancel order only before we have processed your
                        order. You can do so by contacting to our customer care
                        at <b>+91 8196922333, 0161-5048700, 18001800501</b>. If
                        the order is already processed for shipping than we
                        won’t be able to cancel it. You cannot modify the size,
                        color or shipping address of your order.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Coupons and Credit
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Please note redeem credit value should be equal or less
                        than the cart value. If credit value is equal to cart
                        value, Customer can place the order on 0 prepaid
                        checkout. In case credit value is less than cart value,
                        the order can be placed by paying the rest value through
                        Credit /Debit Card/Net Banking/Paytm or COD as per the
                        availability. The payment will reflect as per the
                        remaining paid value.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-justify p-3 bg-light">
                <h3>Product Details</h3>
                <p id="reviews">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-12 py-4">
                <div className="review">
                  <h4>Customer Reviews</h4>
                  <div className="d-flex pt-4">
                    {starslist}&nbsp;&nbsp;&nbsp;&nbsp;
                    <p>Based on {rev} reviews</p>
                  </div>
                  {ordered && (
                    <div>
                      <a className="float-end mb-0" href="/">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <h4 className="mx-4 pt-4">You may also like</h4>
              <div className="d-flex flex-nowrap overflow-auto scrollbar">
                {Shoes.map((shoe) => (
                  <div key={shoe.id} className="col-12 col-md-3 pt-4 mx-4">
                    <ShoeCard shoe={shoe} />
                  </div>
                ))}
                {Featureds.map((feature) => (
                  <div key={feature.id} className="col-12 col-md-3 pt-4 mx-4">
                    <FeaturedCard feature={feature} />
                  </div>
                ))}
                {Recommendations.map((recommendation) => (
                  <div
                    key={recommendation.id}
                    className="col-12 col-md-3 pt-4 mx-4"
                  >
                    <RecommendationCard recommendation={recommendation} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default RecommendationPage;
