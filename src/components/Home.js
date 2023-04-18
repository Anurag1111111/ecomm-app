import React from "react";
import image from "../assets/music-image.jpg";
import Meta from "./Meta";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import image1 from "../assets/Phone.jpg";
import image2 from "../assets/phone-1.jpg";
import image3 from "../assets/white-tee.jpg";
import image4 from "../assets/watch-2.jpg";
import logo1 from "../assets/logo-coca-cola.png";
import logo2 from "../assets/logo-godrej.png";
import logo3 from "../assets/logo-oppo.png";
import logo4 from "../assets/logo-philips.png";
import logo5 from "../assets/logo-wrangler.png";
import logo6 from "../assets/logo-paypal.png";
import { FaShippingFast, FaGift } from "react-icons/fa";
import { RiCustomerService2Fill, RiSecurePaymentFill } from "react-icons/ri";
import NewCollectionSection from "./NewCollectionSection";
import { Provider } from "../context";
import FeaturedSection from "./FeaturedSection";
import ShoesSection from "./ShoesSection";
import RecommendationSection from "./RecommendationSection";

const Home = () => {
  return (
    <>
      <Provider>
        <Meta title="Ecomm App" />
        <section className="home-sec-1 py-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="banner-1 position-relative mb-4">
                  <img
                    className="img-fluid rounded-3"
                    src={image}
                    alt="music1"
                  />
                  <div className="banner-2 position-absolute">
                    <h2>Extraa Bass</h2>
                    <h5>IPhone-13+Pro</h5>
                    <p>Start from $500</p>
                    <Link to="/store">
                      <button className="btn btn-secondary btn-md">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex flex-wrap justify-content-around">
                  <div className="banner-11 my-2 position-relative">
                    <img
                      className="img-fluid watch rounded-3"
                      src={image1}
                      alt="music2"
                    />
                    <div className="banner-2 position-absolute">
                      <h5 className="text-light">Camera Phone</h5>

                      <Link to="/store">
                        <button className="btn btn-secondary btn-md">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="banner-11 my-2 position-relative"
                    // style={{ marginTop: "10px" }}
                  >
                    <img
                      className="img-fluid rounded-3 phone"
                      src={image2}
                      alt="music3"
                    />
                    <div className="banner-3 position-absolute">
                      <h5 className="text-light">Iphone-14</h5>

                      <Link to="/store">
                        <button className="btn btn-secondary btn-md">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="banner-11 mt-3 position-relative">
                    <img
                      className="img-fluid rounded-3"
                      src={image3}
                      alt="music4"
                    />
                    <div className="banner-2 position-absolute">
                      <h5 className="text-light">Appreals</h5>

                      <Link to="/store">
                        <button className="btn btn-secondary btn-md">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div
                    className="banner-11 mt-3 position-relative"
                    // style={{ marginTop: "10px" }}
                  >
                    <img
                      className="img-fluid rounded-3"
                      src={image4}
                      alt="music5"
                    />
                    <div className="banner-3 position-absolute">
                      <h5 className="text-light">Watches</h5>

                      <Link to="/store">
                        <button className="btn btn-secondary btn-md">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-sec-2 py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="services d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex">
                    <FaShippingFast className="reicon" />
                    <div className="mx-2">
                      <h5> Free Shipping</h5>
                      <p>From orders above $10</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <FaGift className="reicon" />
                    <div className="mx-2">
                      <h5>Specials Offers Daily</h5>
                      <p>Save upto 25%</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <RiCustomerService2Fill className="reicon" />
                    <div className="mx-2">
                      <h5>Customer Support</h5>
                      <p>24/7 support available</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <RiSecurePaymentFill className="reicon" />
                    <div className="mx-2">
                      <h5>Secure Payments</h5>
                      <p>100% Purchase Protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeaturedSection />

        {/* <section className="famous-part">
        <div className="container">
          <h3>New Collection</h3>
          <div className="row">
            <div className="col-12 col-md-4">
              <Link to="/">
                <div className="famous-card position-relative h-100 w-100 py-4">
                  <img
                    className="img-fluid new-img h-100 w-100"
                    src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt="watches"
                  />
                  <div className="famous-content position-absolute">
                    <h3 className="text-light">Ellegent Watches</h3>
                    <p className="text-light">
                      Watches that enhances personality
                    </p>
                    <p className="text-light">Starting from $50.00</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-4">
              <Link to="/">
                <div className="famous-card position-relative h-100 w-100 py-4">
                  <img
                    className="img-fluid new-img h-100 w-100 "
                    src="https://images.pexels.com/photos/8166966/pexels-photo-8166966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="watches"
                  />
                  <div className="famous-content position-absolute">
                    <h3 className="text-dark">New Smartphones</h3>
                    <p className="text-dark">5G Smartphones</p>
                    <p className="text-dark">Starting from $100.00</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-4">
              <Link to="/">
                <div className="famous-card position-relative h-100 w-100 py-4">
                  <img
                    className="img-fluid new-img h-100 w-100 "
                    src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt="watches"
                  />
                  <div className="famous-content position-absolute">
                    <h3 className="text-dark">Headphones</h3>
                    <p className="text-dark">Headphones with extra bass</p>
                    <p className="text-light text-muted">
                      Starting from $30.00
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
        <NewCollectionSection />
        {/* <section className="home-featured-product py-5">
          <h3 className="container pb-4">Featured Collection</h3>
          <div className="container">
            <div className="row">
              <div className="col-12"></div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section> */}
        <ShoesSection />
        <RecommendationSection />
        <section className="home-sec-marquee">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <Marquee speed={60} pauseOnHover={true}>
                    <div>
                      <img className="mx-4" src={logo1} alt="cola" />
                    </div>
                    <div>
                      <img className="mx-4" src={logo2} alt="cola" />
                    </div>
                    <div>
                      <img className="mx-4" src={logo3} alt="cola" />
                    </div>
                    <div>
                      <img className="mx-4" src={logo4} alt="cola" />
                    </div>
                    <div>
                      <img className="mx-4" src={logo6} alt="cola" />
                    </div>
                    <div>
                      <img className="wrangler mx-4" src={logo5} alt="cola" />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Provider>
    </>
  );
};

export default Home;
