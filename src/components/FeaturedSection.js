import React from "react";
import { Consumer } from "../context";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  return (
    <Consumer>
      {(value) => {
        const { Featureds } = value;
        return (
          <div className="container py-5">
            <h3>Watch Collection</h3>
            <div className="row">
              {Featureds.map((feature) => (
                <div key={feature.id} className="col-12 col-md-3 py-4">
                  <FeaturedCard feature={feature} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default FeaturedSection;
