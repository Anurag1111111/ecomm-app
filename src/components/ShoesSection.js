import React from "react";
import { Consumer } from "../context";
import ShoeCard from "./ShoeCard";

const ShoesSection = () => {
  return (
    <Consumer>
      {(value) => {
        const { Shoes } = value;
        return (
          <div className="container py-5">
            <h3>Shoe Collection</h3>
            <div className="row">
              {Shoes.map((shoe) => (
                <div key={shoe.id} className="col-12 col-md-3 py-4">
                  <ShoeCard shoe={shoe} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default ShoesSection;
