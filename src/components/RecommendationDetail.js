import React, { Component } from "react";
import Donut from "./Donut";
import BarChartComponent from "./BarChartComponent";

const RecommendationDetail = ({ country, index }) => {
  return (
    <div>
      <div className="justify-content-center accordion-body-details">
        <Donut scores={country.scores} isMapChart={false} />
        <h1 className="label-on-donut">{index}</h1>
      </div>
      <h3>{country.name}</h3>
      <div>
        <BarChartComponent scores={country.scores} />
      </div>
    </div>
  );
};

export default RecommendationDetail;
