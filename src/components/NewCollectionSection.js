import React from "react";
import { Consumer } from "../context";
import NewCollectionCard from "./NewCollectionCard";

function NewCollectionSection() {
  return (
    <Consumer>
      {(value) => {
        const { Projects } = value;
        return (
          <div className="container py-5">
            <h3>New Collection</h3>
            <div className="row">
              {Projects.map((project) => (
                <div key={project.id} className="col-12 col-md-4">
                  <NewCollectionCard project={project} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default NewCollectionSection;
