import React from "react";
import { Link } from "react-router-dom";

function NewCollectionCard(props) {
  const { imageUrl, title, information, price } = props.project;
  return (
    <div className="famous-card position-relative h-100 w-100 py-4">
      <img
        className="img-fluid new-img h-100 w-100"
        src={imageUrl}
        alt="watches"
        style={{ objectFit: "cover" }}
      />
      <div className="famous-content position-absolute">
        <h3 className="text-light">{title}</h3>
        <p className="text-light">{information}</p>
        <p className="text-light">{price}</p>
      </div>
      <Link to="/store" className="stretched-link"></Link>
    </div>
  );
}

export default NewCollectionCard;
