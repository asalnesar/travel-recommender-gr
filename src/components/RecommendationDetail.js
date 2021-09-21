import React, { Component } from "react";
import Donut from "./Donut";
import { Col, Row } from "react-bootstrap";
import BarChartComponent from "./BarChartComponent";
import ScoreDetails from "./ScoreDetails";

const RecommendationDetail = ({ country, index }) => {
  return (
    <div>
      <div className="align-items-center" style={{ display: "flex" }}>
        <Donut country={country} isMapChart={false} label={index} />
        <div style={{ textAlign: "start", marginLeft: 10 }}>
          <h5>{country.name}</h5>
          <p className="footer-note">
            Each parameter's effect on the recommendation
          </p>
        </div>
      </div>
      <hr></hr>
      <h6>Overall score: {country.overallScore}</h6>
      <div>
        <p>Scores of {country.name} out of 100 based on your preferences:</p>
        <BarChartComponent scores={country.scores} />
      </div>
    </div>
  );
};

export default RecommendationDetail;
