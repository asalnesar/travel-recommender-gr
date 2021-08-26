import React, { Component, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import RecommendationDetail from "./RecommendationDetail";

const RecommenderContainer = ({ countries }) => {
  const [scoredCountries, setScoredCountries] = useState([]);

  useEffect(() => {
    let countryArray = calculateOverallScores(countries);
    let sorted = sortCountries(countryArray);
    setScoredCountries(sorted);
  }, [countries]);

  function calculateOverallScores(countries) {
    let countryArray = [];
    countries.forEach((country) => {
      let sum = 0;
      country.scores.forEach((item) => {
        sum += item.value;
      });
      let scoredCountry = {
        score: sum / 4,
        country: country,
      };
      countryArray.push(scoredCountry);
    });
    return countryArray;
  }

  function sortCountries(unsortedArray) {
    let sorted = [].concat(unsortedArray);
    sorted.sort((a, b) => b.score - a.score);
    return sorted;
  }
  return (
    <div style={{ height: "100%" }}>
      <h3>Best Matched countries for your holiday</h3>
      <div className="scrollable-div">
        <Accordion>
          {scoredCountries?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                {index + 1}. {item.country.name}
              </Accordion.Header>
              <Accordion.Body>
                <RecommendationDetail
                  country={item.country}
                  index={index + 1}
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default RecommenderContainer;
