import React from "react";
import { Col, Row, Card, Overlay } from "react-bootstrap";

const COLORS = ["#7030a0", "#00b050", "#ffc000", "#0070c0"];

export const ScoreRow = ({ name, value, color }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <span
        style={{
          width: 15,
          height: 15,
          backgroundColor: color,
          marginRight: 5,
        }}
      ></span>
      <p className="footer-note">
        {name}: {value}/100
      </p>
    </div>
  );
};

const ScoreDetails = ({ country, currentRef, show }) => {
  return (
    <Card>
      <Card.Title className="footer-note">
        scores for {country.name}:
      </Card.Title>
      <Card.Body>
        {country.scores.map((item, index) => (
          <ScoreRow
            name={item.name}
            value={item.value}
            color={COLORS[index % COLORS.length]}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default ScoreDetails;
