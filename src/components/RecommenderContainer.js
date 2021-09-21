import React, { Component, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import RecommendationDetail from "./RecommendationDetail";

const RecommenderContainer = ({ countries, activeRecommendation }) => {
  // const [scoredCountries, setScoredCountries] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   let sorted = sortCountries(countries);
  //   // setScoredCountries(sorted);
  // }, [countries]);

  useEffect(() => {
    console.log("HERE");
    // console.log(scoredCountries);

    const index = countries.findIndex(
      (item) => item.id === activeRecommendation
    );
    console.log(index);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeRecommendation]);

  function sortCountries(unsortedArray) {
    console.log("ass");
    console.log(unsortedArray);
    let sorted = unsortedArray;
    sorted.sort((a, b) => b.overallScore - a.overallScore);
    return sorted;
  }
  console.log(countries);
  return (
    <div style={{ height: "100%" }}>
      <h3>Best Matched countries for your holiday</h3>
      <div className="scrollable-div">
        <Accordion activeKey={activeIndex}>
          {countries?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {index + 1}. {item.name}
              </Accordion.Header>
              <Accordion.Body>
                <RecommendationDetail country={item} index={index + 1} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default RecommenderContainer;
