import React, { Component } from "react";
import "./Card.css";

const Card = ({ tools, desc, imgurl }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Terramental</h2>
        <p>{tools}</p>
      </div>
      <div className="image-desc-container">
        <img
          src={imgurl}
          alt="terramental1"
          className="project-img"
        />
        <div className="project-info">
          <p>{desc}</p>
          {/* Uncomment if needed */}
          {/* <ul>
            {info?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
        </div>
      </div>
      <div className="btn-container">
        {/* Add any buttons here if needed */}
      </div>
    </div>
  );
};

export default Card;
