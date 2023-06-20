import { Consumer } from "../context";
import ShoeCard from "./ShoeCard";
import FeaturedCard from "./FeaturedCard";
import RecommendationCard from "./RecommendationCard";
import React, { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";

const OurSection = () => {
  const [page, setPage] = useState(1);

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
            <PaginationControl
              page={page}
              total={100}
              limit={20}
              changePage={(page) => {
                setPage(page);
                console.log(page);
              }}
              ellipsis={1}
            />
            {/* <Pagination className="align-items-center">
              <Pagination.First />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Last />
            </Pagination> */}
          </div>
        );
      }}
    </Consumer>
  );
};

export default OurSection;
