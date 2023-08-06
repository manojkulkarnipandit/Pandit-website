import React from "react";
import "./aboutus.scss";
import ownerData from "./ownerData";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="owner-item item-1">
        <h3>{ownerData.yearsOfExperience}</h3>
        <h4>{ownerData.subheading}</h4>
        <p>{ownerData.yearDescription}</p>
      </div>
      <div className="owner-item item-2">
        <h3>{ownerData.happyClients}</h3>
        <h4>{ownerData.clientsubheading}</h4>
        <p>{ownerData.clientDescription}</p>
      </div>

      <div className="owner-item item-3">
        <h3>{ownerData.knowledgeCount}</h3>
        <h4>{ownerData.knowledgeHeading}</h4>
        <p>{ownerData.knowledgeDescription}</p>
      </div>
      <div className="owner-item item-4">
        <h3>{ownerData.language}</h3>
        <h4>{ownerData.languageSubheading}</h4>
        <p>{ownerData.languageDescription}</p>
      </div>
    </section>
  );
};

export default AboutUs;
