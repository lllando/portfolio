import React, { Component } from "react";
import "./About.css";

const About = ({ title, header, desc, imgUrl }) => {
  return (
    <div className="about">
      <div className="details-container">
        <img
          src={imgUrl}
          alt="Experience icon"
          className="icon"
        />
      </div>
      <div className="about-details">
        <h3>{title}</h3>
        {header.map((h, index) => (
          <p key={index}><strong>{h}: </strong>{desc[index]}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
