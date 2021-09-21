import React from "react";
import Donut from "./Donut";
import BarChartComponent from "./BarChartComponent";

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
      <div>
        <p className="footer-note">
          Scores of {country.name} out of 100 based on your preferences:
        </p>
        <BarChartComponent scores={country.scores} />
        <hr />
        <p>Overall score: {country.overallScore}/100</p>
      </div>
    </div>
  );
};

export default RecommendationDetail;
