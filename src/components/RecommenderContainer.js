import React, { Component, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import RecommendationDetail from "./RecommendationDetail";

const RecommenderContainer = ({ countries, activeRecommendation }) => {
  // const [scoredCountries, setScoredCountries] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeId, setActiveId] = useState(activeRecommendation);

  useEffect(() => {
    setActiveId(activeRecommendation);
    const index = countries.findIndex(
      (item) => item.id === activeRecommendation
    );
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [activeRecommendation]);

  useEffect(() => {
    if (activeIndex === -1) return;
    const index = countries.findIndex((item) => item.id === activeId);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [countries]);

  return (
    <div style={{ height: "100%" }}>
      <h3>Best Matched countries for your holiday</h3>
      <div className="scrollable-div">
        <Accordion activeKey={activeIndex}>
          {countries?.map((item, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header
                onClick={() => {
                  if (index === activeIndex) {
                    setActiveIndex(-1);
                  } else {
                    setActiveIndex(index);
                    setActiveId(item.id);
                  }
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
