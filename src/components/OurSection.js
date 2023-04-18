import { Consumer } from "../context";
import ShoeCard from "./ShoeCard";
import FeaturedCard from "./FeaturedCard";
import Pagination from "react-bootstrap/Pagination";
import RecommendationCard from "./RecommendationCard";
import React from "react";

const OurSection = () => {
  return (
    <Consumer>
      {(value) => {
        const { Shoes, Featureds, Recommendations } = value;
        return (
          <div className="row">
            {Shoes.map((shoe) => (
              <div key={shoe.id} className="col-12 col-md-4 py-4">
                <ShoeCard shoe={shoe} />
              </div>
            ))}
            {Featureds.map((feature) => (
              <div key={feature.id} className="col-12 col-md-4 py-4">
                <FeaturedCard feature={feature} />
              </div>
            ))}
            {Recommendations.map((recommendation) => (
              <div key={recommendation.id} className="col-12 col-md-4 py-4">
                <RecommendationCard recommendation={recommendation} />
              </div>
            ))}
            <Pagination className="align-items-center">
              <Pagination.First />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item active>{6}</Pagination.Item>
              <Pagination.Last />
            </Pagination>
          </div>
        );
      }}
    </Consumer>
  );
};

export default OurSection;
