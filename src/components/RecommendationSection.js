import React from "react";
import { Consumer } from "../context";
import RecommendationCard from "./RecommendationCard";

const RecommendationSection = () => {
  return (
    <Consumer>
      {(value) => {
        const { Recommendations } = value;
        return (
          <div className="container py-5">
            <h3>Recommended Products</h3>
            <div className="row">
              {Recommendations.map((recommendation) => (
                <div key={recommendation.id} className="col-12 col-md-3 py-4">
                  <RecommendationCard recommendation={recommendation} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default RecommendationSection;
