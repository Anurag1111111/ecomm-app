import React from "react";
import CompareCard from "./CompareCard";
import { Consumer } from "../context";

const CompareSection = () => {
  return (
    <Consumer>
      {(value) => {
        const { Compares } = value;
        return (
          <div className="row">
            {Compares.map((compare) => (
              <div key={compare.id} className="col-12 col-md-4 my-2">
                <CompareCard compare={compare} />
              </div>
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};

export default CompareSection;
